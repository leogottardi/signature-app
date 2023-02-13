import { DeleteUserService } from '@app/user'
import { User } from '@domain/user/entities/user'
import { IDeleteUser, IUserRepository } from '@domain/user/interfaces'

describe('DeleteUserService', () => {
  const user_repository: IUserRepository = {
    insert: jest.fn().mockImplementation((user: User) => {
      return user
    }),
    get: jest.fn(),
    delete: jest.fn()
  }
  const service = new DeleteUserService(user_repository)

  it('should be delete a user', async () => {
    const input: IDeleteUser = {
      id: 'test-id'
    }
    await service.handler(input)
    expect(user_repository.delete).toBeCalled()
  })
})
