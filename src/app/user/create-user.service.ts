import { Inject, Injectable } from '@nestjs/common'
import { IService } from 'src/domain/common/interfaces'
import { User } from 'src/domain/user/entities/user'
import { ICreateUser } from 'src/domain/user/interfaces'
import { TYPES } from 'src/infrastructure/crosscutting/types'
import { UserRepository } from 'src/infrastructure/databases/prisma/repositories/user'

@Injectable()
export class CreateUserService implements IService<ICreateUser, Promise<User>> {
  constructor(
    @Inject(TYPES.UserRepository)
    private readonly userRepository: UserRepository
  ) {}

  async handler(params: ICreateUser): Promise<User> {
    const user = User.create(params)
    await this.userRepository.insert(user)
    return user
  }
}
