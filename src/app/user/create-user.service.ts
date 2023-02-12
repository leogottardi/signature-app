import { Injectable } from '@nestjs/common'
import { IService } from 'src/domain/common/interfaces'
import { User } from 'src/domain/user/entities/user'
import { ICreateUser } from 'src/domain/user/interfaces'

@Injectable()
export class CreateUserService implements IService<ICreateUser, User> {
  handler(params: ICreateUser): User {
    const user = User.create(params)
    return user
  }
}
