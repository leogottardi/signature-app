import { CreateUserService } from '@app/user'
import { User } from '@domain/user/entities/user'
import { ICreateUser, IUserRepository } from '@domain/user/interfaces'

describe('CreateUserService', () => {
  const user_repository: IUserRepository = {
    insert: jest.fn().mockImplementation((user: User) => {
      return user
    }),
    get: jest.fn(),
    delete: jest.fn()
  }
  const service = new CreateUserService(user_repository)

  it('should be create a user', async () => {
    const input: ICreateUser = {
      name: 'test-name',
      document: '123456789',
      email: 'test@test.com'
    }
    const user = await service.handler(input)
    expect(user).toMatchObject(input)
    expect(user_repository.insert).toBeCalled()
  })
})
