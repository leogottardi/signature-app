export interface ICreateUser {
  /**
   * @param name user full name
   */
  name: string
  /**
   * @param email user mail
   */
  email: string
  /**
   * @param document user document (cpf/cnpj)
   */
  document: string
}
