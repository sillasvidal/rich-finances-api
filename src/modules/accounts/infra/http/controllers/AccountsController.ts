import { CreateAccountService } from '@modules/accounts/services/CreateAccountService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class AccountsController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, description, color, balance } = request.body;
    const user_id = request.user.id;

    const createAccount = container.resolve(CreateAccountService);

    const account = await createAccount.execute({
      name,
      description,
      color,
      balance,
      user_id,
    });

    return response.status(201).json(account);
  }
}
