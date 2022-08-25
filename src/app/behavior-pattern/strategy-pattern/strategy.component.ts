import { Component, Injector, OnInit } from '@angular/core';
import {
  StrategyCompression,
  strategyMap,
  StrategyWithoutCompression,
} from './strategy.service';
import { Strategy } from './strategy.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../../global.service';

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
  strategy?: Strategy;

  constructor(private injector: Injector, private service: GlobalService) {
    this.service.changePatternName('Strategy pattern');
  }

  ngOnInit(): void {
    this.strategy = this.injector.get<Strategy>(strategyMap.get(true));
  }

  toggleHandler(isChecked: boolean) {
    this.strategy = this.injector.get<Strategy>(strategyMap.get(isChecked));
    console.log(this.strategy);
  }

  uploadFile($event: Event) {
    const filesArray = Array.from(($event.target as HTMLInputElement).files);
    this.strategy.processFiles(filesArray);
  }
}
