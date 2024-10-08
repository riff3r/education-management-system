import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const UsecasesIcon: React.FC<SvgIconProps> = (props) => {
    return (
        <SvgIcon {...props}>
            <path d='M21 7.52V13.4C21 13.74 20.67 13.98 20.35 13.88L16.42 12.66C15.34 12.33 14.18 12.61 13.39 13.4C12.59 14.2 12.3 15.37 12.64 16.45L13.85 20.35C13.95 20.67 13.71 21 13.37 21H7.52C4.07 21 2 18.94 2 15.48V7.52C2 4.06 4.07 2 7.52 2H15.48C18.93 2 21 4.06 21 7.52Z' />
            <path d='M21.96 18.84L20.33 19.39C19.88 19.54 19.52 19.89 19.37 20.35L18.82 21.98C18.35 23.39 16.37 23.36 15.93 21.95L14.08 16C13.72 14.82 14.81 13.72 15.98 14.09L21.94 15.94C23.34 16.38 23.36 18.37 21.96 18.84Z' />
        </SvgIcon>
    );
};
export default UsecasesIcon;
