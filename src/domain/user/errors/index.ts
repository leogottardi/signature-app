export class UserNotFoundError extends Error {
  name = 'export class UserNotFoundError extends Error'
  public code = 404
  constructor(message = 'User not found') {
    super(message)
  }
}
