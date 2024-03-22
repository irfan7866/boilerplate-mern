import express, { Application } from 'express';
import { Server } from 'http';
import bodyParser from 'body-parser';
import AccountServiceManager from './modules/account/account-service-manager';

const isDevEnv = process.env.NODE_ENV === 'development';

export default class App {
  private static app: Application;

  public static async startServer(): Promise<Server> {
    this.app = express();
    this.app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
    this.app.use(bodyParser.json({ limit: '100mb' }));

    const restAPIServices = await this.createRESTApiServer();
    this.app.use('/api', restAPIServices);

    const port = 8080;
    const server = this.app.listen(port);

    console.log(`http server started listening on port - ${port}`);
    return server;
  }

  private static async createRESTApiServer(): Promise<Application> {
    const app: Application = express();

    const accountServiceRESTApi = await AccountServiceManager
      .createRestAPIServer();
    app.use('/', accountServiceRESTApi);

    return app;
  }
}

