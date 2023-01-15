import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './landing/components/menu/menu.component';
import { FirstSectionComponent } from './landing/components/first-section/first-section.component';
import { SharedModule } from './shared/shared.module';
import { SecondSectionComponent } from './landing/components/second-section/second-section.component';
import { ThirdSectionComponent } from './landing/components/third-section/third-section.component';
import { QuarterSectionComponent } from './landing/components/quarter-section/quarter-section.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FirstSectionComponent,
    SecondSectionComponent,
    ThirdSectionComponent,
    QuarterSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
