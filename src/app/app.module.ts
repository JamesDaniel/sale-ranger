import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ParentComponent } from './component/parent/parent.component';
import { NavComponent } from './component/nav/nav.component';
import { FooterComponent } from './component/footer/footer.component';
import { CarouselComponent } from './component/carousel/carousel.component';

@NgModule({
  declarations: [
    ParentComponent,
    NavComponent,
    FooterComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    ParentComponent
  ]
})
export class AppModule { }
