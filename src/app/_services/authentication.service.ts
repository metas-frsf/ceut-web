import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "@app/_models";
import { AuthService } from "@auth0/auth0-angular";

const apiPrefix: string = "api/users";

@Injectable({ providedIn: "root" })
export class AuthenticationService {

  get currentUser$(): Observable<User> {
    return this._currentUser$.asObservable();
  }

  private _currentUser$: BehaviorSubject<User>;

  constructor(private auth0Service: AuthService, private http: HttpClient) {
    this._currentUser$ = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
  }

  public get currentUserValue(): User {
    return this._currentUser$.value;
  }

  public loginWithRedirect() {
    this.auth0Service.loginWithRedirect();
  }

  public loginWithEmail(email: string) {
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

  public loginWithUserNameAndPassword(userName: string, password: string) {
    return this.http
      .post<any>(`${apiPrefix}/authenticate`, {
        userName,
        password,
      })
      .pipe(
        map((user) => {
          // login successful if there's a jwt token in the response
          if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem("currentUser", JSON.stringify(user));
            this._currentUser$.next(user);
          }

          return user;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
    this._currentUser$.next(null);
    this.auth0Service.logout({ federated: true });
  }
}
