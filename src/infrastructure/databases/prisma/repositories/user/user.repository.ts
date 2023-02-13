import { User } from 'src/domain/user/entities/user'
import { Inject } from '@nestjs/common'
import { TYPES } from 'src/infrastructure/crosscutting/types'
import { PrismaClient } from 'prisma/prisma-client'
import { IGetUser, IUserRepository } from 'src/domain/user/interfaces'

export class UserRepository implements IUserRepository {
  constructor(
    @Inject(TYPES.PrismaConnection)
    private readonly connection: PrismaClient
  ) {}

  async insert(user: User): Promise<User> {
    await this.connection.user.create({
      data: user
    })
    return user
  }

  async get({ id, document }: IGetUser): Promise<User> {
    return await this.connection.user.findFirst({
      where: {
        id,
        document
      }
    })
  }

  async delete(id: string): Promise<void> {
    await this.connection.user.delete({
      where: {
        id
      }
    })
  }
}
