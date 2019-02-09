import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginService } from './login/login.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        LoginService
    ]
})
export class 서비스Module { }
