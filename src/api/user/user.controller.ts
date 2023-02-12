import { Body, Controller, Inject, Post } from '@nestjs/common'
import { IService } from 'src/domain/common/interfaces'
import { User } from 'src/domain/user/entities/user'
import { ICreateUser } from 'src/domain/user/interfaces'
import { TYPES } from 'src/infrastructure/crosscutting/types'

@Controller('users')
export class UserController {
  constructor(
    @Inject(TYPES.CreateUserService)
    private readonly createUserService: IService<ICreateUser, User>
  ) {}

  @Post()
  createUser(@Body() params: ICreateUser): User {
    return this.createUserService.handler(params)
  }
}
