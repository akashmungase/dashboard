import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LaptopComponent } from './product/laptop/laptop.component';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path:'laptop', component:LaptopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
