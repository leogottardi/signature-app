import { Inject } from '@nestjs/common'
import { IService } from 'src/domain/common/interfaces'
import { IDeleteUser } from 'src/domain/user/interfaces'
import { TYPES } from 'src/infrastructure/crosscutting/types'
import { UserRepository } from 'src/infrastructure/databases/prisma/repositories/user'

export class DeleteUserService implements IService<IDeleteUser, void> {
  constructor(
    @Inject(TYPES.UserRepository)
    private readonly userRepository: UserRepository
  ) {}

  handler({ id }: IDeleteUser): void {
    this.userRepository.delete(id)
  }
}
