import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoaderOneComponent} from './shared/components/loader-one/loader-one.component';
import {PapaNouelComponent} from './shared/components/papa-nouel/papa-nouel.component';
import {LoaderTwoComponent} from './shared/components/loader-two/loader-two.component';
import {BtnWrapperComponent} from './shared/components/btn-wrapper/btn-wrapper.component';
import {IconsWrapersComponent} from './shared/components/icons-wrapers/icons-wrapers.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderOneComponent,
    PapaNouelComponent,
    LoaderTwoComponent,
    BtnWrapperComponent,
    IconsWrapersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
