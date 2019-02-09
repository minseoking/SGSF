import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user.component.routing';

// 메뉴
import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,

        UserRoutingModule
    ],
    declarations: [
        UserComponent,
        LoginComponent
    ],
})
export class UserModule { }
