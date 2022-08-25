import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from './global.service';
import { Observable } from 'rxjs';

export interface Pattern {
  name: string;
  url: string;
  disable: boolean;
}

@Component({
  selector: 'app-root',
  template: `
    <div class="header">
      <div class="header-content">
        <button
          mat-button
          mat-raised-button
          [mat-menu-trigger-for]="creational"
        >
          Creational Pattern
        </button>
        <button
          mat-button
          mat-raised-button
          [mat-menu-trigger-for]="structural"
        >
          Structural Pattern
        </button>
        <button mat-button mat-raised-button [mat-menu-trigger-for]="behavior">
          Behavior Pattern
        </button>
        <mat-menu #creational="matMenu">
          <button
            *ngFor="let creational of creationalPatternArray"
            mat-menu-item
            [routerLink]="creational.url"
            [disabled]="creational.disable"
          >
            {{ creational.name }}
          </button>
        </mat-menu>
        <mat-menu #structural="matMenu">
          <button
            *ngFor="let structural of structuralPatternArray"
            mat-menu-item
            [routerLink]="structural.url"
            [disabled]="structural.disable"
          >
            {{ structural.name }}
          </button>
        </mat-menu>
        <mat-menu #behavior="matMenu">
          <button
            *ngFor="let behaviorPattern of behaviorPatternArray"
            mat-menu-item
            [routerLink]="behaviorPattern.url"
            [disabled]="behaviorPattern.disable"
          >
            {{ behaviorPattern.name }}
          </button>
        </mat-menu>
      </div>
    </div>
    <div class="pattern-name">
      <h1>{{ patternName | async }}</h1>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      .header {
        background: #657883;
      }
      .header .header-content {
        display: flex;
        max-width: 1200px;
        margin: 0 auto 16px auto;
        height: 64px;
        justify-content: space-around;
        align-items: center;
      }

      .pattern-name {
        text-align: center;
        margin-bottom: 24px;
        text-transform: uppercase;
        color: #d63384;
        font-weight: 700;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: GlobalService
  ) {
    this.patternName = service.patternName;
  }

  ngOnInit(): void {}
  title = 'Design-pattern';
  patternName?: Observable<string>;

  behaviorPatternArray: Pattern[] = [
    {
      name: 'Strategy Pattern',
      url: 'behavior/strategy-pattern',
      disable: false,
    },
    {
      name: 'State Pattern',
      url: 'behavior/state-pattern',
      disable: false,
    },
    {
      name: 'Comman Pattern',
      url: 'behavior/comman-pattern',
      disable: true,
    },
    {
      name: 'Iterator Pattern',
      url: 'behavior/iterator-pattern',
      disable: true,
    },
  ];

  creationalPatternArray: Pattern[] = [
    {
      name: 'Factory Method Pattern',
      url: 'creational/factory-method-pattern',
      disable: true,
    },
    {
      name: 'Builder Pattern',
      url: 'creational/builder-pattern',
      disable: true,
    },
    {
      name: 'Abstract Factory Pattern',
      url: 'creational/abstract-factory-pattern',
      disable: true,
    },
  ];

  structuralPatternArray: Pattern[] = [
    {
      name: 'Adapter Pattern',
      url: 'structural/adapter-pattern',
      disable: true,
    },
    {
      name: 'Facade Pattern',
      url: 'structural/facade-pattern',
      disable: true,
    },
  ];
}
