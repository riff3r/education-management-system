import { Dashboard } from '@mui/icons-material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SchoolIcon from '@mui/icons-material/School';
import { Collapse, Stack, styled } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SidebarWrapper = styled(Stack)(({ theme }) => ({
    minWidth: 260,
    height: '100vh',
    backgroundColor: theme.palette.background.paper,
    borderRight: `1px solid ${theme.palette.divider}`,
    '& .logo': {
        maxHeight: 60,
        padding: '8px 24px 8px 0',
    },
    '& .navListWrapper': {
        '& .navListParent': {
            '&.Mui-selected': {
                backgroundColor: theme.palette.common.white,
            },
        },
        '& .navListChild': {
            '& .MuiButtonBase-root': {
                paddingLeft: 56,
            },
            '& .Mui-selected': {},
        },
    },
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
    const [expanded, setExpanded] = useState(null);
    const [selected, setSelected] = useState({ parent: null, child: navItems[0].id });
    const navigate = useNavigate();

    const handleToggle = (item) => {
        if (expanded === item.id) {
            setExpanded(null);
        } else {
            setExpanded(item.id);
            if (item.children && item.children.length > 0) {
                const firstChild = item.children[0];
                setSelected({ parent: item.id, child: firstChild.id });
                navigate(firstChild.to);
            }
        }
    };

    const handleSelect = (parentId, childId, route) => {
        setSelected({ parent: parentId, child: childId });
        navigate(route);
    };

    const renderNavItem = (item, parentId = null) => {
        const isSelected = selected.child === item.id;
        const isExpanded = expanded === item.id;
        const hasChildren = !!item.children;

        return (
            <div key={item.id}>
                <ListItemButton
                    component={item.to ? Link : 'div'}
                    to={item.to}
                    selected={isSelected || selected.parent === item.id}
                    onClick={() => {
                        if (hasChildren) handleToggle(item);
                        if (!hasChildren) handleSelect(parentId, item.id, item.to);
                    }}
                    className={hasChildren ? 'navListParent' : 'navListChild'}
                >
                    {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                    <ListItemText primary={item.label} />
                    {hasChildren && (isExpanded ? <ExpandLess /> : <ExpandMore />)}
                </ListItemButton>
                {hasChildren && (
                    <Collapse in={isExpanded} timeout='auto' unmountOnExit>
                        <List component='div' disablePadding>
                            {item.children.map((child) => renderNavItem(child, item.id))}
                        </List>
                    </Collapse>
                )}
            </div>
        );
    };

    return (
        <SidebarWrapper>
            <nav aria-label='main mailbox folders'>
                <Stack className='logo' direction='row' alignItems='center' justifyContent='center' textAlign={'center'}>
                    <img
                        height={44}
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjsScWYmyfPv3XdkNdEFVJ1wlDKMOgcSWUcg&s'
                        alt='logo'
                    />
                </Stack>
                <List component='nav' aria-labelledby='nested-list-subheader' className='navListWrapper'>
                    {navItems.map((item) => renderNavItem(item))}
                </List>
            </nav>
        </SidebarWrapper>
    );
};

export default Sidebar;
