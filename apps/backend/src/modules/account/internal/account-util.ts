import { Account } from "../types";
import { AccountDB } from "./store/account-db";

export default class AccountUtil {
  public static convertAccountDBToAccount(accountDb: AccountDB): Account {
    return {
      id: accountDb._id.toString(),
      email: accountDb.email,
      name: accountDb.name,
      password: accountDb.password,
    };
  }
}