import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// containers
import { LoginContainerComponent } from './containers/login-container/login-container.component';
// views
import { LoginViewComponent } from './views/login-view/login-view.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        RouterModule.forChild([
            { path: '', component: LoginContainerComponent }
        ])
    ],
    declarations: [
        LoginContainerComponent,
        LoginViewComponent],
    providers: []
})
export class LoginModule { }
