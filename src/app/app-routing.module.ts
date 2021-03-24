import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListUserComponent } from './list-user/list-user.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [

  {
    path: 'api/users', component: ListUserComponent
  },
  {
    path: 'api/new', component: NewUserComponent
  },
  {
    path: 'api/update/:id', component: UpdateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
