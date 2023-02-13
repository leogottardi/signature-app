import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  Post
} from '@nestjs/common'
import { IPresentation, IService } from 'src/domain/common/interfaces'
import { User } from 'src/domain/user/entities/user'
import { ICreateUser, IDeleteUser, IGetUser } from 'src/domain/user/interfaces'
import { TYPES } from 'src/infrastructure/crosscutting/types'

@Controller('users')
export class UserController {
  constructor(
    @Inject(TYPES.CreateUserPresentation)
    private readonly createUserPresentation: IPresentation<
      ICreateUser,
      Promise<User>
    >,
    @Inject(TYPES.GetUserPresentation)
    private readonly getUserPresentation: IPresentation<
      IGetUser,
      Promise<User>
    >,
    @Inject(TYPES.DeleteUserService)
    private readonly deleteUserService: IService<IDeleteUser, void>
  ) {}

  @Post()
  async createUser(@Body() params: ICreateUser): Promise<User> {
    try {
      return await this.createUserPresentation.handler(params)
    } catch (error) {
      throw new HttpException(
        error.message,
        error.code || HttpStatus.INTERNAL_SERVER_ERROR
      )
    }
  }

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<User> {
    try {
      return await this.getUserPresentation.handler({ id })
    } catch (error) {
      throw new HttpException(
        error.message,
        error.code || HttpStatus.INTERNAL_SERVER_ERROR
      )
    }
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<void> {
    this.deleteUserService.handler({ id })
  }
}
