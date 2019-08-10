import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guard';
import { PhoneAuthComponent } from './phone-auth/phone-auth.component';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'phoneauth', component: PhoneAuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
