import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ReactiveFormsModule} from '@angular/forms'

// import { HeaderComponent } from './modules/admin/components/header/header.component';


// import { HeaderComponent } from './header/header.component';
// import { HomeComponent } from './home/home.component';


// import { HomeComponent } from './modules/admin/components/home/home.component';




// import { AboutComponent } from './modules/admin/components/about/about.component';
// import { ServiceComponent } from './modules/admin/components/service/service.component';




// import { ServiceComponent } from './service/service.component';
// import { ResumeComponent } from './resume/resume.component';



// import { ResumeComponent } from './modules/admin/components/resume/resume.component';




// import { ClientComponent } from './client/client.component';
// import { ClientComponent } from './modules/admin/components/client/client.component';
// import { TouchComponent } from './touch/touch.component';
// import { TouchComponent } from './modules/admin/components/touch/touch.component';
// import { CopyrightComponent } from './modules/admin/components/copyright/copyright.component';
// import { CopyrightComponent } from './copyright/copyright.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    AppComponent,


    LoginComponent,
    NotFoundComponent,
    ForgotPasswordComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
