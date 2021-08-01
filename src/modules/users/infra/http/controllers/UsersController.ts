import { Request, Response } from 'express';

export class UsersController {
  public async listAll(
    request: Request,
    response: Response,
  ): Promise<Response> {
    return response.json({ message: 'test' });
  }
}
