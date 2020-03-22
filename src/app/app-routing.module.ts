import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserlistComponent} from './userlist/userlist.component';
import {SingleuserComponent} from './singleuser/singleuser.component';
import {ExampleComponent} from './example/example.component';

const routes: Routes = [
  {
    path: 'userlist',
    component: UserlistComponent
  },
  {
    path: 'user/{id}',
    component: SingleuserComponent
  },
  {
    path: '',
    component: ExampleComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
