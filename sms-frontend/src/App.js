import React from 'react';
import  { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Students from './components/students';
import StudentForm from './components/studentForm';
import StudentInfo from './components/studentInfo';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/student/add" element={<StudentForm />} />
          <Route path="/students/edit/:id" element={<StudentForm />} />
          {/* <Route path="/students/info" element={<StudentInfo />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
