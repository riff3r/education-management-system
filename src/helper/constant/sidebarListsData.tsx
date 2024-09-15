import React from 'react';
import CreatorsIcon from '../../common/icons/CreatorsIcon.tsx';
import UserIcon from '../../common/icons/UserIcon.tsx';
// import FlashOnIcon from '../../common/icons/FlashOnIcon.tsx';
import DashboardIcon from '../../common/icons/DashboardIcon.tsx';
import SettingsIcon from '../../common/icons/SettingsIcon.tsx';

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export interface EachListInterface {
    title: string;
    link?: string;
    icon?: React.ReactNode;
    subMenu?: { title: string; link: string; icon: React.ReactNode; className?: string; subMenu?: EachListInterface[] }[];
}

export const ALL_DATA_LISTS: EachListInterface[] = [
    {
        title: '',
        subMenu: [
            { title: 'Dashboard', link: '/dashboard', icon: <DashboardIcon /> },
            {
                title: 'Settings',
                link: '/settings',
                icon: <SettingsIcon />,
                subMenu: [
                    { title: 'Account', link: '/settings', icon: <UserIcon /> },
                    { title: 'Workspace', link: '/workspace', icon: <DashboardIcon /> },
                ],
            },
            // { title: 'Contents', link: '/', icon: <ContentsIcon /> },
        ],
    },
    {
        title: 'Academics',
        icon: <AccountBalanceIcon />,
        subMenu: [
            { title: 'Medium', link: '/academics/medium', icon: <AccountBalanceIcon /> },
            { title: 'Sections', link: '/academics/sections', icon: <AccountBalanceIcon /> },
            { title: 'Subjects', link: '/academics/subjects', icon: <UserIcon /> },
            { title: 'Classes', link: '/academics/classes', icon: <UserIcon /> },
            { title: 'Class with subject', link: '/academics/class-with-subject', icon: <UserIcon /> },
        ],
    },
    {
        title: 'Students',
        subMenu: [
            { title: 'Student List', link: '/students', icon: <CreatorsIcon /> },
            { title: 'Student Admission', link: '/student/Admission', icon: <UserIcon /> },
            // { title: 'All Contacts', link: '/all-contacts', icon: <UsersIcon /> },
        ],
    },
    {
        title: 'Fees',
        subMenu: [
            { title: 'Fees Type', link: '/fees-type', icon: <CreatorsIcon /> },
            { title: 'Manage Fees', link: '/fees-management', icon: <AttachMoneyIcon /> },
            // { title: 'All Contacts', link: '/all-contacts', icon: <UsersIcon /> },
        ],
    },
];
