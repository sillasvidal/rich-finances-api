import { NextFunction, Request, Response } from 'express';

export class UserValidation {
  public static validateCreateUser(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<void> | Response | undefined {
    const { name, surname, email, password } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is a mandatory field' });
    }

    if (!surname) {
      return response
        .status(400)
        .json({ error: 'Surname is a mandatory field' });
    }

    if (!email) {
      return response.status(400).json({ error: 'Email is a mandatory field' });
    }

    const er =
      /^[a-zA-Z0-9][a-zA-Z0-9\._-]+@([a-zA-Z0-9\._-]+\.)[a-zA-Z-0-9]{2,3}$/;
    if (!er.exec(email)) {
      return response.status(400).json({ error: 'Email is not valid' });
    }

    if (!password) {
      return response
        .status(400)
        .json({ error: 'Password is a mandatory field' });
    }

    if (password.length < 6) {
      return response
        .status(400)
        .json({ error: 'Password must be at least 6 characters' });
    }

    next();
  }
}
