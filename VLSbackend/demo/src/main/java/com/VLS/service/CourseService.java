package com.VLS.service;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.VLS.entity.Course;

@Service
public interface CourseService {
     Iterable<Course> selectAllCourses();
     Course addCourse(Course course);
     String deleteCourse(@PathVariable int courseId);
}


