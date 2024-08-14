declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        tonal: true;
        noPadding: true;
    }
}

import { GridSize } from '@mui/material/Grid/Grid';

declare module '@mui/material/styles' {
    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        body1medium?: React.CSSProperties;
        body1SemiBold?: React.CSSProperties;
        body2Semibold?: React.CSSProperties;
        body2medium?: React.CSSProperties;
        buttonMedium?: React.CSSProperties;
        avatarLetter?: React.CSSProperties;
        inputLevel?: React.CSSProperties;
        helperText?: React.CSSProperties;
        chipLight?: React.CSSProperties;
        inputText?: React.CSSProperties;
        tooltip?: React.CSSProperties;
        badge?: React.CSSProperties;
        chipMedium?: React.CSSProperties;
        TableHeader?: React.CSSProperties;
        alert?: React.CSSProperties;
        helperText2?: React.CSSProperties;
    }

    interface Palette {
        other: {
            [key: string]: string;
        };
    }

    interface PaletteOptions {
        other: {
            [key: string]: string;
        };
    }
}

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xxl: true;
        xs: true;
    }
}
declare module '@mui/material/Grid' {
    interface RegularBreakpoints {
        xxl: boolean | GridSize;
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        body1medium: true;
        body1SemiBold: true;
        body2Semibold: true;
        body2medium: true;
        buttonMedium: true;
        avatarLetter: true;
        inputLevel: true;
        helperText: true;
        chipLight: true;
        inputText: true;
        tooltip: true;
        badge: true;
        chipMedium: true;
        TableHeader: true;
        alert: true;
        helperText2: true;
    }
}

declare module '@mui/material/IconButton' {
    interface IconButtonProps {
        variant?: 'rounded' | 'outlined' | 'roundedBorder'; // Add custom variants here
        color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'inherit' | 'inheritWhite';
    }
}

declare module '@mui/material/Switch' {
    interface SwitchProps {
        variant?: 'filled' | 'withIcon' | 'onOff';
        size?: 'small' | 'medium';
    }
}

declare module '@mui/material/Avatar' {
    interface AvatarProps {
        size?: 'small' | 'medium' | 'large';
    }
}

declare module '@mui/material/AvatarGroup' {
    interface AvatarGroupProps {
        size?: 'small' | 'medium' | 'large';
    }
}

declare module '@mui/material/Badge' {
    interface BadgeProps {
        outlined?: 'small' | 'large';
    }
}

declare module '@mui/material/Input' {
    // interface InputProps {
    //     // Add any custom props if necessary
    // }

    interface InputClasses {
        // Extend with custom classes if necessary
        adornedStart?: string;
        adornedEnd?: string;
        sizeSmall?: string;
    }
}

declare module '@mui/material/OutlinedInput' {
    interface OutlinedInputClasses {
        // Add custom classes if necessary
        adornedStart?: string;
        adornedEnd?: string;
        multiline?: string;
        sizeSmall?: string;
    }
}

declare module '@mui/material/styles' {
    interface Components {
        MuiLoadingButton?: {
            defaultProps?: {
                variant?: 'text' | 'outlined' | 'contained';
                disableElevation?: boolean;
            };
        };
    }
}

declare module '@mui/material/Chip' {
    interface ChipPropsSizeOverrides {
        xSmall: true;
    }
    interface ChipPropsVariantOverrides {
        tonal: true;
    }

    interface ChipPropsColorOverrides {
        tonalPrimary: true;
        tonalSecondary: true;
        tonalError: true;
        tonalWarning: true;
        tonalInfo: true;
        tonalSuccess: true;
    }

    interface ChipClasses {
        xSmall: true;
        tonalDefault: true;
        tonalPrimary: true;
        tonalSecondary: true;
        tonalError: true;
        tonalWarning: true;
        tonalInfo: true;
        tonalSuccess: true;
        deleteIconTonalColorPrimary: true;
        deleteIconTonalColorSecondary: true;
        deleteIconTonalColorError: true;
        deleteIconTonalColorWarning: true;
        deleteIconTonalColorInfo: true;
        deleteIconTonalColorSuccess: true;
        avatarColorDefault: true;
        avatarColorError: true;
        avatarColorWarning: true;
        avatarColorInfo: true;
        avatarColorSuccess: true;
        filledDefault: true;
        colorDefault: true;
        sizeSmall: true;
        avatarSmall: true;
        avatarXSmall: true;
        deleteIconXSmall: true;
    }
}
