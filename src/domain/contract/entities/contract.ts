import { randomUUID } from 'crypto'
import { ContractStatusEnum } from '../enum'
import { Subscriber } from '@domain/subscriber/entities'

export class Contract {
  id = randomUUID()
  status = ContractStatusEnum.ACTIVE
  subscriber?: Subscriber
  created_at = new Date()
  updated_at?: Date
}
