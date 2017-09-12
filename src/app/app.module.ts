import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as _ from 'lodash';

import { AppComponent } from './app.component';
import {RandomUserComponent} from "./random-user-module/components/random-user/random-user.component";
import {ListUsersComponent} from "./random-user-module/components/list-users/list-users.component";
import {RandomUserModuleModule} from "./random-user-module/random-user-module.module";
import { NotAvatarPipe } from './pipes/not-avatar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RandomUserComponent,
    ListUsersComponent,
    NotAvatarPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
