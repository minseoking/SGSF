import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HomeComponent } from '../page/home/home.component';
import { CreatelinkedvmComponent } from '../page/createlinkedvm/createlinkedvm.component';

@NgModule({
  declarations: [
    HomeComponent,
    CreatelinkedvmComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
