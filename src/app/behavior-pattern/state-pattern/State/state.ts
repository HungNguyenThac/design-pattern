export interface State<T> {
  handle(context: T):any;
  status():any;
}

export abstract class AbstractState {
  abstract state:State<any>;
  abstract get State();
  abstract set State(state: State<any>);
  abstract getStatus():any;
}
