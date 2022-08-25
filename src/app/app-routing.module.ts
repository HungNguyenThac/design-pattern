import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'behavior',
    pathMatch: 'full',
  },
  {
    path: 'behavior',
    loadChildren: () =>
      import('./behavior-pattern/behavior-pattern.module').then(
        (m) => m.BehaviorPatternModule
      ),
  },
  {
    path: 'structural',
    loadChildren: () =>
      import('./structural-pattern/structural.module').then(
        (m) => m.StructuralModule
      ),
  },
  {
    path: 'creational',
    loadChildren: () =>
      import('./creational-pattern/creational.module').then(
        (m) => m.CreationalModule
      ),
  },
  {
    path: '**',
    redirectTo: 'behavior',
    pathMatch: 'prefix',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
