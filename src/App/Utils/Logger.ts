/* eslint-disable no-console */

import symbols from 'log-symbols';
import chalk from 'chalk';
import { APP_ENV } from '../../Config/app';

class Logger {
  static info(message: string, environments = ['production', 'development', 'test']) {
    if (environments.includes(APP_ENV || 'production')) {
      console.log(symbols.info, chalk.blue(message));
    }
  }

  static success(message: string, environments = ['production', 'development', 'test']) {
    if (environments.includes(APP_ENV || 'production')) {
      console.log(symbols.success, chalk.green(message));
    }
  }

  static warning(message: string, environments = ['production', 'development', 'test']) {
    if (environments.includes(APP_ENV || 'production')) {
      console.log(symbols.warning, chalk.yellow(message));
    }
  }

  static error(message: string, environments = ['production', 'development', 'test']) {
    if (environments.includes(APP_ENV || 'production')) {
      console.log(symbols.error, chalk.red(message));
    }
  }
}

export default Logger;
