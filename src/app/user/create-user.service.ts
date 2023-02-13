import { Inject, Injectable } from '@nestjs/common'
import { IService } from '@domain/common/interfaces'
import { User } from '@domain/user/entities/user'
import { ICreateUser, IUserRepository } from '@domain/user/interfaces'
import { TYPES } from '@infrastructure/crosscutting/types'

@Injectable()
export class CreateUserService implements IService<ICreateUser, Promise<User>> {
  constructor(
    @Inject(TYPES.UserRepository)
    private readonly userRepository: IUserRepository
  ) {}

  async handler(params: ICreateUser): Promise<User> {
    const user = User.create(params)
    await this.userRepository.insert(user)
    return user
  }
}
