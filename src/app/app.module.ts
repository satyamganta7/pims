import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { MainNavComponent } from './layout/main-nav/main-nav.component';
import { SubNavComponent } from './layout/sub-nav/sub-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MainNavComponent,
    SubNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
