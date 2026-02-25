export interface IUserLoginData {
  email: string
  password: string
}

export interface IUserRegisterData extends IUserLoginData {
  full_name: string
}
