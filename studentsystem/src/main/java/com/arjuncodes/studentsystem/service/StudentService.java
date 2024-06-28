package com.arjuncodes.studentsystem.service;

import java.util.List;

import com.arjuncodes.studentsystem.model.Student;

public interface StudentService {
    public Student saveStudent(Student student);
    
    public List<Student> getAllStudent(); 
		
	
}
