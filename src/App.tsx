import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Medium from './components/academics/medium/Medium';
import Section from './components/academics/section/Section';
import Subject from './components/academics/subject/Subject';
import ClassesWithSubject from './components/academics/classesWithSubject/ClassesWithSubject';
import { Stack } from '@mui/material';
import Class from './components/academics/class/Class';
import StudentAdmission from './components/students/StudentAdmission';
import Sidebar from './components/Sidebar';

const App = () => {
    return (
        <Router>
            <Stack direction={'row'}>
                <Sidebar />
                <Stack p={3} flex={1}>
                    <Routes>
                        <Route path='/' element={<h1>Dashboard</h1>} />
                        <Route path='/dashboard' element={<h1>Dashboard</h1>} />
                        <Route path='/academics/medium' element={<Medium />} />
                        <Route path='/academics/sections' element={<Section />} />
                        <Route path='/academics/subjects' element={<Subject />} />
                        <Route path='/academics/classes' element={<Class />} />
                        <Route path='/academics/classes-with-subject' element={<ClassesWithSubject />} />

                        <Route path='/student/admission' element={<StudentAdmission />} />
                        {/* Add other routes as needed */}
                    </Routes>
                </Stack>
            </Stack>
        </Router>
    );
};

export default App;
