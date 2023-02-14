import { Module } from '@nestjs/common'
import { SubscriberModule } from './subscriber/subscriber.module'
import { ContractModule } from './contract/contract.module'

@Module({
  imports: [ContractModule, SubscriberModule]
})
export class AppModule {}
