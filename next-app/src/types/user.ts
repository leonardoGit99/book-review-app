export type User = {
  id: number,
  name: string,
}

export type NewUser = Omit<User, 'id'> & {
  email: string,
  password: string
}