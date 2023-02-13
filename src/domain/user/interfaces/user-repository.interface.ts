import { User } from '../entities/user'
import { IGetUser } from './get-user.interface'

export interface IUserRepository {
  insert(user: User): Promise<User>
  get(props: IGetUser): Promise<User>
  delete(id: string): Promise<void>
}
