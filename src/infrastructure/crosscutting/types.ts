export const TYPES = {
  // Commons
  PrismaConnection: Symbol.for('PrismaConnection'),
  // Repositories
  UserRepository: Symbol.for('UserRepositry'),
  // Services
  CreateUserService: Symbol.for('CreateUserService'),
  GetUserService: Symbol.for('GetUserService'),
  DeleteUserService: Symbol.for('DeleteUserService'),
  // Presentations
  CreateUserPresentation: Symbol.for('CreateUserPresentation'),
  GetUserPresentation: Symbol.for('GetUserPresentation')
}
