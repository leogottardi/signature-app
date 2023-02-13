import { Module } from '@nestjs/common'
import { UserModule } from './subscriber/subscriber.module'

@Module({
  imports: [UserModule]
})
export class AppModule {}
