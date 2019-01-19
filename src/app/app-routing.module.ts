import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatelinkedvmComponent } from './page/createlinkedvm/createlinkedvm.component';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';
import { AuthGuard } from './guard/auth.guard';
import { PageComponent } from './page/page/page.component';


const routes: Routes = [
  {path: '', redirectTo: 'page', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'page', component: PageComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
