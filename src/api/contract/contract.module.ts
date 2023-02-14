import { IOCModule } from '@api/common/ioc.module'
import { SubscriberModule } from '@api/subscriber/subscriber.module'
import { CreateContractService } from '@app/contract'
import { TYPES } from '@infrastructure/crosscutting/types'
import { ContractRepository } from '@infrastructure/databases/prisma/repositories/contract'
import { Module } from '@nestjs/common'
import { CreateContractPresentation } from '@presentation/contract'
import { ContractController } from './contract.controller'

@Module({
  imports: [IOCModule, SubscriberModule],
  controllers: [ContractController],
  providers: [
    {
      provide: TYPES.ContractRepository,
      useClass: ContractRepository
    },
    {
      provide: TYPES.CreateContractService,
      useClass: CreateContractService
    },
    {
      provide: TYPES.CreateContractPresentation,
      useClass: CreateContractPresentation
    }
  ]
})
export class ContractModule {}
