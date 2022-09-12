import { Handler } from '../Handler';
import { Route } from '../Route';

class RouteFacade {
  public static checkout(path: string, handler: Handler) {
    return new Route('checkout', path, handler);
  }

  public static copy(path: string, handler: Handler) {
    return new Route('copy', path, handler);
  }

  public static delete(path: string, handler: Handler) {
    return new Route('delete', path, handler);
  }

  public static get(path: string, handler: Handler) {
    return new Route('get', path, handler);
  }

  public static head(path: string, handler: Handler) {
    return new Route('head', path, handler);
  }

  public static lock(path: string, handler: Handler) {
    return new Route('lock', path, handler);
  }

  public static merge(path: string, handler: Handler) {
    return new Route('merge', path, handler);
  }

  public static mkactivity(path: string, handler: Handler) {
    return new Route('mkactivity', path, handler);
  }

  public static mkcol(path: string, handler: Handler) {
    return new Route('mkcol', path, handler);
  }

  public static move(path: string, handler: Handler) {
    return new Route('move', path, handler);
  }

  public static 'm-search'(path: string, handler: Handler) {
    return new Route('m-search', path, handler);
  }

  public static notify(path: string, handler: Handler) {
    return new Route('notify', path, handler);
  }

  public static options(path: string, handler: Handler) {
    return new Route('options', path, handler);
  }

  public static patch(path: string, handler: Handler) {
    return new Route('patch', path, handler);
  }

  public static post(path: string, handler: Handler) {
    return new Route('post', path, handler);
  }

  public static purge(path: string, handler: Handler) {
    return new Route('purge', path, handler);
  }

  public static put(path: string, handler: Handler) {
    return new Route('put', path, handler);
  }

  public static report(path: string, handler: Handler) {
    return new Route('report', path, handler);
  }

  public static search(path: string, handler: Handler) {
    return new Route('search', path, handler);
  }

  public static subscribe(path: string, handler: Handler) {
    return new Route('subscribe', path, handler);
  }

  public static trace(path: string, handler: Handler) {
    return new Route('trace', path, handler);
  }

  public static unlock(path: string, handler: Handler) {
    return new Route('unlock', path, handler);
  }

  public static unsubscribe(path: string, handler: Handler) {
    return new Route('unsubscribe', path, handler);
  }
}

export { RouteFacade as Route };
