export interface ILogin {
  emailAddress: string;
  password: string;
}

export interface IRegister {
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
  phoneNumber: string;
  isAdmin: boolean;
  role: string;
}

export type Id = string;
export type ResourceId = { id: Id };
