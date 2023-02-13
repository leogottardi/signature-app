import { Inject } from '@nestjs/common'
import { Subscriber } from 'prisma/prisma-client'
import { IPresentation, IService } from 'src/domain/common/interfaces'
import { SubscriberAlreadyExistsError } from 'src/domain/subscriber/errors'
import {
  ICreateSubscriber,
  IGetSubscriber
} from 'src/domain/subscriber/interfaces'
import { TYPES } from 'src/infrastructure/crosscutting/types'

export class CreateSubscriberPresentation
  implements IPresentation<ICreateSubscriber, Promise<Subscriber>>
{
  constructor(
    @Inject(TYPES.GetSubscriberService)
    private readonly getUserService: IService<
      IGetSubscriber,
      Promise<Subscriber>
    >,
    @Inject(TYPES.CreateSubscriberService)
    private readonly createUserService: IService<
      ICreateSubscriber,
      Promise<Subscriber>
    >
  ) {}

  async handler(input: ICreateSubscriber): Promise<Subscriber> {
    const alreadyExistsUser = await this.getUserService.handler({
      document: input.document
    })
    if (alreadyExistsUser) throw new SubscriberAlreadyExistsError()
    return await this.createUserService.handler(input)
  }
}
