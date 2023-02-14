import { randomUUID } from 'crypto'
import { ICreateSubscriber } from '../interfaces'
import { Contract } from '@prisma/client'

export class Subscriber {
  id = randomUUID()
  name: string
  email: string
  document: string
  // contract: Contract
  contract_id: string
  created_at = new Date()
  updated_at?: Date

  static create(props: ICreateSubscriber): Subscriber {
    const subscriber = new Subscriber()
    Object.assign(subscriber, props)
    return subscriber
  }
}
