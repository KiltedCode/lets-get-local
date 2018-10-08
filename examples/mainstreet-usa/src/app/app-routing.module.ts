import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitizensComponent, DapperDansComponent, MisiComponent, MrffComponent, TrolleyComponent } from './attr';
import { IntroComponent } from './intro/intro.component';

const routes: Routes = [
  {
    path: '',
    component: IntroComponent
  },
  {
    path: 'attraction',
    children: [
      {
        path: 'citizens',
        component: CitizensComponent
      },
      {
        path: 'dapper',
        component: DapperDansComponent
      },
      {
        path: 'misi',
        component: MisiComponent
      },
      {
        path: 'mrff',
        component: MrffComponent
      },
      {
        path: 'trolley',
        component: TrolleyComponent
      }
    ]
  },
  {
    path: '**',
    component: IntroComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
