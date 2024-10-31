import { Stack } from '@mui/material';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
    return (
        <Stack direction={'row'}>
            <Sidebar />
            <Stack p={3} flex={1}>
                <Outlet />
            </Stack>
        </Stack>
    );
};

export default AppLayout;