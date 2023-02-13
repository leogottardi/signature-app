export const TYPES = {
  // Commons
  PrismaConnection: Symbol.for('PrismaConnection'),
  // Repositories
  SubscriberRepository: Symbol.for('UserRepositry'),
  // Services
  CreateSubscriberService: Symbol.for('CreateSubscriberService'),
  GetSubscriberService: Symbol.for('GetSubscriberService'),
  DeleteSubscriberService: Symbol.for('DeleteSubscriberService'),
  // Presentations
  CreateSubscriberPresentation: Symbol.for('CreateSubscriberPresentation'),
  GetSubscriberPresentation: Symbol.for('GetSubscriberPresentation'),
  DeleteSubscriberPresentation: Symbol.for('DeleteSubscriberPresentation')
}
