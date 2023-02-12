import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { CreateUserService } from 'src/app/user'
import { TYPES } from 'src/infrastructure/crosscutting/types'

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: TYPES.CreateUserService,
      useClass: CreateUserService
    }
  ]
})
export class UserModule {}
