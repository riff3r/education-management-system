import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const UserIcon: React.FC<SvgIconProps> = (props) => {
    return (
        <SvgIcon {...props}>
            <path d='M12 2C9.37999 2 7.24999 4.13 7.24999 6.75C7.24999 9.32 9.25999 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z' />
            <path d='M17.08 14.15C14.29 12.29 9.73999 12.29 6.92999 14.15C5.65999 15 4.95999 16.15 4.95999 17.38C4.95999 18.61 5.65999 19.75 6.91999 20.59C8.31999 21.53 10.16 22 12 22C13.84 22 15.68 21.53 17.08 20.59C18.34 19.74 19.04 18.6 19.04 17.36C19.03 16.13 18.34 14.99 17.08 14.15Z' />
        </SvgIcon>
    );
};
export default UserIcon;
