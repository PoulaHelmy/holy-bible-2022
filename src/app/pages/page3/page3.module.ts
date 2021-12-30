import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Page3RoutingModule} from './page3-routing.module';
import {Page3Component} from './page3/page3.component';
import {SafeYoutubeUrlPipe} from "../../shared/pipes/safe-youtube-url.pipe";


@NgModule({
  declarations: [
    Page3Component,
    SafeYoutubeUrlPipe

  ],
  imports: [
    CommonModule,
    Page3RoutingModule
  ],
  providers: []
})
export class Page3Module {
}
