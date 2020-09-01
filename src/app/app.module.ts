import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { ParentComponent } from './component/parent/parent.component';
import { NavComponent } from './component/widget/nav/nav.component';
import { FooterComponent } from './component/widget/footer/footer.component';
import { CarouselComponent } from './component/widget/carousel/carousel.component';
import { HomeComponent } from './component/page/home/home.component';

@NgModule({
  declarations: [
    ParentComponent,
    NavComponent,
    FooterComponent,
    CarouselComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    ParentComponent
  ]
})
export class AppModule { }
