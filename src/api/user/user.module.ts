import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { CreateUserService, GetUserService } from 'src/app/user'
import { TYPES } from 'src/infrastructure/crosscutting/types'
import { UserRepository } from 'src/infrastructure/repositories/user'

@Module({
  controllers: [UserController],
  providers: [
    // Repositories
    {
      provide: TYPES.UserRepository,
      useClass: UserRepository
    },
    // Services
    {
      provide: TYPES.CreateUserService,
      useClass: CreateUserService
    },
    {
      provide: TYPES.GetUserService,
      useClass: GetUserService
    }
  ]
})
export class UserModule {}
