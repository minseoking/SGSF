import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
// import { CreatelinkedvmComponent } from './page/createlinkedvm/createlinkedvm.component';
import { VapiService } from './share/service/vapi.service';
import { AuthService } from './share/service/auth.service';
import { LoginComponent } from './page/login/login.component';
// import { HomeComponent } from './page/home/home.component';
import { DefaultTopComponent } from './core/default-top/default-top.component';
import { PageComponent } from './page/page/page.component';
import { CoreModule } from './core/core.module';
// import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [
    AppComponent,
    // CreatelinkedvmComponent,
    LoginComponent,
    // HomeComponent,
    DefaultTopComponent,
    PageComponent,
    // PageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CoreModule
  ],
  providers: [VapiService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
