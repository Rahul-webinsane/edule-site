import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { PagesComponent } from './pages/pages.component';
import { AllCourseComponent } from './all-course/all-course.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'all-courses',component:AllCourseComponent},
  {path:'contact',component:ContactComponent},
  { path:'blog',component:BlogComponent},
  {path:'pages',component:PagesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
