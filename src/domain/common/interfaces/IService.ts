export interface IService<T, I> {
  handler(params?: T): I
}
