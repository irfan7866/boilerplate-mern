import { NextFunction, Request, Response } from 'express';
import { Account, CreateAccountParams } from '../types';
import AccountService from '../account-service';

export default class AccountController {
  public static async createAccount (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const {
        email,
        name,
        password,
      }: CreateAccountParams = req.body as CreateAccountParams;
      const account = await AccountService.createAccount({email, name, password});
      res.status(201).send(AccountController.serializeAccountToJson(account));
    } catch (e) {
      next(e);
    }
  }

  private static serializeAccountToJson (
    account: Account,
  ): unknown {
    return {
      id: account.id,
      email: account.email,
      name: account.name,
    }
  }
}