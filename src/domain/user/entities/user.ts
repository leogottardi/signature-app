import { randomUUID } from 'crypto'
import { ICreateUser } from '../interfaces'

export class User {
  id = randomUUID()
  name: string
  email: string
  document: string
  created_at = new Date()
  updated_at?: Date

  static create(props: ICreateUser): User {
    const user = new User()
    Object.assign(user, props)
    return user
  }
}
