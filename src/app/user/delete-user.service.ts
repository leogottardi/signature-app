import { Inject } from '@nestjs/common'
import { IService } from '@domain/common/interfaces'
import { IDeleteUser, IUserRepository } from '@domain/user/interfaces'
import { TYPES } from '@infrastructure/crosscutting/types'

export class DeleteUserService implements IService<IDeleteUser, Promise<void>> {
  constructor(
    @Inject(TYPES.UserRepository)
    private readonly userRepository: IUserRepository
  ) {}

  async handler({ id }: IDeleteUser): Promise<void> {
    await this.userRepository.delete(id)
  }
}
