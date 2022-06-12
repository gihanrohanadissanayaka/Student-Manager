import React, { useEffect, useState } from 'react';
import axios from 'axios';

function StudentsList() {

    const [students, setStudents] = useState([]);

    const getAllStudents = async() =>{
        const { data } = await axios.get('http://localhost:5000/students/');
        setStudents(data);
    }

    useEffect(()=>{
        getAllStudents();
    },[]);

    const studentDelete=(_id,e)=>{
        e.preventDefault();
        axios.delete(`http://localhost:5000/students/${_id}`)
        .then(function (response) {
            window.location.reload();
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
    <div class="container">
     <h3>Students...</h3>
     <table class="table">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Student Name</th>
                    <th>Student Grade</th>
                    <th>Entered Date</th>
                    </tr>
                </thead>
                <tbody>
                {students.map((student) =>
                    <tr>
                        <td>{student._id}</td>
                        <td>{student.studentName}</td>
                        <td>{student.studentGrade}</td>
                        <td>{student.date}</td>
                        <td><button type="button" onClick={(e)=> studentDelete(student._id,e)} class="btn btn-danger">Remove</button></td>
                    </tr>                
                )}
                </tbody>
            </table>
    </div>
    );
}
export default StudentsList;