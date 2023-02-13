import { Inject } from '@nestjs/common'
import { IService } from '@domain/common/interfaces'
import {
  IDeleteSubscriber,
  ISubscriberRepository
} from '@domain/subscriber/interfaces'
import { TYPES } from '@infrastructure/crosscutting/types'

export class DeleteSubscriberService
  implements IService<IDeleteSubscriber, Promise<void>>
{
  constructor(
    @Inject(TYPES.SubscriberRepository)
    private readonly userRepository: ISubscriberRepository
  ) {}

  async handler({ id }: IDeleteSubscriber): Promise<void> {
    await this.userRepository.delete(id)
  }
}
