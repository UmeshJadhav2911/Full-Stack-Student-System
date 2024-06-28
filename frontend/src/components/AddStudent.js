// src/components/AddStudent.js
import React, { useState } from 'react';

const AddStudent = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleClick = (event) => {
    event.preventDefault();
    const student = { name, address };
    console.log(student);
    fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Student added:', data);
      })
      .catch(error => {
        console.error('There was an error adding the student!', error);
      });
  }

  return (
    <div>
      <h2>Add Student</h2>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button type="submit" className='bg-primary' onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default AddStudent;
