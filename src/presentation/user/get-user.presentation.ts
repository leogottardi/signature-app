import { User } from 'prisma/prisma-client'
import { IPresentation, IService } from 'src/domain/common/interfaces'
import { IGetUser } from 'src/domain/user/interfaces'
import { Inject } from '@nestjs/common'
import { TYPES } from 'src/infrastructure/crosscutting/types'
import { UserNotFoundError } from 'src/domain/user/errors'

export class GetUserPresentation
  implements IPresentation<IGetUser, Promise<User>>
{
  constructor(
    @Inject(TYPES.GetUserService)
    private readonly getUserService: IService<IGetUser, Promise<User>>
  ) {}

  async handler(input: IGetUser): Promise<User> {
    const user = await this.getUserService.handler(input)
    if (!user) throw new UserNotFoundError()
    return user
  }
}
