import { IService } from '@domain/common/interfaces'
import { Inject } from '@nestjs/common'
import { TYPES } from '@infrastructure/crosscutting/types'
import { IContractRepository } from '@domain/contract/interfaces'
import { Contract } from '@domain/contract/entities'

export class CreateContractService
  implements IService<void, Promise<Contract>>
{
  constructor(
    @Inject(TYPES.ContractRepository)
    private readonly contractRepository: IContractRepository
  ) {}

  async handler(): Promise<Contract> {
    const contract = new Contract()
    await this.contractRepository.insert(contract)
    return contract
  }
}
