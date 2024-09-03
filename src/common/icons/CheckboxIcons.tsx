import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export const CheckboxUncheckedIcon: React.FC<SvgIconProps> = (props) => (
    <SvgIcon {...props}>
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M2.98858 2.98861C4.36494 1.61225 6.41121 1.10001 8.99998 1.10001H15C17.5887 1.10001 19.635 1.61225 21.0114 2.98861C22.3877 4.36497 22.9 6.41124 22.9 9.00001V15C22.9 17.5888 22.3877 19.635 21.0114 21.0114C19.635 22.3878 17.5887 22.9 15 22.9H8.99998C6.41121 22.9 4.36494 22.3878 2.98858 21.0114C1.61222 19.635 1.09998 17.5888 1.09998 15V9.00001C1.09998 6.41124 1.61222 4.36497 2.98858 2.98861ZM4.26137 4.2614C3.38773 5.13504 2.89998 6.58877 2.89998 9.00001V15C2.89998 17.4112 3.38773 18.865 4.26137 19.7386C5.13501 20.6122 6.58874 21.1 8.99998 21.1H15C17.4112 21.1 18.8649 20.6122 19.7386 19.7386C20.6122 18.865 21.1 17.4112 21.1 15V9.00001C21.1 6.58877 20.6122 5.13504 19.7386 4.2614C18.8649 3.38776 17.4112 2.90001 15 2.90001H8.99998C6.58874 2.90001 5.13501 3.38776 4.26137 4.2614Z'
        />
    </SvgIcon>
);

export const CheckboxCheckedIcon: React.FC<SvgIconProps> = (props) => (
    <SvgIcon {...props}>
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M15.3 23H8.7C3.2 23 1 20.8 1 15.3V8.7C1 3.2 3.2 1 8.7 1H15.3C20.8 1 23 3.2 23 8.7V15.3C23 20.8 20.8 23 15.3 23ZM17.3744 9.58766C17.7614 9.20138 17.7619 8.57455 17.3756 8.18759C16.9893 7.80063 16.3625 7.80007 15.9756 8.18635L10.4386 13.7136L8.02501 11.3C7.63839 10.9134 7.01156 10.9134 6.62494 11.3C6.23832 11.6866 6.23832 12.3134 6.62494 12.7L9.73794 15.813C10.1243 16.1994 10.7507 16.1997 11.1374 15.8137L17.3744 9.58766Z'
        />
    </SvgIcon>
);
export const IndeterminateIcon: React.FC<SvgIconProps> = (props) => (
    <SvgIcon {...props}>
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M15.3 23H8.7C3.2 23 1 20.8 1 15.3V8.7C1 3.2 3.2 1 8.7 1H15.3C20.8 1 23 3.2 23 8.7V15.3C23 20.8 20.8 23 15.3 23ZM7.26316 10.7C6.56554 10.7 6 11.2655 6 11.9632C6 12.6608 6.56554 13.2263 7.26316 13.2263H16.7368C17.4345 13.2263 18 12.6608 18 11.9632C18 11.2655 17.4345 10.7 16.7368 10.7H7.26316Z'
        />
    </SvgIcon>
);