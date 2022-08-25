import { Routes } from '@angular/router';
import { StatePatternComponent } from './state-pattern/state-pattern.component';
import { StrategyPatternComponent } from './strategy-pattern/strategy.component';

export const behaviorPatternRouting: Routes = [
  { path: '', redirectTo: 'state-pattern', pathMatch: 'full' },
  { path: 'state-pattern', component: StatePatternComponent },
  {
    path: 'strategy-pattern',
    component: StrategyPatternComponent,
  },
];
