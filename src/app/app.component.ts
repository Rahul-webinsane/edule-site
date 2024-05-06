import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-app';

  isMenuScrolled:boolean=false;
  isSideMenu:boolean=false;


  @HostListener('window:scroll',['$event'])

  scrollCheck(){
    if(window.scrollY > 100){
      this.isMenuScrolled = true;
    }else{
      this.isMenuScrolled = false;
    }
  }

  openSideMenu(){
    this.isSideMenu = true;
  }

  closeSideMenu(){
    this.isSideMenu = false;
  }
  scrollTop(){
    document.body.scrollIntoView({behavior:'smooth'});
  }
}
