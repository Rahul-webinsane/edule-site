import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/home/models/course.models';

@Component({
  selector: 'app-course-footer',
  templateUrl: './course-footer.component.html',
  styleUrls: ['./course-footer.component.css']
})
export class CourseFooterComponent implements OnInit{

  @Input () course!:Course;

  ngOnInit(): void {
  }
}
