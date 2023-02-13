import { HttpException, HttpStatus, Inject } from '@nestjs/common'
import { IService } from 'src/domain/common/interfaces'
import { User } from 'src/domain/user/entities/user'
import { UserNotFoundError } from 'src/domain/user/errors'
import { IGetUser } from 'src/domain/user/interfaces'
import { TYPES } from 'src/infrastructure/crosscutting/types'
import { UserRepository } from 'src/infrastructure/databases/prisma/repositories/user'

export class GetUserService implements IService<IGetUser, Promise<User>> {
  constructor(
    @Inject(TYPES.UserRepository)
    private readonly userRepository: UserRepository
  ) {}

  async handler(params: IGetUser): Promise<User> {
    return await this.userRepository.get(params)
  }
}
