export class SubscriberNotFoundError extends Error {
  name = 'SubscriberNotFoundError'
  public code = 404
  constructor(message = 'Subscriber not found') {
    super(message)
  }
}

export class SubscriberAlreadyExistsError extends Error {
  name = 'SubscriberAlreadyExistsError'
  public code = 409
  constructor(message = 'Subscriber already exists') {
    super(message)
  }
}
