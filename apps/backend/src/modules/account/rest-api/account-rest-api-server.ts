import express, { Application } from 'express';
import AccountRepository from '../internal/store/account-repository';
import bodyParser from 'body-parser';
import AccountRouter from './account-router';

export default class AccountRESTApiServer {
  public static async create(): Promise<Application> {
    await AccountRepository.createDBConnection();

    const app = express();
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use('/accounts', AccountRouter.getRoutes());
    return Promise.resolve(app);
  }
}