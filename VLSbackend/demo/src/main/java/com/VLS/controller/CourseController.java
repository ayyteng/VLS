package com.VLS.controller;

import org.springframework.web.bind.annotation.*;

import com.VLS.entity.Course;
import com.VLS.repository.CourseRepository;
import com.VLS.service.CourseService;

@RestController
@RequestMapping("/course")
@CrossOrigin(origins = "http://localhost:4200/")
public class CourseController {

    private CourseService courseService;
    private CourseRepository courseRepository;

    @GetMapping("/select")
    public Iterable<Course> selectAllCourses(){
        return courseService.selectAllCourses();
    }

    @PostMapping( "/add")
    public Course addCourse(@RequestBody Course course){
        return courseService.addCourse(course);
    }

    @DeleteMapping("/delete/{courseId}")
    public Course deleteCourse(@PathVariable(value="courseId") Integer courseId){
        Course deletedCourse = courseRepository.findById(courseId).get();
        courseRepository.delete(deletedCourse);
        return deletedCourse;
    }
}
