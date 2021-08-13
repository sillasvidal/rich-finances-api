import { ICreateAccountDTO } from '@modules/accounts/dtos/ICreateAccountDTO';
import { IAccountsRepository } from '@modules/accounts/repositories/IAccountsRepository';
import { getRepository, Repository } from 'typeorm';

import { Account } from '../entities/Account';

export class AccountsRepository implements IAccountsRepository {
  private ormRepository: Repository<Account>;

  constructor() {
    this.ormRepository = getRepository(Account);
  }

  async list(): Promise<Account[] | undefined> {
    const accounts = await this.ormRepository.find();

    return accounts;
  }

  async create(data: ICreateAccountDTO): Promise<Account> {
    const account = this.ormRepository.create(data);

    await this.ormRepository.save(account);

    return account;
  }

  async findByName(name: string): Promise<Account | undefined> {
    const findAccount = await this.ormRepository.findOne({
      where: {
        name,
      },
    });

    return findAccount;
  }
}
