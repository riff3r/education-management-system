import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

const CampaignIcon: React.FC<SvgIconProps> = (props) => {
    return (
        <SvgIcon {...props}>
            <path d='M20.6371 18.6951C21.121 13.7445 21.121 8.75377 20.6371 3.80316C20.4858 2.25468 18.809 1.47029 17.6354 2.39907L13.1559 5.94442C11.7437 7.06199 10.0311 7.6655 8.27164 7.6655H4.09162C3.48873 7.6655 3 8.18586 3 8.82776V13.6704C3 14.3123 3.48873 14.8327 4.09162 14.8327H8.27163C10.0311 14.8327 11.7437 15.4362 13.1559 16.5539L17.6354 20.0992C18.809 21.028 20.4858 20.2435 20.6371 18.6951Z' />
            <path d='M8.9094 17.4114C8.9721 17.1504 8.91805 16.8734 8.76297 16.6607C8.60787 16.448 8.36917 16.3235 8.11625 16.3235H5.93302C5.62291 16.3235 5.33942 16.51 5.20074 16.8054L4.10912 19.1299C3.9227 19.5269 4.04618 20.0096 4.39591 20.2511L6.72539 21.8597C6.94656 22.0124 7.22326 22.0424 7.4688 21.9402C7.71434 21.838 7.89867 21.6163 7.96403 21.3444L8.9094 17.4114Z' />
        </SvgIcon>
    );
};
export default CampaignIcon;
