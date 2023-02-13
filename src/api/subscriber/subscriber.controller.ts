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
import { IPresentation } from 'src/domain/common/interfaces'
import { Subscriber } from 'src/domain/subscriber/entities/subscriber'
import {
  ICreateSubscriber,
  IDeleteSubscriber,
  IGetSubscriber
} from 'src/domain/subscriber/interfaces'
import { TYPES } from 'src/infrastructure/crosscutting/types'

@Controller('users')
export class UserController {
  constructor(
    @Inject(TYPES.CreateSubscriberPresentation)
    private readonly createUserPresentation: IPresentation<
      ICreateSubscriber,
      Promise<Subscriber>
    >,
    @Inject(TYPES.GetSubscriberPresentation)
    private readonly getUserPresentation: IPresentation<
      IGetSubscriber,
      Promise<Subscriber>
    >,
    @Inject(TYPES.DeleteSubscriberPresentation)
    private readonly deleteUserPresentation: IPresentation<
      IDeleteSubscriber,
      Promise<void>
    >
  ) {}

  @Post()
  async createUser(@Body() params: ICreateSubscriber): Promise<Subscriber> {
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
  async getUser(@Param('id') id: string): Promise<Subscriber> {
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
    this.deleteUserPresentation.handler({ id })
  }
}
