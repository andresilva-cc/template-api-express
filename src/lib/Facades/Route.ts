import Route from '../Route';

class RouteFacade {
  public static get(path: string, handler: Array<any>) {
    return new Route('get', path, handler);
  }

  public static post(path: string, handler: Array<any>) {
    return new Route('post', path, handler);
  }
}

export default RouteFacade;
