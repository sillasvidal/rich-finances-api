import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

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
    const checkAccountExists = await this.accountsRepository.findByName(name);

    if (checkAccountExists) {
      throw new AppError('Account name already registered', 400);
    }

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
