import { MiddlewareList } from '../../App';
import CORSMiddleware from './CORSMiddleware';
import ErrorMiddleware from './ErrorMiddleware';
import JSONParserMiddleware from './JSONParserMiddleware';
import LoggerMiddleware from './LoggerMiddleware';
import PassportMiddleware from './PassportMiddleware';
import URLEncodedParserMiddleware from './URLEncodedParserMiddleware';

const middlewares: MiddlewareList = {
  pre: [
    LoggerMiddleware,
    CORSMiddleware,
    URLEncodedParserMiddleware,
    JSONParserMiddleware,
    PassportMiddleware,
  ],
  post: [
    ErrorMiddleware,
  ],
};

export default middlewares;
