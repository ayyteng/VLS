import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Courses } from '../model/courses.model';
import { CoursesService } from '../service/courses.service';

@Component({
  selector: 'app-delete-courses',
  templateUrl: './delete-courses.component.html',
  styleUrls: ['./delete-courses.component.css']
})
export class DeleteCoursesComponent implements OnInit {

  id!:number;
  course!: Courses;
  
  constructor(private coursesService: CoursesService, private route : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // this.id = 5;
    this.id = this.route.snapshot.params['id'];
    this.course = new Courses();
    this.coursesService.getCourseById(this.id)
    .subscribe(searchedCourse => {
      console.log(searchedCourse)
      this.course = searchedCourse;
    }, error => console.log(error))
  }
  deletingCourse() {
    this.coursesService.deleteCourse(this.id).subscribe(data => console.log(data), error => console.log(error));
    this.router.navigate(['/display-courses']);
  }
}



