import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  private _patternName = new BehaviorSubject<string>('State Pattern');
  public patternName = this._patternName.asObservable();
  constructor() {}

  changePatternName(name: string) {
    this._patternName.next(name);
  }
}
