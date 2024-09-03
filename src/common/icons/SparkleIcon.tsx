import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const SparkleIcon: React.FC<SvgIconProps> = ({ viewBox = '0 0 11 11', ...props }) => {
    return (
        <SvgIcon viewBox={viewBox} {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5.36272 0.102459C5.38075 0.0418375 5.43662 0 5.5 0C5.56338 0 5.61925 0.0418375 5.63728 0.102459C5.63728 0.102459 5.88854 0.944682 6.15785 1.84803C6.58697 3.28723 7.71278 4.41303 9.15197 4.84215C10.0553 5.11146 10.8975 5.36272 10.8975 5.36272C10.9582 5.38075 11 5.43662 11 5.5C11 5.56338 10.9582 5.61925 10.8975 5.63728C10.8975 5.63728 10.0553 5.88855 9.15197 6.15785C7.71278 6.58697 6.58697 7.71278 6.15785 9.15197C5.88854 10.0553 5.63728 10.8975 5.63728 10.8975C5.61925 10.9582 5.56338 11 5.5 11C5.43662 11 5.38075 10.9582 5.36272 10.8975C5.36272 10.8975 5.11146 10.0553 4.84215 9.15197C4.41303 7.71278 3.28722 6.58697 1.84803 6.15785C0.944682 5.88855 0.102459 5.63728 0.102459 5.63728C0.0418337 5.61925 0 5.56338 0 5.5C0 5.43662 0.0418337 5.38075 0.102459 5.36272C0.102459 5.36272 0.944682 5.11146 1.84803 4.84215C3.28722 4.41303 4.41303 3.28723 4.84215 1.84803C5.11146 0.944682 5.36272 0.102459 5.36272 0.102459Z'
            />
        </SvgIcon>
    );
};
export default SparkleIcon;