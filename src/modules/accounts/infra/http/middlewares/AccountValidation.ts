import { NextFunction, Request, Response } from 'express';

export class AccountValidation {
  public static validateCreateAccount(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<void> | Response | undefined {
    const { name, description, color, balance } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is a mandatory field' });
    }

    if (!description) {
      return response
        .status(400)
        .json({ error: 'Description is a mandatory field' });
    }

    if (!color) {
      return response.status(400).json({ error: 'Color is a mandatory field' });
    }

    if (!balance) {
      return response
        .status(400)
        .json({ error: 'Balance is a mandatory field' });
    }

    next();
  }
}
