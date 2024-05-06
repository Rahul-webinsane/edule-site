import { Component, Input } from '@angular/core';
import { Blogs } from 'src/app/home/models/course.models';

@Component({
  selector: 'app-blog-footer',
  templateUrl: './blog-footer.component.html',
  styleUrls: ['./blog-footer.component.css']
})
export class BlogFooterComponent {

  @Input () blog!:Blogs;
  
}
