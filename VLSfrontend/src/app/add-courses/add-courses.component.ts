import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Courses } from '../model/courses.model';
import { CoursesService } from '../service/courses.service';

@Component({
  selector: 'app-add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.css']
})
export class AddCoursesComponent implements OnInit {

  addNewCourse! : FormGroup;
  constructor(private formBuilder : FormBuilder, private coursesService : CoursesService, private router: Router ) {

   }

  ngOnInit(): void {
    this.addNewCourse = this.formBuilder.group({
      courseId:[null],
      courseName:[""],
      authorName:[""],
      duration: [""],
      availability: [""]
    })
  }

  saveNewCourse() {
    console.log('course details sent');
    console.log(this.addNewCourse.value)
    this.coursesService.addCourse(this.addNewCourse.value).subscribe((data)=>{
      console.log('saved ', data);
      this.router.navigate(['/display-courses']);
    });

  }
}
