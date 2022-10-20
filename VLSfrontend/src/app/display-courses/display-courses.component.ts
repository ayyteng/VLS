import { Component, OnInit } from '@angular/core';
import { Courses } from '../model/courses.model';
import { CoursesService } from '../service/courses.service';

@Component({
  selector: 'app-display-courses',
  templateUrl: './display-courses.component.html',
  styleUrls: ['./display-courses.component.css']
})
export class DisplayCoursesComponent implements OnInit {

  [x: string]: any;
  courses?: Courses[];
    constructor(private coursesService: CoursesService) {}
  
     ngOnInit(): void {
      console.log("INIT vendor service : ", "ngOnInit():")
     this.coursesService.displayCourses().subscribe(
      (data) => {
        this.courses= data;
        console.log(this.courses);
      }
     )
    }

}
