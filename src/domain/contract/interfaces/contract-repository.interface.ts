import { Contract } from '@domain/contract/entities'

export interface IContractRepository {
  insert(contract: Contract): Promise<Contract>
}
