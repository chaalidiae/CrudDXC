import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { auditsRoute } from './audits/audits.route';
import { userRoute } from './user/user.route';


const routes: Routes = [auditsRoute,userRoute];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
