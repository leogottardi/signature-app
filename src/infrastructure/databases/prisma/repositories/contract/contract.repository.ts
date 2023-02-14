import { Contract } from '@domain/contract/entities'
import { IContractRepository } from '@domain/contract/interfaces'
import { TYPES } from '@infrastructure/crosscutting/types'
import { Inject } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

export class ContractRepository implements IContractRepository {
  constructor(
    @Inject(TYPES.PrismaConnection)
    private readonly connection: PrismaClient
  ) {}

  async insert(contract: Contract): Promise<Contract> {
    await this.connection.contract.create({
      data: {
        id: contract.id,
        status: contract.status,
        created_at: contract.created_at
      }
    })
    return contract
  }
}
