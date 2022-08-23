import { Component, OnInit } from '@angular/core';
import {
  StrategyCompression,
  StrategyWithoutCompression,
} from './strategy.service';

@Component({
  selector: 'app-strategy-pattern',
  template: ` <h1>Strategy design Pattern</h1>
    <mat-slide-toggle
      color="primary"
      [checked]="true"
      (change)="toggleHandler($event.checked)"
    >
      Compress Images
    </mat-slide-toggle>
    <br /><br /><br />
    <input
      type="file"
      accept="image/*"
      multiple=""
      id="file"
      (change)="uploadFile($event)"
    />`,
  providers: [StrategyCompression, StrategyWithoutCompression],
})
export class StrategyPatternComponent implements OnInit {
  ngOnInit(): void {}

  toggleHandler(checked: boolean) {
    
  }

  uploadFile($event: Event) {
    
  }
}
