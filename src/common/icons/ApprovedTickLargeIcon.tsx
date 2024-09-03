import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const ApprovedTickLargeIcon: React.FC<SvgIconProps> = ({ viewBox = '0 0 98 90', ...props }) => {
    return (
        <SvgIcon viewBox={viewBox} {...props}>
            <path
                d='M49.7354 85.3106C72.2329 85.3106 90.4708 67.0728 90.4708 44.5752C90.4708 22.0777 72.2329 3.83984 49.7354 3.83984C27.2379 3.83984 9 22.0777 9 44.5752C9 67.0728 27.2379 85.3106 49.7354 85.3106Z'
                fill='#FAF3EB'
            />
            <path
                d='M46.9399 72L46.5713 71.371C40.9418 61.7631 25.9821 41.3739 25.831 41.1691L25.6152 40.8754L30.7119 35.83L46.8452 47.1145C57.0032 33.9107 66.4798 24.8417 72.6614 19.5458C79.4236 13.7526 83.8253 11.0856 83.8697 11.06L83.9698 11H92.6152L91.7894 11.7367C70.5505 30.6862 47.5298 70.9616 47.3005 71.3662L46.9399 72Z'
                fill='#FB5200'
            />
        </SvgIcon>
    );
};
export default ApprovedTickLargeIcon;
