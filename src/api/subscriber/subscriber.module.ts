import { Module } from '@nestjs/common'
import { UserController } from './subscriber.controller'
import {
  CreateSubscriberService,
  GetSubscriberService,
  DeleteSubscriberService
} from '@app/subscriber'
import { TYPES } from 'src/infrastructure/crosscutting/types'
import { IOCModule } from '../common/ioc.module'
import {
  CreateSubscriberPresentation,
  GetSubscriberPresentation,
  DeleteSubscriberPresentation
} from 'src/presentation/subscriber'
import { SubscriberRepository } from '@infrastructure/databases/prisma/repositories/subscriber'

@Module({
  imports: [IOCModule],
  controllers: [UserController],
  providers: [
    // Repositories
    {
      provide: TYPES.SubscriberRepository,
      useClass: SubscriberRepository
    },
    // Services
    {
      provide: TYPES.CreateSubscriberService,
      useClass: CreateSubscriberService
    },
    {
      provide: TYPES.GetSubscriberService,
      useClass: GetSubscriberService
    },
    {
      provide: TYPES.DeleteSubscriberService,
      useClass: DeleteSubscriberService
    },
    // Presentations
    {
      provide: TYPES.CreateSubscriberPresentation,
      useClass: CreateSubscriberPresentation
    },
    {
      provide: TYPES.GetSubscriberPresentation,
      useClass: GetSubscriberPresentation
    },
    {
      provide: TYPES.DeleteSubscriberPresentation,
      useClass: DeleteSubscriberPresentation
    }
  ],
  exports: [TYPES.GetSubscriberService, TYPES.CreateSubscriberService]
})
export class SubscriberModule {}
