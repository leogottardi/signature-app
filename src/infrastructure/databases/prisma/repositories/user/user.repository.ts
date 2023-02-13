import { User } from 'src/domain/user/entities/user'
import { Inject } from '@nestjs/common'
import { TYPES } from 'src/infrastructure/crosscutting/types'
import { PrismaClient } from 'prisma/prisma-client'

export class UserRepository {
  private users = [] as User[]

  constructor(
    @Inject(TYPES.PrismaConnection)
    private readonly connection: PrismaClient
  ) {}

  async insert(user: User): Promise<User> {
    await this.connection.user.create({
      data: {
        name: user.name,
        email: user.email,
        document: user.document
      }
    })
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
