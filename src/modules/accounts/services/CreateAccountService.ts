import { inject, injectable } from 'tsyringe';

import { Account } from '../infra/typeorm/entities/Account';
import { IAccountsRepository } from '../repositories/IAccountsRepository';

interface IRequest {
  name: string;
  description: string;
  color: string;
  balance: number;
  user_id: string;
}

@injectable()
export class CreateAccountService {
  constructor(
    @inject('AccountsRepository')
    private accountsRepository: IAccountsRepository,
  ) {}

  public async execute({
    name,
    description,
    color,
    balance,
    user_id,
  }: IRequest): Promise<Account> {
    const account = await this.accountsRepository.create({
      name,
      description,
      color,
      balance,
      user_id,
    });

    return account;
  }
}
