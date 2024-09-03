import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const BoldTickIcon: React.FC<SvgIconProps> = ({ viewBox = '0 0 28 28', ...props }) => {
    return (
        <SvgIcon viewBox={viewBox} {...props}>
            <path d='M10.8154 22.4413C8.69853 20.3815 6.60065 18.3107 4.48383 16.251C4.24904 16.0225 4.24904 15.6467 4.48383 15.4182L6.92252 13.0453C7.1573 12.8168 7.54356 12.8168 7.77834 13.0453L11.2584 16.4315L20.218 7.7098C20.4528 7.48135 20.839 7.48135 21.0738 7.7098L23.5163 10.0828C23.7511 10.3149 23.7511 10.687 23.5163 10.9155L11.6712 22.4413C11.4364 22.6734 11.0501 22.6734 10.8154 22.4413Z' />
        </SvgIcon>
    );
};
export default BoldTickIcon;
