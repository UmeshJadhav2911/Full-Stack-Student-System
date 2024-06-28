package com.arjuncodes.studentsystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.arjuncodes.studentsystem.model.Student;
import com.arjuncodes.studentsystem.repository.StudentRepository;
@Service
public class StudentServiceImpl implements StudentService {
  @Autowired
  private StudentRepository studentRepository;
  
  @Override
  public Student saveStudent(Student student) {
	  return studentRepository.save(student);
  }
  
  @Override
	public List<Student> getAllStudent() {
		
		return studentRepository.findAll();
	}
}
