import { randomUUID } from 'crypto'
import { ICreateSubscriber } from '../interfaces'

export class Subscriber {
  id = randomUUID()
  name: string
  email: string
  document: string
  contract_id: string
  created_at = new Date()
  updated_at?: Date

  static create(props: ICreateSubscriber): Subscriber {
    const subscriber = new Subscriber()
    Object.assign(subscriber, props)
    return subscriber
  }
}
