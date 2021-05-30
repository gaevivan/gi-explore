export namespace Auth {
  export interface SignIn {
    login: string;
    password: string;
    remember: boolean;
  }
  export interface SignUp {
    login: string;
    password: string;
    verify: string;
  }
}
