import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  Post
} from '@nestjs/common'
import { IService } from 'src/domain/common/interfaces'
import { User } from 'src/domain/user/entities/user'
import { ICreateUser, IGetUser } from 'src/domain/user/interfaces'
import { TYPES } from 'src/infrastructure/crosscutting/types'

@Controller('users')
export class UserController {
  constructor(
    @Inject(TYPES.CreateUserService)
    private readonly createUserService: IService<ICreateUser, User>,
    @Inject(TYPES.GetUserService)
    private readonly getUserService: IService<IGetUser, User>
  ) {}

  @Post()
  createUser(@Body() params: ICreateUser): User {
    return this.createUserService.handler(params)
  }

  @Get(':id')
  getUser(@Param('id') id: string): User {
    try {
      return this.getUserService.handler({ id })
    } catch (error) {
      throw new HttpException(
        error.message,
        error.code || HttpStatus.INTERNAL_SERVER_ERROR
      )
    }
  }
}
