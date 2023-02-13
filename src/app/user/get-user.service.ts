import { Inject } from '@nestjs/common'
import { IService } from '@domain/common/interfaces'
import { User } from '@domain/user/entities/user'
import { IGetUser, IUserRepository } from '@domain/user/interfaces'
import { TYPES } from '@infrastructure/crosscutting/types'

export class GetUserService implements IService<IGetUser, Promise<User>> {
  constructor(
    @Inject(TYPES.UserRepository)
    private readonly userRepository: IUserRepository
  ) {}

  async handler(params: IGetUser): Promise<User> {
    return await this.userRepository.get(params)
  }
}
