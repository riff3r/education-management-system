import React from 'react';
import { Stack, TextField } from '@mui/material';

const Settings: React.FC = () => {
    return (
        <Stack>
            <TextField placeholder={'Subject Name'} fullWidth required />
        </Stack>
    );
};

export default Settings;