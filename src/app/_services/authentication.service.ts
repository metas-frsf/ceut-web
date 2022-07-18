import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, of } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { User } from "@app/_models";
import { AuthService } from "@auth0/auth0-angular";

const apiPrefix: string = "api/users";

@Injectable({ providedIn: "root" })
export class AuthenticationService {

  public get currentUserValue(): User {
    return this._currentUser$.value;
  }

  get currentUser$(): Observable<User> {
    return this._currentUser$.asObservable();
  }

  private _currentUser$: BehaviorSubject<User>;

  constructor(private auth0Service: AuthService, private http: HttpClient) {
    this._currentUser$ = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
  }

  public init() {
    this.assignCurrentUser();
  }

  public loginWithRedirect() {
    this.auth0Service.loginWithRedirect();
  }

  public logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
    this._currentUser$.next(null);
    this.auth0Service.logout({ federated: true });
  }

  private getUserProfileUsingAuthProvider(): Observable<User> {
    return this.auth0Service.user$.pipe(
      switchMap((user) => {
        return user ? this.authenticateWithEmail(user.email) : of(null);
      })
    );
  }

  private authenticateWithEmail(email: string): Observable<User> {
    return this.http
      .post<any>(`${apiPrefix}/authenticateWithEmail`, { email })
      .pipe(
        map((user) => {
          if (user) {
            localStorage.setItem("currentUser", JSON.stringify(user));
            this._currentUser$.next(user);
          }
          return user;
        })
      );
  }

  private assignCurrentUser() {
    const subscription = this.getUserProfileUsingAuthProvider().subscribe(
      (user) => {
        if (user) {
          this._currentUser$.next(user);
          subscription.unsubscribe();
        }
      }
    );
  }
}
