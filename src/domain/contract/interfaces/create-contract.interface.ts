interface ISubscriber {
  name: string
  email: string
  document: string
}

export interface ICreateContractIn {
  subscriber: ISubscriber
}
