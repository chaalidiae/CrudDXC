import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.route';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CoreModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
