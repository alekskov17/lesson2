import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as _ from 'lodash';

import { AppComponent } from './app.component';
import {RandomUserComponent} from "./random-user-module/components/random-user/random-user.component";
import {ListUsersComponent} from "./random-user-module/components/list-users/list-users.component";
import {HttpModule} from "@angular/http";
import { NotAvatarPipe } from './pipes/not-avatar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RandomUserComponent,
    ListUsersComponent,
    NotAvatarPipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
