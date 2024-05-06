import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Blogs } from '../models/course.models';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {

  
  blogs:Blogs[]=[];
  constructor(private httpClient:HttpClient){}

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses(){
    this.httpClient.get("assets/data/blogs.json").subscribe({
      next:(courses)=>{
        this.blogs = courses as Blogs[];
      },
      error:(err:any)=>{
        console.log("ERRRRRR",err);
      },
      complete:()=>{
        console.log("complete");
        
      }
    });
  }

}
