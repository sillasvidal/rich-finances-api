import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';

import { User } from '../entities/User';

export class UsersRepository implements IUsersRepository {
  listAll(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
}
