import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const DashboardIcon: React.FC<SvgIconProps> = (props) => {
    return (
        <SvgIcon {...props}>
            <path d='M8.25 2V22H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2H8.25Z' />
            <path d='M22 7.81V11.25H9.75V2H16.19C19.83 2 22 4.17 22 7.81Z' />
            <path d='M22 12.75V16.19C22 19.83 19.83 22 16.19 22H9.75V12.75H22Z' />
        </SvgIcon>
    );
};
export default DashboardIcon;
