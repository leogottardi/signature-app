import { IPresentation } from '@domain/common/interfaces'
import { Contract } from '@domain/contract/entities'
import { ICreateContractIn } from '@domain/contract/interfaces'
import { TYPES } from '@infrastructure/crosscutting/types'
import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Inject,
  Post
} from '@nestjs/common'

@Controller('contracts')
export class ContractController {
  constructor(
    @Inject(TYPES.CreateContractPresentation)
    private readonly createContractPresentation: IPresentation<
      ICreateContractIn,
      Promise<Contract>
    >
  ) {}

  @Post()
  async createContract(@Body() input: ICreateContractIn): Promise<Contract> {
    try {
      return await this.createContractPresentation.handler(input)
    } catch (error) {
      throw new HttpException(
        error.message,
        error.code || HttpStatus.INTERNAL_SERVER_ERROR
      )
    }
  }
}
