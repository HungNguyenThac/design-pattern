import {AbstractState, State} from './state';
import {SWITCH} from './../components/light/constant';

export class StepOne implements State<AbstractState> {
    public handle(context: AbstractState) {
        context.state = new StepTwo();
    }

    public status() {
        return SWITCH.STEP_ONE;
    }
}

export class StepTwo implements State<AbstractState> {
    public handle(context: AbstractState) {
        context.state = new StepThree();
    }

    public status() {
        return SWITCH.STEP_TWO;
    }
}

export class StepThree implements State<AbstractState> {
    public handle(context: AbstractState) {
        context.state = new StepFour();
    }

    public status() {
        return SWITCH.STEP_THREE;
    }
}

export class StepFour implements State<AbstractState> {
    public handle(context: AbstractState) {
        context.state = new StepFive();
    }

    public status() {
        return SWITCH.STEP_FOUR;
    }
}

export class StepFive implements State<AbstractState> {
    public handle(context: AbstractState) {
        context.state = new StepSix();
    }

    public status() {
        return SWITCH.STEP_FIVE;
    }
}

export class StepSix implements State<AbstractState> {
    public handle(context: AbstractState) {
        context.state = new StepSeven();
    }

    public status() {
        return SWITCH.STEP_SIX;
    }
}

export class StepSeven implements State<AbstractState> {
    public handle(context: AbstractState) {
        context.state = new StepOne();
    }

    public status() {
        return SWITCH.STEP_SEVEN;
    }
}
