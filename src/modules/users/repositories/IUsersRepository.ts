import { User } from '../infra/typeorm/entities/User';

export interface IUsersRepository {
  listAll(): Promise<User[]>;
}
