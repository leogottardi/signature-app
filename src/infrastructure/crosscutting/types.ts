export const TYPES = {
  // Commons
  PrismaConnection: Symbol.for('PrismaConnection'),
  // Repositories
  SubscriberRepository: Symbol.for('UserRepositry'),
  ContractRepository: Symbol.for('ContractRepository'),
  // Services
  CreateSubscriberService: Symbol.for('CreateSubscriberService'),
  GetSubscriberService: Symbol.for('GetSubscriberService'),
  DeleteSubscriberService: Symbol.for('DeleteSubscriberService'),
  CreateContractService: Symbol.for('CreateContractService'),
  // Presentations
  CreateSubscriberPresentation: Symbol.for('CreateSubscriberPresentation'),
  GetSubscriberPresentation: Symbol.for('GetSubscriberPresentation'),
  DeleteSubscriberPresentation: Symbol.for('DeleteSubscriberPresentation'),
  CreateContractPresentation: Symbol.for('CreateContractPresentation')
}
