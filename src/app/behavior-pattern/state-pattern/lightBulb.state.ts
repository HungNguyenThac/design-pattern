import {AbstractState, State} from './State';
import {StepOne} from "./State";

export class LightBulb extends AbstractState {
    constructor(public state: State<LightBulb> = new StepOne()) {
        super();
    }

    get State(): State<LightBulb> {
        return this.state;
    }

    set State(state: State<LightBulb>) {
        this.state = state;
    }

    public getStatus() {
        return this.state.status();
    }

    public nextStatus(): void {
        return this.state.handle(this);
    }
}
