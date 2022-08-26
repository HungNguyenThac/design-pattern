import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactoryPatternComponent } from './Factory-pattern/factory-pattern.component';
import { RouterModule } from '@angular/router';
import { creationalRouting } from './creational.routing';

@NgModule({
  declarations: [FactoryPatternComponent],
  imports: [CommonModule, RouterModule.forChild(creationalRouting)],
})
export class CreationalModule {}
