import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '@app/_models';
import {environment} from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  getById(id: number) {
    return this.http.get(`${environment.apiUrl}/users/${id}`);
  }

  register(user: User) {
    return this.http.post(`/users/register`, user);
  }

  update(user: User) {
    return this.http.put(`/users/${user.id}`, user);
  }

  delete(id: number) {
    return this.http.delete(`/users/${id}`);
  }

}
