import { Inject } from '@nestjs/common'
import { IService } from 'src/domain/common/interfaces'
import { User } from 'src/domain/user/entities/user'
import { IGetUser } from 'src/domain/user/interfaces'
import { TYPES } from 'src/infrastructure/crosscutting/types'
import { UserRepository } from 'src/infrastructure/repositories/user'

export class GetUserService implements IService<IGetUser, User> {
  constructor(
    @Inject(TYPES.UserRepository)
    private readonly userRepository: UserRepository
  ) {}
  handler(params: IGetUser): User {
    const user = this.userRepository.get(params.id)
    if (!user) throw new Error('User not found')
    return user
  }
}
