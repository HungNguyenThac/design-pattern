import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrategyPatternComponent } from './strategy-pattern/strategy.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [StrategyPatternComponent],
  imports: [CommonModule, MatSlideToggleModule],
  exports: [StrategyPatternComponent],
})
export class BehaviorPatternModule {}
