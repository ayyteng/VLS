package com.VLS.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "COURSES")
public class Course implements Serializable {
    @Id
    @Column(name = "COURSE_ID")
    private int courseId;

    @Column(name = "COURSE_NAME", nullable = false)
    private String courseName;

    @Column(name = "AUTHOR_NAME", nullable = false)
    private String authorName;

    @Column(name = "DURATION", nullable = false)
    private int duration;

    @Column(name = "AVAILABILITY")
    private String availability;

    public Course(){

    }

    public Course(int courseId, String courseName, String authorName, int duration){
        this.courseId= courseId;
        this.courseName = courseName;
        this.authorName = authorName;
        this.duration = duration;
    }

    public int courseId() {
        return courseId;
    }

    public void setCourseId(int courseId) {
       this.courseId = courseId;
    }

    public String courseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName= courseName;
    }

    public String getAuthorName() {
        return authorName;
    }

    public void setAuthorName(String authorName) {
        this.authorName = authorName;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public String getAvailability() {
        return availability;
    }

    public void setAvailability(String availability) {
        this.availability = availability;
    }

    

    @Override
    public String toString() {
        return "Course{" +
                "courseId='" + courseId + '\'' +
                ", courseName='" + courseName + '\'' +
                ", authorName='" + authorName + '\'' +
                ", duration='" + duration + '\'' +
                ", availability='" + availability +
                '}';
    }
    }

