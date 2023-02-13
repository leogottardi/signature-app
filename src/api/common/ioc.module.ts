import { Module } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'
import { TYPES } from 'src/infrastructure/crosscutting/types'

@Module({
  providers: [
    {
      provide: TYPES.PrismaConnection,
      useFactory: () => {
        const prisma = new PrismaClient()
        return prisma
      }
    }
  ],
  exports: [TYPES.PrismaConnection]
})
export class IOCModule {}
