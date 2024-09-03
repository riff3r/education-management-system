import { Dashboard } from '@mui/icons-material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SchoolIcon from '@mui/icons-material/School';
import { Box, Divider, ListItem, Stack, styled, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import { ALL_DATA_LISTS } from '../helper/constant/sidebarListsData';

const SidebarWrapper = styled(Stack)(({ theme }) => ({
    minWidth: 260,
    height: '100vh',
    backgroundColor: theme.palette.background.paper,
    borderRight: `1px solid ${theme.palette.divider}`,
    // '& .logo': {
    //     maxHeight: 60,
    //     padding: '8px 24px 8px 0',
    // },
    // '& .navListWrapper': {
    //     '& .navListParent': {
    //         '&.Mui-selected': {
    //             backgroundColor: theme.palette.common.white,
    //         },
    //     },
    //     '& .navListChild': {
    //         '& .MuiButtonBase-root': {
    //             paddingLeft: 56,
    //         },
    //         '& .Mui-selected': {},
    //     },
    // },
}));

const navItems = [
    {
        id: 1,
        label: 'Dashboard',
        icon: <Dashboard />,
        to: '/dashboard',
        parentId: null,
    },
    {
        id: 2,
        label: 'Academics',
        icon: <AccountBalanceIcon />,
        parentId: null,
        children: [
            { id: 3, label: 'Medium', to: '/academics/medium' },
            { id: 4, label: 'Sections', to: '/academics/sections' },
            { id: 5, label: 'Subjects', to: '/academics/subjects' },
            { id: 6, label: 'Classes', to: '/academics/classes' },
            { id: 7, label: 'Classes with subject', to: '/academics/classes-with-subject' },
        ],
    },
    {
        id: 8,
        label: 'Students',
        icon: <SchoolIcon />,
        parentId: null,
        children: [
            { id: 9, label: 'Student List', to: '/students' },
            { id: 10, label: 'Student Admission ', to: '/student/Admission' },
        ],
    },
];

const Sidebar = () => {
    const history = useNavigate();
    const navigate = useNavigate();

    const navigateTo = (url: string) => {
        history(url);
    };


    return (
        <SidebarWrapper>
            <Stack
                // width={200}
                justifyContent={'space-between'}
                flexShrink={0}
                borderRight={'1px solid #f9f9f9'}
                bgcolor={'common.white'}
                sx={{ zIndex: 999 }}
            >
                <Stack height={'100%'}>
                    <Box sx={{ height: 'calc(100% - 10px)', overflowY: 'auto', px: 1, /* mx: 1 */ }}>
                        {ALL_DATA_LISTS.map((list) => {
                            return (
                                <Stack key={list.title}>
                                    <Typography variant={'overline'} fontSize={12} color={'text.tertiary'}>
                                        {list.title}
                                    </Typography>

                                    <List dense>
                                        {list.subMenu?.map((submenu) => {
                                            const selected =
                                                location.pathname.includes(submenu.link) ||
                                                (location.pathname === '/' && submenu.link === '/dashboard');
                                            // if (!hasLoyalty?.access && submenu.title === 'E-Loyalty Cards') {
                                            //     return null;
                                            // }
                                            return (
                                                <ListItem disablePadding key={submenu.title} className={submenu.className} sx={{ mb: 0.5 }}>
                                                    <ListItemButton
                                                        selected={selected}
                                                        onClick={() => navigate(submenu.link ? submenu.link : '')}
                                                        sx={{ px: 1 }}
                                                    >
                                                        <ListItemIcon
                                                            sx={{
                                                                mr: 1,
                                                                '& svg': {
                                                                    fontSize: 20,
                                                                    color: selected ? 'primary.main' : 'text.tertiary',
                                                                },
                                                            }}
                                                        >
                                                            {submenu.icon}
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary={
                                                                <Typography
                                                                    noWrap
                                                                    variant={'body2'}
                                                                    sx={{ color: selected ? 'primary.main' : grey[700], fontWeight: 700 }}
                                                                >
                                                                    {submenu.title}
                                                                </Typography>
                                                            }
                                                        />
                                                    </ListItemButton>
                                                </ListItem>
                                            );
                                        })}
                                    </List>
                                    <Divider sx={{ opacity: 0.6, mb: 2 }} />
                                </Stack>
                            );
                        })}
                    </Box>
                </Stack>
            </Stack>
        </SidebarWrapper>
    );
};

export default Sidebar;
