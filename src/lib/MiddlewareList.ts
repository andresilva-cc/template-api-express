import Middleware from './Middleware';

interface MiddlewareList {
  pre: Array<typeof Middleware>,
  post: Array<typeof Middleware>,
}

export default MiddlewareList;
