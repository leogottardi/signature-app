import { IPresentation, IService } from 'src/domain/common/interfaces'
import { IDeleteSubscriber } from 'src/domain/subscriber/interfaces'
import { Inject } from '@nestjs/common'
import { TYPES } from 'src/infrastructure/crosscutting/types'

export class DeleteSubscriberPresentation
  implements IPresentation<IDeleteSubscriber, void>
{
  constructor(
    @Inject(TYPES.DeleteSubscriberService)
    private readonly deleteUserService: IService<
      IDeleteSubscriber,
      Promise<void>
    >
  ) {}

  async handler(input: IDeleteSubscriber): Promise<void> {
    await this.deleteUserService.handler(input)
  }
}
