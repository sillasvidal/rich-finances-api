import { ICreateAccountDTO } from '../dtos/ICreateAccountDTO';
import { Account } from '../infra/typeorm/entities/Account';

export interface IAccountsRepository {
  list(): Promise<Account[] | undefined>;
  create(data: ICreateAccountDTO): Promise<Account>;
  findByName(name: string): Promise<Account | undefined>;
}
