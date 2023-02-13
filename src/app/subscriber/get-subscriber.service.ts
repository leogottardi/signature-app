import { Inject } from '@nestjs/common'
import { IService } from '@domain/common/interfaces'
import { Subscriber } from '@domain/subscriber/entities/subscriber'
import {
  IGetSubscriber,
  ISubscriberRepository
} from '@domain/subscriber/interfaces'
import { TYPES } from '@infrastructure/crosscutting/types'

export class GetSubscriberService
  implements IService<IGetSubscriber, Promise<Subscriber>>
{
  constructor(
    @Inject(TYPES.SubscriberRepository)
    private readonly userRepository: ISubscriberRepository
  ) {}

  async handler(params: IGetSubscriber): Promise<Subscriber> {
    return await this.userRepository.get(params)
  }
}
