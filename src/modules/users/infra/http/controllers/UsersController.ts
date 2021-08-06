import { CreateUserService } from '@modules/users/services/CreateUserService';
import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class UsersController {
  public async listAll(
    request: Request,
    response: Response,
  ): Promise<Response> {
    return response.json({ message: 'test' });
  }

  public async createNewUser(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { name, surname, email, password } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      surname,
      email,
      password,
    });

    return response.status(201).json(classToClass(user));
  }
}
