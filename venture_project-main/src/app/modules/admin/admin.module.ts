import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { ResumeComponent } from './components/resume/resume.component';
// import { ClientComponent } from './components/client/client.component';
import { ClientComponent } from './components/client/client.component';
import { TouchComponent } from './components/touch/touch.component';
import { CopyrightComponent } from './components/copyright/copyright.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,HeaderComponent,HomeComponent,AboutComponent,ServiceComponent,ResumeComponent,ClientComponent,TouchComponent,CopyrightComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
