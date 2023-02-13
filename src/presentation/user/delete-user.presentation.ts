import { IPresentation, IService } from 'src/domain/common/interfaces'
import { IDeleteUser } from 'src/domain/user/interfaces'
import { Inject } from '@nestjs/common'
import { TYPES } from 'src/infrastructure/crosscutting/types'

export class DeleteUserPresentation
  implements IPresentation<IDeleteUser, void>
{
  constructor(
    @Inject(TYPES.DeleteUserService)
    private readonly deleteUserService: IService<IDeleteUser, Promise<void>>
  ) {}

  async handler(input: IDeleteUser): Promise<void> {
    await this.deleteUserService.handler(input)
  }
}
