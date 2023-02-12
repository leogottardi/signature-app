import { Inject, Injectable } from '@nestjs/common'
import { IService } from 'src/domain/common/interfaces'
import { User } from 'src/domain/user/entities/user'
import { ICreateUser } from 'src/domain/user/interfaces'
import { TYPES } from 'src/infrastructure/crosscutting/types'
import { UserRepository } from 'src/infrastructure/repositories/user'

@Injectable()
export class CreateUserService implements IService<ICreateUser, User> {
  constructor(
    @Inject(TYPES.UserRepository)
    private readonly userRepository: UserRepository
  ) {}

  handler(params: ICreateUser): User {
    const user = User.create(params)
    this.userRepository.insert(user)
    return user
  }
}
