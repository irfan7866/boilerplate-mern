import { Account, CreateAccountParams } from "../types";
import AccountUtil from "./account-util";
import AccountRepository from "./store/account-repository";

export default class AccountWriter {
  public static async createAccount(
    params: CreateAccountParams,
  ): Promise<Account> {
    const dbAccount = await AccountRepository.accountDB.create({
      email: params.email,
      name: params.name,
      password: params.password,
    });
    return AccountUtil.convertAccountDBToAccount(dbAccount);
  }
}