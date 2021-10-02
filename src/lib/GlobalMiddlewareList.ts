import Middleware from './Middleware';

interface GlobalMiddlewareList {
  pre: Array<typeof Middleware>,
  post: Array<typeof Middleware>,
}

export default GlobalMiddlewareList;
