import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-factory-pattern',
  template: `
    <div>
      <h3>Dynamic component example are using ComponentFactoryResolver</h3>
      <a
        href="https://github.com/januaryofmine/Dynamic-Component-Demo"
        target="_blank"
        >Click here</a
      >
    </div>
    <div style="margin-top: 100px">
      <h3>
        An other example create dynamic dialog using by Factory Method Design
        Pattern
      </h3>
      <a
        href="https://dev.to/coly010/the-factory-pattern-design-patterns-meet-the-frontend-1p2l"
        target="_blank"
        >Click here</a
      >
    </div>
  `,
})
export class FactoryPatternComponent implements OnInit {
  constructor(private service: GlobalService) {
    service.changePatternName('Factory Method Design Pattern');
  }
  ngOnInit(): void {}
}
