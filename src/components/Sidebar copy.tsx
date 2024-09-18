import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Dashboard, 
  AccountBalance as AccountBalanceIcon, 
  ExpandLess, 
  ExpandMore, 
  School as SchoolIcon 
} from '@mui/icons-material';
import { 
  Collapse, 
  Stack, 
  styled, 
  List, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  Theme 
} from '@mui/material';

// Define types for our nav items
interface NavItem {
  id: number;
  label: string;
  icon?: React.ReactElement;
  to?: string;
  parentId: number | null;
  children?: NavItem[];
}

// Define the type for our selected state
interface SelectedState {
  parent: number | null;
  child: number;
}

const SidebarWrapper = styled(Stack)(({ theme }: { theme: Theme }) => ({
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

const navItems: NavItem[] = [
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
      { id: 3, label: 'Medium', to: '/academics/medium', parentId: 2 },
      { id: 4, label: 'Sections', to: '/academics/sections', parentId: 2 },
      { id: 5, label: 'Subjects', to: '/academics/subjects', parentId: 2 },
      { id: 6, label: 'Classes', to: '/academics/classes', parentId: 2 },
      { id: 7, label: 'Classes with subject', to: '/academics/classes-with-subject', parentId: 2 },
    ],
  },
  {
    id: 8,
    label: 'Students',
    icon: <SchoolIcon />,
    parentId: null,
    children: [
      { id: 9, label: 'Student List', to: '/students', parentId: 8 },
      { id: 10, label: 'Student Admission ', to: '/student/Admission', parentId: 8 },
    ],
  },
];

const Sidebar: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [selected, setSelected] = useState<SelectedState>({ parent: null, child: navItems[0].id });
  const navigate = useNavigate();

  const handleToggle = (item: NavItem) => {
    if (expanded === item.id) {
      setExpanded(null);
    } else {
      setExpanded(item.id);
      if (item.children && item.children.length > 0) {
        const firstChild = item.children[0];
        setSelected({ parent: item.id, child: firstChild.id });
        navigate(firstChild.to || '/');
      }
    }
  };

  const handleSelect = (parentId: number | null, childId: number, route: string) => {
    setSelected({ parent: parentId, child: childId });
    navigate(route);
  };

  const renderNavItem = (item: NavItem, parentId: number | null = null) => {
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
            if (!hasChildren && item.to) handleSelect(parentId, item.id, item.to);
          }}
          className={hasChildren ? 'navListParent' : 'navListChild'}
        >
          {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
          <ListItemText primary={item.label} />
          {hasChildren && (isExpanded ? <ExpandLess /> : <ExpandMore />)}
        </ListItemButton>
        {hasChildren && (
          <Collapse in={isExpanded} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.children?.map((child) => renderNavItem(child, item.id))}
            </List>
          </Collapse>
        )}
      </div>
    );
  };

  return (
    <SidebarWrapper>
      <nav aria-label="main mailbox folders">
        <Stack className="logo" direction="row" alignItems="center" justifyContent="center" textAlign="center">
          <img
            height={44}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjsScWYmyfPv3XdkNdEFVJ1wlDKMOgcSWUcg&s"
            alt="logo"
          />
        </Stack>
        <List component="nav" aria-labelledby="nested-list-subheader" className="navListWrapper">
          {navItems.map((item) => renderNavItem(item))}
        </List>
      </nav>
    </SidebarWrapper>
  );
};

export default Sidebar;