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
}
