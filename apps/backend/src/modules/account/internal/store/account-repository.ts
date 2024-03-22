import mongoose from 'mongoose';
import { AccountDB, accountDbSchema } from './account-db';
import BaseRepository from '../../../database/store/base-repository';

export default class AccountRepository extends BaseRepository {
  public static accountDB: mongoose.Model<AccountDB>;

  static async createDBConnection(): Promise<void> {
    try {
      await this.getDBConnection();

      AccountRepository.accountDB = mongoose.model<AccountDB>('Account', accountDbSchema);

      console.log('MongoDB connected successfully');
    } catch (error) {
      console.error('MongoDB connection error:', error);
    }
  }
}
