import { GetUserService } from '@app/user'
import { User } from '@domain/user/entities/user'
import { IGetUser, IUserRepository } from '@domain/user/interfaces'

describe('GetUserService', () => {
  const mockUser = User.create({
    document: '12345678',
    email: 'test@test.com',
    name: 'test-name'
  })
  const user_repository: IUserRepository = {
    insert: jest.fn(),
    get: jest.fn().mockResolvedValueOnce(Promise.resolve(mockUser)),
    delete: jest.fn()
  }
  const service = new GetUserService(user_repository)

  it('should be create a user', async () => {
    const input: IGetUser = {
      document: '123456789'
    }
    const user = await service.handler(input)
    expect(user).toMatchObject(mockUser)
    expect(user_repository.get).toBeCalled()
  })
})
