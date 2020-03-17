import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { LanguageSelectorComponent } from '../i18n/container/language-selector/language-selector.component';
import { I18nModule } from '../i18n/i18n.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'src/assets/i18n/', '/navbar.json');
}

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    I18nModule,
    //vendor
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    //material
    MatToolbarModule,
    MatButtonModule,
    I18nModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      },
      isolate: true
    })
  ],
  exports: [NavbarComponent,I18nModule],
  //providedIn: 'root'
})

export class SharedModule { }
