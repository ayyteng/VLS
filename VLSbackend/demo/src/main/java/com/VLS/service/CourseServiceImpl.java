package com.VLS.service;

import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.VLS.entity.Course;
import com.VLS.repository.CourseRepository;

@Service
public class CourseServiceImpl implements CourseService {

    private CourseRepository courseRepository;

    @Override
    public Iterable<Course> selectAllCourses() {
        return courseRepository.findAll();
    }

    @Override
    public Course addCourse(Course course){
        Course newCourse = courseRepository.save(course);
        return newCourse;
    }
    @Override
    public String deleteCourse(@PathVariable int courseId){
        Optional<Course> course = courseRepository.findById(courseId);
        if (course.isPresent()){
            courseRepository.delete(course.get());
            return "Product with id " + courseId + " was deleted.";
        }else {
            throw new RuntimeException("Course not found");
        }
    }

    


}
