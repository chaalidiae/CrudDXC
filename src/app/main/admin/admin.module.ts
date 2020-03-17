import { NgModule } from '@angular/core';

import { AuditsComponent } from './audits/audits.component';
import { AdminRoutingModule } from './admin.route';
import { UserComponent } from './user/user/user.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [UserComponent, AuditsComponent],
  imports: [
    CoreModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
