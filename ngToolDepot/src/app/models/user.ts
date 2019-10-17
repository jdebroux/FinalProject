export class User {
  id: number;
  email: string;
  username: string;
  password: string;

  constructor(
    id?: number,
    username?: string,
    password?: string,
    email?: string)
    {
      this.id = id;
      this.username = username;
      this.password = password;
      this.email = email;
    }
}
