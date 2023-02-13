export interface ICreateSubscriber {
  /**
   * @param name subscriber full name
   */
  name: string
  /**
   * @param email subscriber mail
   */
  email: string
  /**
   * @param document subscriber document (cpf/cnpj)
   */
  document: string
}
