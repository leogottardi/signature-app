import { Subscriber } from 'prisma/prisma-client'
import { IPresentation, IService } from 'src/domain/common/interfaces'
import { IGetSubscriber } from 'src/domain/subscriber/interfaces'
import { Inject } from '@nestjs/common'
import { TYPES } from 'src/infrastructure/crosscutting/types'
import { SubscriberNotFoundError } from 'src/domain/subscriber/errors'

export class GetSubscriberPresentation
  implements IPresentation<IGetSubscriber, Promise<Subscriber>>
{
  constructor(
    @Inject(TYPES.GetSubscriberService)
    private readonly getUserService: IService<
      IGetSubscriber,
      Promise<Subscriber>
    >
  ) {}

  async handler(input: IGetSubscriber): Promise<Subscriber> {
    const subscriber = await this.getUserService.handler(input)
    if (!subscriber) throw new SubscriberNotFoundError()
    return subscriber
  }
}
