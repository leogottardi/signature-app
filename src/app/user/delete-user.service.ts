import { Inject } from '@nestjs/common'
import { IService } from '@domain/common/interfaces'
import { IDeleteUser, IUserRepository } from '@domain/user/interfaces'
import { TYPES } from '@infrastructure/crosscutting/types'

export class DeleteUserService implements IService<IDeleteUser, void> {
  constructor(
    @Inject(TYPES.UserRepository)
    private readonly userRepository: IUserRepository
  ) {}

  handler({ id }: IDeleteUser): void {
    this.userRepository.delete(id)
  }
}
