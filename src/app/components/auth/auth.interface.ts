export interface ILogin {
  emailAddress: string;
  password: string;
}

export interface IRegister {
  emailAddress: string;
  password: string;
  isAdmin: boolean;
  role: string;
}

export type Id = string;
export type ResourceId = { id: Id };
