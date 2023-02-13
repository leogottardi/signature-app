import { DeleteSubscriberService } from '@app/subscriber'
import { Subscriber } from '@domain/subscriber/entities/subscriber'
import {
  IDeleteSubscriber,
  ISubscriberRepository
} from '@domain/subscriber/interfaces'

describe('DeleteSubscriberService', () => {
  const user_repository: ISubscriberRepository = {
    insert: jest.fn().mockImplementation((subscriber: Subscriber) => {
      return subscriber
    }),
    get: jest.fn(),
    delete: jest.fn()
  }
  const service = new DeleteSubscriberService(user_repository)

  it('should be delete a subscriber', async () => {
    const input: IDeleteSubscriber = {
      id: 'test-id'
    }
    await service.handler(input)
    expect(user_repository.delete).toBeCalled()
  })
})
