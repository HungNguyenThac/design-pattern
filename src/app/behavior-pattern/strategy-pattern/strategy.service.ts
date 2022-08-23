import { Injectable } from '@angular/core';
import { Strategy } from './strategy.interface';

@Injectable({
  providedIn: 'any',
})
export class StrategyCompression extends Strategy {
  constructor() {
    super();
  }

  processFiles(arrayFiles: File[]): void {
    console.log('Strategy with compression!');
  }
}

@Injectable({
  providedIn: 'any',
})
export class StrategyWithoutCompression extends Strategy {
  constructor() {
    super();
  }
  processFiles(arrayFiles: File[]): void {
    console.log('Strategy without compression!');
  }
}

export const strategy = new Map<boolean, any>([
  [true, StrategyCompression],
  [false, StrategyWithoutCompression],
]);
