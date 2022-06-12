import React from 'react';
import Header from "./components/Header";
import StudentsList from "./components/StudentsList";
import CreateStudent from "./components/CreateStudent";


function App() {
  return (
    <div>
      <Header />
      <CreateStudent />
      <StudentsList />      
    </div>
   
  );
}

export default App;

