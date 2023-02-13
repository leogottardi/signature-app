import { Subscriber } from '../entities/subscriber'
import { IGetSubscriber } from './get-subscriber.interface'

export interface ISubscriberRepository {
  insert(subscriber: Subscriber): Promise<Subscriber>
  get(props: IGetSubscriber): Promise<Subscriber>
  delete(id: string): Promise<void>
}
