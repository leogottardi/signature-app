import { CreateSubscriberService } from '@app/subscriber'
import { Subscriber } from '@domain/subscriber/entities/subscriber'
import {
  ICreateSubscriber,
  ISubscriberRepository
} from '@domain/subscriber/interfaces'

describe('CreateSubscriberService', () => {
  const user_repository: ISubscriberRepository = {
    insert: jest.fn().mockImplementation((subscriber: Subscriber) => {
      return subscriber
    }),
    get: jest.fn(),
    delete: jest.fn()
  }
  const service = new CreateSubscriberService(user_repository)

  it('should be create a subscriber', async () => {
    const input: ICreateSubscriber = {
      name: 'test-name',
      document: '123456789',
      email: 'test@test.com'
    }
    const subscriber = await service.handler(input)
    expect(subscriber).toMatchObject(input)
    expect(user_repository.insert).toBeCalled()
  })
})
