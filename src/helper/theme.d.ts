/* eslint-disable @typescript-eslint/no-unused-vars */
import { ButtonPropsVariantOverrides } from '@mui/material/Button';

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        tonal: true;
        noPadding: true;
    }
}
