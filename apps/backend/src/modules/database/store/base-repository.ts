import mongoose from 'mongoose';

export default class BaseRepository {
  static async getDBConnection(): Promise<void> {
    const mongoURI = 'mongodb://localhost:27017/boilerplate-mern';

    await mongoose.connect(mongoURI, {})
  }
}
