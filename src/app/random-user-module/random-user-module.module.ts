import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomUserComponent } from './components/random-user/random-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RandomUserComponent, ListUsersComponent]
})
export class RandomUserModuleModule { }
