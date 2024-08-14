import { SimplePaletteColorOptions } from '@mui/material';

// interface CustomColor {
//     outlinedBorder?: string;
//     outlinedBorderDarker?: string;
//     dividerFillColor?: string;
//     inputOutlinedHoverBorder?: string;
//     inputOutlinedEnabledBorder?: string;
//     ratingActiveFill?: string;
//     graySolid?: string;
//     divider?: string;
// }

declare module '@mui/material/styles' {
    interface Palette {
        inheritWhite: SimplePaletteColorOptions;
    }

    interface PaletteOptions {
        inheritWhite: SimplePaletteColorOptions;
    }

    interface TypeAction {
        actionHover: string;
    }

    interface TypeBackground {
        paperElevation0: string;
    }

    interface TypeText {
        tertiary: string;
        light: string;
        contrastText: string;
    }
}
