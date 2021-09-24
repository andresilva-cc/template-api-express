import { MiddlewareList } from '../../lib';
import CORSMiddleware from './CORSMiddleware';
import ErrorMiddleware from './ErrorMiddleware';
import JSONParserMiddleware from './JSONParserMiddleware';
import LoggerMiddleware from './LoggerMiddleware';
import URLEncodedParserMiddleware from './URLEncodedParserMiddleware';

const middlewares: MiddlewareList = {
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

export default middlewares;
