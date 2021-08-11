import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { MainNavComponent } from './layout/main-nav/main-nav.component';
import { SubNavComponent } from './layout/sub-nav/sub-nav.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CertificatesComponent } from './pages/certificates/certificates.component';
import { CatalogsComponent } from './pages/catalogs/catalogs.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MainNavComponent,
    SubNavComponent,
    CoursesComponent,
    FooterComponent,
    CertificatesComponent,
    CatalogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
