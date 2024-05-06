import { Component, Input, OnInit } from '@angular/core';
import { Blogs, Course } from 'src/app/home/models/course.models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  @Input() type:any = 'C'; // C,B
  @Input('input') input!:Course | Blogs;

  ngOnInit(): void {
  }
  castToCourse(input:Course | Blogs){
    return input as Course;
  }

  castToBlogs(input:Course | Blogs){
    return input as Blogs;
  }


}
