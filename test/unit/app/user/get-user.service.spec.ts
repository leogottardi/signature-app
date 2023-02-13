import { GetSubscriberService } from '@app/subscriber'
import { Subscriber } from '@domain/subscriber/entities/subscriber'
import {
  IGetSubscriber,
  ISubscriberRepository
} from '@domain/subscriber/interfaces'

describe('GetSubscriberService', () => {
  const mockUser = Subscriber.create({
    document: '12345678',
    email: 'test@test.com',
    name: 'test-name'
  })
  const user_repository: ISubscriberRepository = {
    insert: jest.fn(),
    get: jest.fn().mockResolvedValueOnce(Promise.resolve(mockUser)),
    delete: jest.fn()
  }
  const service = new GetSubscriberService(user_repository)

  it('should be create a subscriber', async () => {
    const input: IGetSubscriber = {
      document: '123456789'
    }
    const subscriber = await service.handler(input)
    expect(subscriber).toMatchObject(mockUser)
    expect(user_repository.get).toBeCalled()
  })
})
