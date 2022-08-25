import { Component } from '@angular/core';
import { LightBulb } from './lightBulb.state';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-state-pattern',
  template: `
    <light status="{{ status }}"></light>

    <div id="light" (click)="nextStep()">Next step</div>
  `,
  styleUrls: ['./state-pattern.scss'],
})
export class StatePatternComponent {
  ctx: LightBulb;
  status: string;

  constructor(private service: GlobalService) {
    this.ctx = new LightBulb();
    this.status = this.ctx.getStatus();
    this.service.changePatternName('State Pattern');
  }

  nextStep() {
    this.ctx.nextStatus();
    this.status = this.ctx.getStatus();
  }
}
