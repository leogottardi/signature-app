export interface IPresentation<T, I> {
  handler(input?: T): I
}
