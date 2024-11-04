import { Stack } from '@mui/material';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';
import SecureRoute from './SecureRoute';

const AppLayout = () => {
    return (
        <SecureRoute>
            <Stack direction={'row'}>
                <Sidebar />
                <Stack p={3} flex={1}>
                    <Outlet />
                </Stack>
            </Stack>
        </SecureRoute>
    );
};

export default AppLayout;