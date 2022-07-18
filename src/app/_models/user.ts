export class User {
  id: number;
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  token: string;
  avatar: string;
  email: string;
  roles: UserRole[];
}

export interface UserRole {
  id: number;
  description: string;
}

export enum EUserRole {
  ADMINISTRATOR = 1,
  CEUT_SECRETARY = 2,
  CEUT_SCHOLAR = 3,
  CEUT_PRESIDENT = 4,
  COUNSELOR = 5,
}
