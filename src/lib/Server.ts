import fs from 'fs';
import http from 'http';
import https from 'https';
import express from 'express';
import { Logger } from '../app/Utils/Logger';

class Server {
  constructor(
    private app: express.Express,
    private options: ServerOptions,
  ) {}

  public start(): void {
    if (this.options.enableSSL) {
      return this.startHTTPSServer();
    }

    return this.startHTTPServer();
  }

  private startHTTPServer(): void {
    http.createServer(this.app).listen(this.options.port, () => {
      Logger.success(`HTTP: Listening on port ${this.options.port}`);
    });
  }

  private startHTTPSServer(): void {
    const options = {
      key: fs.readFileSync(this.options.ssl.key),
      cert: fs.readFileSync(this.options.ssl.cert),
    };

    https.createServer(options, this.app).listen(this.options.port, () => {
      Logger.success(`HTTPS: Listening on port ${this.options.port}`);
    });
  }
}

interface ServerOptions {
  port: number;
  enableSSL: boolean;
  ssl: SSLOptions;
}

interface SSLOptions {
  key: string;
  cert: string;
}

export { Server };
