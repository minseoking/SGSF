import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../page/home/home.component';
import { PageComponent } from '../page/page/page.component';
import { AuthGuard } from '../guard/auth.guard';
import { CreatelinkedvmComponent } from '../page/createlinkedvm/createlinkedvm.component';

const routes: Routes = [{
  path: 'page',
  component : PageComponent,
  canActivate:[AuthGuard],
  children:[
    {path:'home', component:HomeComponent},
    {path:'vmcreate', component:CreatelinkedvmComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
