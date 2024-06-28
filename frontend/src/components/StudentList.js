// src/components/StudentList.js
import React, { useEffect, useState } from 'react';
// import axios from 'axios';

const StudentList = () => {
  const [student, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/student/getAll")
    .then(res=>res.json())
    .then(result=>{
      setStudents(result);
    })
    
  }, []);

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {student.map(student => (
          <li key={student.id}>{student.name} - {student.address}</li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
































































































