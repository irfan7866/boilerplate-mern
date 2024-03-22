import AccountWriter from './internal/account-writer';
import { Account, CreateAccountParams } from './types';

export default class AccountService {
  public static async createAccount(
    params: CreateAccountParams,
  ): Promise<Account> {
    return AccountWriter.createAccount(params);
  }
}