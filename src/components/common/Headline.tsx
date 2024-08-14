import { Stack, StackProps, Typography } from '@mui/material';
import React from 'react';

interface IProps {
    title: string;
    description?: string;
    action?: React.ReactNode;
}

const Headline: React.FC<IProps & StackProps> = ({ title, description, action, ...rest }) => {
    return (
        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} {...rest}>
            <Stack>
                <Typography variant='h6'>{title}</Typography>
                <Typography variant='subtitle2' color={'text.secondary'}>
                    {description}
                </Typography>
            </Stack>

            {action}
        </Stack>
    );
};

export default Headline;
