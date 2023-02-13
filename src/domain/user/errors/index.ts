export class UserNotFoundError extends Error {
  name = 'UserNotFoundError'
  public code = 404
  constructor(message = 'User not found') {
    super(message)
  }
}

export class UserAlreadyExistsError extends Error {
  name = 'UserAlreadyExistsError'
  public code = 409
  constructor(message = 'User already exists') {
    super(message)
  }
}
