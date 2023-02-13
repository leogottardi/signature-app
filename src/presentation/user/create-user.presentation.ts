import { Inject } from '@nestjs/common'
import { User } from 'prisma/prisma-client'
import { IPresentation, IService } from 'src/domain/common/interfaces'
import { UserAlreadyExistsError } from 'src/domain/user/errors'
import { ICreateUser, IGetUser } from 'src/domain/user/interfaces'
import { TYPES } from 'src/infrastructure/crosscutting/types'

export class CreateUserPresentation
  implements IPresentation<ICreateUser, Promise<User>>
{
  constructor(
    @Inject(TYPES.GetUserService)
    private readonly getUserService: IService<IGetUser, Promise<User>>,
    @Inject(TYPES.CreateUserService)
    private readonly createUserService: IService<ICreateUser, Promise<User>>
  ) {}

  async handler(input: ICreateUser): Promise<User> {
    const alreadyExistsUser = await this.getUserService.handler({
      document: input.document
    })
    if (alreadyExistsUser) throw new UserAlreadyExistsError()
    return await this.createUserService.handler(input)
  }
}
