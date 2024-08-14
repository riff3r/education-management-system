import {} from '@mui/material/Checkbox';

declare module '@mui/material/Checkbox' {
    interface CheckboxPropsSizeOverrides {
        large: true;
    }

    interface CheckboxClasses {
        colorError: true;
        colorInfo: true;
        colorWarning: true;
        colorSuccess: true;
    }
}
