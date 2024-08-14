import {} from '@mui/material/Button';
import {} from '@mui/material/ButtonGroup';

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        tonal: true;
        noPadding: true;
    }

    interface ButtonClasses {
        containedInheritWhite: true;
        outlinedInheritWhite: true;
        tonalPrimary: true;
        tonalSecondary: true;
        tonalError: true;
        tonalWarning: true;
        tonalInfo: true;
        tonalSuccess: true;
        tonalInherit: true;
        tonalInheritWhite: true;
        tonal: true;
        noPadding: true;
        noPaddingPrimary: true;
        noPaddingSecondary: true;
        noPaddingError: true;
        noPaddingWarning: true;
        noPaddingInfo: true;
        noPaddingSuccess: true;
        noPaddingInherit: true;
        noPaddingInheritWhite: true;
    }
    interface ButtonPropsColorOverrides {
        inheritWhite: true;
    }
}

declare module '@mui/material/IconButton' {
    interface IconButtonPropsColorOverrides {
        inheritWhite: true;
    }

    interface IconButtonClasses {
        outlinedPrimary: true;
        colorInheritWhite: true;
    }
}

declare module '@mui/material/ButtonGroup' {
    interface ButtonGroupClasses {
        containedInheritWhite: true;
    }
}
