import { User } from 'src/domain/user/entities/user'

export class UserRepository {
  private users = [] as User[]

  insert(user: User): User {
    this.users.push(user)
    return user
  }

  get(id: string): User {
    const user = this.users.find((user) => user.id === id)
    return user
  }

  delete(id: string): void {
    this.users = this.users.filter((user) => user.id !== id)
  }
}
