import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrategyPatternComponent } from './strategy-pattern/strategy.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { StatePatternComponent } from './state-pattern/state-pattern.component';
import { LightComponent } from './state-pattern/components/light/light.component';
import { RouterModule } from '@angular/router';
import { behaviorPatternRouting } from './behavior-patern.routing';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    StrategyPatternComponent,
    StatePatternComponent,
    LightComponent,
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    RouterModule.forChild(behaviorPatternRouting),
    MatButtonModule,
  ],
  exports: [StrategyPatternComponent],
})
export class BehaviorPatternModule {}
