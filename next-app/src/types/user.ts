export type User = {
  id: number,
  name: string,
}

export type NewUser = Omit<User, 'id'> & {
  email: string,
  password: string
}

export type LoggedUser = {
  userId: number;
  name: string;
  iat: number;
  exp: number
};