import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from '../pages/pages.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/pages/login',
        pathMatch: 'full'
    },
    {
        path: 'pages',
        component: PagesComponent,
        children: [
            {
                path: '',
                loadChildren: '../pages/login/login.module.ts#LoginModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule { }
