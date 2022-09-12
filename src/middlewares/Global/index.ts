import { GlobalMiddlewareList } from '../../lib';
import { CORSMiddleware } from './CORSMiddleware';
import { ErrorMiddleware } from './ErrorMiddleware';
import { JSONParserMiddleware } from './JSONParserMiddleware';
import { LoggerMiddleware } from './LoggerMiddleware';
import { URLEncodedParserMiddleware } from './URLEncodedParserMiddleware';

const middlewares: GlobalMiddlewareList = {
  pre: [
    LoggerMiddleware,
    CORSMiddleware,
    URLEncodedParserMiddleware,
    JSONParserMiddleware,
  ],
  post: [
    ErrorMiddleware,
  ],
};

export { middlewares };
