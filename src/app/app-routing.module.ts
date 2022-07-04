import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { TimetrackerComponent } from './timetracker/timetracker.component';



const routes: Routes = [
  { path: '', redirectTo: 'timetracker', pathMatch: 'full' },
  { path: 'timetracker', component: TimetrackerComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
