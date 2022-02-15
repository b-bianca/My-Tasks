export class User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: Date;
  updateAt: Date;
  active?: boolean;
}
