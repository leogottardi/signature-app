import { IPresentation, IService } from '@domain/common/interfaces'
import { Contract } from '@domain/contract/entities'
import { ICreateContractIn } from '@domain/contract/interfaces'
import { Subscriber } from '@domain/subscriber/entities'
import { SubscriberAlreadyExistsError } from '@domain/subscriber/errors'
import {
  ICreateSubscriber,
  IGetSubscriber
} from '@domain/subscriber/interfaces'
import { TYPES } from '@infrastructure/crosscutting/types'
import { Inject } from '@nestjs/common'
import { markAsUntransferable } from 'worker_threads'

export class CreateContractPresentation
  implements IPresentation<ICreateContractIn, Promise<Contract>>
{
  constructor(
    @Inject(TYPES.GetSubscriberService)
    private readonly getSubscriberService: IService<
      IGetSubscriber,
      Promise<Subscriber>
    >,
    @Inject(TYPES.CreateContractService)
    private readonly createContractService: IService<void, Promise<Contract>>,

    @Inject(TYPES.CreateSubscriberService)
    private readonly createSubscriberService: IService<
      ICreateSubscriber,
      Promise<Subscriber>
    >
  ) {}

  async handler(input: ICreateContractIn): Promise<Contract> {
    const subscriber = await this.getSubscriberService.handler({
      document: input.subscriber.document,
      email: input.subscriber.email
    })
    if (subscriber) throw new SubscriberAlreadyExistsError()
    const contract = await this.createContractService.handler()
    await this.createSubscriberService.handler({
      ...input.subscriber,
      contract_id: contract.id
    })
    return contract
  }
}
