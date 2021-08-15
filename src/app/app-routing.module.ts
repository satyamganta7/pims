import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogsComponent } from './pages/catalogs/catalogs.component';
import { CertificatesComponent } from './pages/certificates/certificates.component';
import { CoursesComponent } from './pages/courses/courses.component';

const routes: Routes = [
  { path: 'courses', component: CoursesComponent },
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'certificates', component: CertificatesComponent },
  { path: 'catalogs', component: CatalogsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
