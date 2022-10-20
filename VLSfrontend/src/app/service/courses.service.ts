import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Courses } from '../model/courses.model';
import { DeleteCoursesComponent } from '../delete-courses/delete-courses.component';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  baseUrl: string="http://localhost:9099/";
  displayUrl: string = "http://localhost:9099/course/select";
  addUrl : string;
  deleteUrl : string;


  constructor(private httpClient: HttpClient) { 

  this.addUrl ="http://localhost:9099/course/add";
  this.deleteUrl ="http://localhost:9099/course/delete";
  }
  displayCourses() {
    return this.httpClient.get<Courses[]>(this.displayUrl)
  }

  getCourseById(id: number) {
    return this.httpClient.get<Courses>(this.baseUrl + "/" + id);
  }

  addCourse(newCourse: Courses) {
    return this.httpClient.post<Courses>(this.addUrl, newCourse);
  }

  deleteCourse(id: number) {
    return this.httpClient.delete<Courses>(this.deleteUrl + "/{"+ id +"}");
  }


}
