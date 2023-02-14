import { Subscriber } from 'src/domain/subscriber/entities/subscriber'
import { Inject } from '@nestjs/common'
import { TYPES } from 'src/infrastructure/crosscutting/types'
import { PrismaClient } from 'prisma/prisma-client'
import {
  IGetSubscriber,
  ISubscriberRepository
} from 'src/domain/subscriber/interfaces'

export class SubscriberRepository implements ISubscriberRepository {
  constructor(
    @Inject(TYPES.PrismaConnection)
    private readonly connection: PrismaClient
  ) {}

  async insert(subscriber: Subscriber): Promise<Subscriber> {
    await this.connection.subscriber.create({
      data: subscriber
    })
    return subscriber
  }

  async get({ id, document, email }: IGetSubscriber): Promise<Subscriber> {
    return await this.connection.subscriber.findFirst({
      where: {
        OR: [
          {
            id
          },
          {
            document
          },
          {
            email
          }
        ]
      }
    })
  }

  async delete(id: string): Promise<void> {
    await this.connection.subscriber.delete({
      where: {
        id
      }
    })
  }
}
