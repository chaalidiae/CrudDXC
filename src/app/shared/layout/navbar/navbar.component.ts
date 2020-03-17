import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromI18n from 'src/app/i18n/reducers';
import { TranslateService } from '@ngx-translate/core';
import { I18nComponent } from 'src/app/i18n/container/i18n.component';

@Component({
  selector: 'dxc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent extends I18nComponent {
  //ngOnInit(): void {
    //throw new Error("Method not implemented.");
  //}
  constructor(
    readonly store: Store<fromI18n.State>,
    readonly translate: TranslateService
  ) {
    super(store, translate);
  }

}
