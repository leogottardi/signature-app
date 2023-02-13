import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import {
  CreateUserService,
  GetUserService,
  DeleteUserService
} from 'src/app/user'
import { TYPES } from 'src/infrastructure/crosscutting/types'
import { UserRepository } from 'src/infrastructure/databases/prisma/repositories/user'
import { IOCModule } from '../common/ioc.module'
import {
  CreateUserPresentation,
  GetUserPresentation,
  DeleteUserPresentation
} from 'src/presentation/user'

@Module({
  imports: [IOCModule],
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
    },
    {
      provide: TYPES.DeleteUserService,
      useClass: DeleteUserService
    },
    // Presentations
    {
      provide: TYPES.CreateUserPresentation,
      useClass: CreateUserPresentation
    },
    {
      provide: TYPES.GetUserPresentation,
      useClass: GetUserPresentation
    },
    {
      provide: TYPES.DeleteUserPresentation,
      useClass: DeleteUserPresentation
    }
  ]
})
export class UserModule {}
