import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "@app/_models";

const apiPrefix: string = "api/users";

@Injectable({ providedIn: "root" })
export class UserService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<User[]>(`${apiPrefix}/get`);
  }

  getById(id: number) {
    return this.http.get(`${apiPrefix}/${id}`);
  }

  register(user: User) {
    return this.http.post(`/${apiPrefix}/register`, user);
  }

  update(user: User) {
    return this.http.put(`${apiPrefix}/${user.id}`, user);
  }

  delete(id: number) {
    return this.http.delete(`${apiPrefix}/${id}`);
  }
}
