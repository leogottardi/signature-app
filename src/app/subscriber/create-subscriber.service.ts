import { Inject, Injectable } from '@nestjs/common'
import { IService } from '@domain/common/interfaces'
import { Subscriber } from '@domain/subscriber/entities/subscriber'
import {
  ICreateSubscriber,
  ISubscriberRepository
} from '@domain/subscriber/interfaces'
import { TYPES } from '@infrastructure/crosscutting/types'

@Injectable()
export class CreateSubscriberService
  implements IService<ICreateSubscriber, Promise<Subscriber>>
{
  constructor(
    @Inject(TYPES.SubscriberRepository)
    private readonly userRepository: ISubscriberRepository
  ) {}

  async handler(params: ICreateSubscriber): Promise<Subscriber> {
    const subscriber = Subscriber.create(params)
    await this.userRepository.insert(subscriber)
    return subscriber
  }
}
