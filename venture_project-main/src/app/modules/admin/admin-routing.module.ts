import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import {ServiceComponent} from './components/service/service.component';
import { TouchComponent } from './components/touch/touch.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ClientComponent } from './components/client/client.component';
const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'home', component: HomeComponent, },
      { path: 'about', component: AboutComponent },
      { path: 'service', component: ServiceComponent },
      { path: 'touch', component: TouchComponent },
      {path:'resume', component: ResumeComponent},
      {path:'client',component:ClientComponent},
      { path: '', redirectTo: '/admin', pathMatch: 'full',  },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
