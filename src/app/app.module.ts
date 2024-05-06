import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';
import { AllCourseComponent } from './all-course/all-course.component';
import { PagesComponent } from './pages/pages.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './shared/menu/menu.component';
import { AuthLinkComponent } from './shared/auth-link/auth-link.component';
import { SocialLinksComponent } from './shared/social-links/social-links.component';
import { PhoneComponent } from './shared/phone/phone.component';
import { EmailComponent } from './shared/email/email.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { RatingComponent } from './shared/rating/rating.component';
import { CardComponent } from './shared/card/card.component';
import { BlogFooterComponent } from './shared/card/blog-footer/blog-footer.component';
import { CourseFooterComponent } from './shared/card/course-footer/course-footer.component';
import { HeroComponent } from './home/hero/hero.component';
import { CoursesComponent } from './home/courses/courses.component';
import { HttpClientModule  } from '@angular/common/http';
import { BlogsComponent } from './home/blogs/blogs.component';
import { HeadingComponent } from './shared/heading/heading.component';
import { VideoPopupComponent } from './shared/video-popup/video-popup.component';
import { HowItWorksComponent } from './home/how-it-works/how-it-works.component';
import { SliderComponent } from './shared/slider/slider.component';
import { FeedbacksComponent } from './home/feedbacks/feedbacks.component';
import { ClientsComponent } from './home/clients/clients.component';
import { FeedbackCardComponent } from './shared/feedback-card/feedback-card.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllCourseComponent,
    PagesComponent,
    BlogComponent,
    ContactComponent,
    MenuComponent,
    AuthLinkComponent,
    SocialLinksComponent,
    PhoneComponent,
    EmailComponent,
    ButtonComponent,
    RatingComponent,
    CardComponent,
    BlogFooterComponent,
    CourseFooterComponent,
    HeroComponent,
    CoursesComponent,
    BlogsComponent,
    HeadingComponent,
    VideoPopupComponent,
    HowItWorksComponent,
    SliderComponent,
    FeedbacksComponent,
    ClientsComponent,
    FeedbackCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule ,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
