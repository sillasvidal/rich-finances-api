import { Account } from '../infra/typeorm/entities/Account';

export interface IAccountsRepository {
  list(): Promise<Account[] | undefined>;
}
