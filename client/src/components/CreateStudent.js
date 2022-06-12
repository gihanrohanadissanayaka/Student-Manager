import React, { useState } from 'react';
import axios from 'axios';

    function CreateStudent() {

      const [student, setStudent] = useState({
        studentName: '',
        studentGrade: '',
        date: '',
      });

    const handleChange = (event) => {
      setStudent({
        ...student,
        [event.target.name]: event.target.value
      });
    }


      const handleSubmit = (e)=> {
        //e.preventDefault();
        axios.post('http://localhost:5000/students/add', {
          studentName: student.studentName,
          studentGrade: student.studentGrade,
          date: student.date
        })
        .then(function (response) {
          window.location.reload();
        })
        .catch(function (error) {
          console.log(error);       // error message
        });
        
      };

  return (
    <div class="container">
    <h3>Create Student</h3>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
      <label class="form-label">Name</label>
        <input name="studentName" onChange={handleChange} value={student.studentName}  className="form-control" />
      </div>
      <div className="mb-3">
      <label class="form-label">Grade</label>
        <input name="studentGrade" onChange={handleChange} value={student.studentGrade} className="form-control" />
      </div>
      <div className="mb-3">
      <label class="form-label">Date</label>
        <input name="date" onChange={handleChange} value={student.date}  className="form-control" />
      </div>

      <button type="submit" className="btn btn-success">Submit</button>
    </form>
    </div>
  )
  
}
export default CreateStudent;