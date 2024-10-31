import { createBrowserRouter, RouterProvider, RouteObject } from 'react-router-dom';
import Medium from './components/academics/medium/Medium';
import Section from './components/academics/section/Section';
import Subject from './components/academics/subject/Subject';
import ClassesWithSubject from './components/academics/classesWithSubject/ClassesWithSubject';
import Class from './components/academics/class/Class';
import StudentAdmission from './components/students/StudentAdmission';
import Students from './components/students/allStudents/Students';
import FeesTypes from './components/fees/FeesTypes/FeesTypes';
import FeesManagement from './components/fees/feesManagement/FeesManagement';
import ChartOfAccounts from './components/accounts/chartOfAccounts/ChartOfAccounts';
import AccountStatement from './components/accounts/accountStatement/AccountStatement';
import AddIncome from './components/accounts/addIncome/AddIncome';
import AddExpense from './components/accounts/addExpense/AddExpense';
import Login from './components/auth/login/Login';
import AppLayout from './components/layout/AppLayout';

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <h1>Dashboard</h1>
            },
            {
                path: '/dashboard',
                element: <h1>Dashboard</h1>
            },
            {
                path: '/academics/medium',
                element: <Medium />
            },
            {
                path: '/academics/sections',
                element: <Section />
            },
            {
                path: '/academics/subjects',
                element: <Subject />
            },
            {
                path: '/academics/classes',
                element: <Class />
            },
            {
                path: '/academics/class-with-subject',
                element: <ClassesWithSubject />
            },
            {
                path: '/student/admission',
                element: <StudentAdmission />
            },
            {
                path: '/students',
                element: <Students />
            },
            {
                path: '/fees-type',
                element: <FeesTypes />
            },
            {
                path: '/fees-management',
                element: <FeesManagement />
            },
            {
                path: '/chart-of-accounts',
                element: <ChartOfAccounts />
            },
            {
                path: '/add-income',
                element: <AddIncome />
            },
            {
                path: '/add-expense',
                element: <AddExpense />
            },
            {
                path: '/account-statement',
                element: <AccountStatement />
            }
        ]
    },
    {
        element: <Login />,
        path: '/login'
    }
] as RouteObject[]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
