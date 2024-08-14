import { alpha, Components, darken, outlinedInputClasses, PaletteOptions } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';
// import { themeProperties } from '../../common/GlobalWrapper/ThemeWrapper';

export const themeProperties = {
    primaryColor: '#ED7549',
    secondaryColor: '#F9DB4A',
    errorColor: '#EC131F',
    warningColor: '#F9991E',
    infoColor: '#7C68FD',
    // successColor: '#0FDBBA',
    successColor: '#008951',
};

// const primaryColor = '#ED7549';
// const secondaryColor = '#F9DB4A';
// const errorColor = '#EC131F';
// const warningColor = '#F9991E';
// const infoColor = '#7C68FD';
// const successColor = '#008951';
const primaryColor = themeProperties.primaryColor;
const secondaryColor = themeProperties.secondaryColor;
const errorColor = themeProperties.errorColor;
const warningColor = themeProperties.warningColor;
const infoColor = themeProperties.infoColor;
const successColor = themeProperties.successColor;
const opacityFocus = 0.12;
const opacityHover = 0.06;

const propertyInObj = <T extends object>(color: string | number, obj?: T): string => {
    const key = color as keyof T;
    if (obj) {
        return color in obj ? String(obj[key]) : '';
    }
    return '';
};

const fontConstant = ['Nunito', 'sans-serif'].join(',');
export const typographyProperties: TypographyOptions = {
    htmlFontSize: 16,
    fontFamily: fontConstant,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
        fontFamily: fontConstant,
        fontWeight: 900,
        fontSize: '96px',
        lineHeight: '112px',
        letterSpacing: '-1.5px',
    },
    h2: {
        fontFamily: fontConstant,
        fontWeight: 900,
        fontSize: '60px',
        lineHeight: '72px',
        letterSpacing: '-0.5px',
    },
    h3: {
        fontFamily: fontConstant,
        fontWeight: 900,
        fontSize: '48px',
        lineHeight: '56.02px',
        letterSpacing: '-1.5px',
    },
    h4: {
        fontFamily: fontConstant,
        fontWeight: 900,
        fontSize: '34px',
        lineHeight: '40px',
        letterSpacing: '-1px',
    },
    h5: {
        fontFamily: fontConstant,
        fontWeight: 800,
        fontSize: '24px',
        lineHeight: '30px',
        letterSpacing: '-0.25px',
    },
    h6: {
        fontFamily: fontConstant,
        fontWeight: 800,
        fontSize: '20px',
        lineHeight: '24px',
        letterSpacing: '-0.5px',
    },
    subtitle1: {
        fontFamily: fontConstant,
        fontWeight: 700,
        fontSize: '18px',
        lineHeight: '26px',
        letterSpacing: '-0.35px',
    },
    subtitle2: {
        fontFamily: fontConstant,
        fontWeight: 500,
        fontSize: '15px',
        lineHeight: '18px',
        letterSpacing: '-0.35px',
    },
    body1: {
        fontFamily: fontConstant,
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '24px',
    },
    body2: {
        fontFamily: fontConstant,
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '20px',
        letterSpacing: '-0.15px',
    },
    button: {
        fontFamily: fontConstant,
        fontWeight: 800,
        fontSize: '14px',
        lineHeight: '24px',
        letterSpacing: '-0.2px',
    },
    caption: {
        fontFamily: fontConstant,
        fontWeight: 700,
        fontSize: '14px',
        lineHeight: '18px',
        letterSpacing: '-0.15px',
    },
    overline: {
        fontFamily: fontConstant,
        fontWeight: 700,
        fontSize: '12px',
        lineHeight: '12px',
        letterSpacing: '0.75px',
        textTransform: 'uppercase',
    },
};

export const lightModePalette: PaletteOptions = {
    mode: 'light',
    common: {
        black: '#000000',
        white: '#FFFFFF',
    },
    background: {
        paper: '#FFFFFF',
        default: '#F9FAFB',
    },
    text: {
        primary: '#292B2D',
        secondary: '#71757A',
        tertiary: '#A5A7AB',
    },
    primary: {
        main: primaryColor,
        dark: darken(primaryColor, opacityFocus),
        light: alpha(primaryColor, opacityHover),
        contrastText: '#FFFFFF',
    },
    secondary: {
        main: secondaryColor,
        dark: darken(secondaryColor, opacityFocus),
        light: alpha(secondaryColor, opacityHover),
        contrastText: '#FFFFFF',
    },
    error: {
        main: errorColor,
        dark: darken(errorColor, opacityFocus),
        light: alpha(errorColor, opacityHover),
        contrastText: '#FFFFFF',
    },
    warning: {
        main: warningColor,
        dark: darken(warningColor, opacityFocus),
        light: alpha(warningColor, opacityHover),
        contrastText: '#FFFFFF',
    },
    info: {
        main: infoColor,
        dark: darken(infoColor, opacityFocus),
        light: alpha(infoColor, opacityHover),
        contrastText: '#FFFFFF',
    },
    success: {
        main: successColor,
        dark: darken(successColor, opacityFocus),
        light: alpha(successColor, opacityHover),
        contrastText: '#FFFFFF',
    },
    inheritWhite: {
        main: '#ffffff',
    },
    divider: '#1D29391A',
    other: {
        outlinedEnabledBorder: '#292B2D',
        outlinedBorderDarker: 'rgba(148, 157, 178, 0.24)',
        dividerTwo: '#292B2D0F',
        darkSecondary: '#F4C044',
        lightSecondary: '#F4C04440',
    },
};

export const myBreakpoints = {
    values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
        xxl: 1780,
    },
};

export const ElementProps: Components = {
    MuiButton: {
        defaultProps: {
            variant: 'contained',
            size: 'large',
            disableElevation: true,
        },
        variants: [
            {
                props: { variant: 'tonal' },
                style: {},
            },
            {
                props: { variant: 'noPadding' },
                style: {
                    padding: 0,
                },
            },
        ],
        styleOverrides: {
            root: {
                minWidth: 'max-content',
                borderRadius: '12px',
                textTransform: 'capitalize',
            },
            text: {
                boxShadow: 'none',
            },
            outlined: {
                backgroundColor: lightModePalette.common?.white,
                '&:hover': { backgroundColor: lightModePalette.common?.white },
            },
            contained: {
                boxShadow: `3px 3px 0px 0px ${lightModePalette.text?.primary}`,
                border: `1.5px solid ${lightModePalette.text?.primary}`,
            },
            containedPrimary: {
                '&:hover': { borderColor: propertyInObj('main', lightModePalette.primary) },
            },
            containedSecondary: {
                '&:hover': { borderColor: propertyInObj('main', lightModePalette.secondary) },
            },
            containedWarning: {
                '&:hover': { borderColor: propertyInObj('main', lightModePalette.warning) },
            },
            containedInfo: {
                '&:hover': { borderColor: propertyInObj('main', lightModePalette.info) },
            },
            containedSuccess: {
                '&:hover': { borderColor: propertyInObj('main', lightModePalette.success) },
            },
            containedError: {
                '&:hover': { borderColor: propertyInObj('main', lightModePalette.error) },
            },
            containedInherit: {
                backgroundColor: lightModePalette.text?.secondary,
                color: lightModePalette.common?.white,
                '&:hover': { backgroundColor: lightModePalette.text?.primary },
            },
            outlinedPrimary: {
                borderColor: propertyInObj('main', lightModePalette.primary),
                boxShadow: `3px 3px 0px 0px ${propertyInObj('main', lightModePalette.primary)}`,
            },
            outlinedSecondary: {
                color: lightModePalette.text?.primary,
                borderColor: propertyInObj('main', lightModePalette.secondary),
                boxShadow: `3px 3px 0px 0px ${propertyInObj('main', lightModePalette.secondary)}`,
            },
            outlinedError: {
                borderColor: propertyInObj('main', lightModePalette.error),
                boxShadow: `3px 3px 0px 0px ${propertyInObj('main', lightModePalette.error)}`,
            },
            outlinedWarning: {
                borderColor: propertyInObj('main', lightModePalette.warning),
                boxShadow: `3px 3px 0px 0px ${propertyInObj('main', lightModePalette.warning)}`,
            },
            outlinedInfo: {
                borderColor: propertyInObj('main', lightModePalette.info),
                boxShadow: `3px 3px 0px 0px ${propertyInObj('main', lightModePalette.info)}`,
            },
            outlinedSuccess: {
                borderColor: propertyInObj('main', lightModePalette.success),
                boxShadow: `3px 3px 0px 0px ${propertyInObj('main', lightModePalette.success)}`,
            },
            outlinedInherit: {
                boxShadow: `3px 3px 0px 0px ${lightModePalette.text?.primary}`,
            },
            outlinedInheritWhite: {
                backgroundColor: lightModePalette.text?.primary,
                borderColor: propertyInObj('main', lightModePalette.inheritWhite),
                boxShadow: `3px 3px 0px 0px ${propertyInObj('main', lightModePalette.inheritWhite)}`,
                '&:hover': {
                    backgroundColor: lightModePalette.text?.primary,
                },
            },
            tonalPrimary: {
                background: propertyInObj('light', lightModePalette.primary),
                color: propertyInObj('main', lightModePalette.primary),
                '&:hover': {
                    backgroundColor: alpha(propertyInObj('main', lightModePalette.primary), opacityHover),
                },
            },
            tonalSecondary: {
                background: propertyInObj('light', lightModePalette.secondary),
                color: propertyInObj('main', lightModePalette.secondary),
                '&:hover': {
                    backgroundColor: alpha(propertyInObj('main', lightModePalette.secondary), opacityHover),
                },
            },
            tonalError: {
                background: propertyInObj('light', lightModePalette.error),
                color: propertyInObj('main', lightModePalette.error),
                '&:hover': {
                    backgroundColor: alpha(propertyInObj('main', lightModePalette.error), opacityHover),
                },
            },
            tonalWarning: {
                background: propertyInObj('light', lightModePalette.warning),
                color: propertyInObj('main', lightModePalette.warning),
                '&:hover': {
                    backgroundColor: alpha(propertyInObj('main', lightModePalette.warning), opacityHover),
                },
            },
            tonalInfo: {
                background: propertyInObj('light', lightModePalette.info),
                color: propertyInObj('main', lightModePalette.info),
                '&:hover': {
                    backgroundColor: alpha(propertyInObj('main', lightModePalette.info), opacityHover),
                },
            },
            tonalSuccess: {
                background: propertyInObj('light', lightModePalette.success),
                color: propertyInObj('main', lightModePalette.success),
                '&:hover': {
                    backgroundColor: alpha(propertyInObj('main', lightModePalette.success), opacityHover),
                },
            },
            tonalInherit: {
                backgroundColor: alpha(propertyInObj('primary', lightModePalette.text), opacityHover),
                color: lightModePalette.text?.secondary,
                '&:hover': {
                    backgroundColor: alpha(propertyInObj('primary', lightModePalette.text), opacityHover),
                },
            },
        },
    },
    MuiChip: {
        variants: [
            {
                props: { size: 'xSmall' },
                style: {
                    height: 22,
                    fontSize: 11,
                    lineHeight: 1,
                    '& .MuiChip-icon': {
                        fontSize: 14,
                    },
                    '& .MuiChip-deleteIcon': {
                        fontSize: 14,
                    },
                    '& .MuiChip-label': {
                        paddingInline: 8,
                    },
                },
            },
        ],
    },
    MuiInputAdornment: {
        styleOverrides: {
            sizeSmall: {
                positionStart: {
                    marginRight: '-2px',
                },
            },
            positionStart: {
                marginRight: '-4px',
                '& svg': { margin: '8px -4px 8px 8px' },
                '& p': {
                    fontSize: 14,
                    height: 'unset',
                    borderRight: `1px solid ${propertyInObj('outlinedEnabledBorder', lightModePalette.other)}`,
                    padding: '8px 10px',
                },
                '&.MuiInputAdornment-sizeSmall': {
                    '& p': { padding: '6px 10px' },
                },
            },
            positionEnd: {
                marginLeft: 0,
                '& svg': { margin: '8px 8px 8px -8px' },
                '& p': {
                    fontSize: 14,
                    height: 'unset',
                    borderLeft: `1px solid ${propertyInObj('outlinedEnabledBorder', lightModePalette.other)}`,
                    padding: '8px 10px',
                },
                '&.MuiInputAdornment-sizeSmall': {
                    '& p': { padding: '6px 10px' },
                },
            },
        },
    },
    MuiInputLabel: {
        defaultProps: {
            shrink: true,
            disableAnimation: true,
            size: 'small',
        },
        styleOverrides: {
            root: {
                position: 'relative',
                transform: 'unset',
                ...typographyProperties.body1,
                fontWeight: 700,
                color: lightModePalette.text?.primary,
                '&.Mui-error': {
                    '&.Mui-focused': {
                        color: propertyInObj('main', lightModePalette.error),
                    },
                },
            },
            sizeSmall: {
                fontSize: '14px',
            },
        },
    },
    MuiTextField: {
        defaultProps: {
            hiddenLabel: true,
        },
        styleOverrides: {
            root: {
                borderRadius: '10px',
                '& label.Mui-focused': {
                    color: lightModePalette.text?.secondary,
                },
                input: {
                    padding: '10px 12px',
                },
            },
        },
    },
    MuiOutlinedInput: {
        styleOverrides: {
            root: {
                color: propertyInObj('primary', lightModePalette.text),
                borderColor: propertyInObj('outlinedEnabledBorder', lightModePalette.other),
                backgroundColor: propertyInObj('white', lightModePalette.common),
                borderRadius: '8px',
                [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                    borderColor: propertyInObj('inputOutlinedHoverBorder', lightModePalette.other),
                },
                [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                    borderColor: propertyInObj('main', lightModePalette.primary),
                },
                '& legend': {
                    display: 'none',
                },
                '&.Mui-error': {
                    backgroundColor: alpha(propertyInObj('main', lightModePalette.error), 0.05),
                    input: {
                        color: propertyInObj('main', lightModePalette.error),
                    },
                    [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                        borderColor: propertyInObj('main', lightModePalette.error),
                    },
                    [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                        borderColor: propertyInObj('main', lightModePalette.error),
                    },
                },
            },
            input: {
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '20px',
                letterSpacing: '-0.25px',
                padding: '10px 12px',
            },
            inputMultiline: {
                padding: 0,
            },
            colorSecondary: {
                [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                    borderColor: propertyInObj('main', lightModePalette.secondary),
                },
            },
            notchedOutline: {
                top: 0,
                borderColor: propertyInObj('outlinedEnabledBorder', lightModePalette.other),
            },
            adornedStart: {
                paddingLeft: 0,
            },
            adornedEnd: {
                paddingRight: 0,
            },
            multiline: {
                padding: '10px 12px',
                [`&.${outlinedInputClasses.sizeSmall}`]: {
                    padding: '8px 12px',
                },
            },
            sizeSmall: {
                input: {
                    padding: '8px 12px',
                },
            },
        },
    },
    MuiPaper: {
        defaultProps: {
            variant: 'outlined',
        },
        styleOverrides: {
            root: {
                borderRadius: '16px',
                border: `1.5px solid ${lightModePalette.text?.primary}`,
            },
        },
    },
    MuiTableCell: {
        variants: [
            {
                props: { variant: 'bordered' },
                style: {
                    border: `1px solid #1D29391A`,
                },
            },
        ],
        styleOverrides: {
            head: {
                padding: '12px',
                backgroundColor: '#ededed',
                borderTop: `1px solid ${lightModePalette.divider}`,
                borderBottom: `1px solid ${lightModePalette.divider}`,
                textTransform: 'uppercase',
                color: lightModePalette.text?.secondary,
                fontSize: '12px',
                '&:first-of-type': {
                    borderLeft: `1px solid #1D29391A`,
                },
                '& th': {
                    fontWeight: 600,
                },
                '&:last-of-type': {
                    borderRight: `1px solid #1D29391A`,
                },
            },
            root: {
                borderBottom: `1px solid ${lightModePalette.divider}`,
                padding: '14px 12px',
            },
        },
    },
    MuiTab: {
        styleOverrides: {
            root: {
                textTransform: 'capitalize',
            },
        },
    },
    MuiListItemButton: {
        styleOverrides: {
            root: {
                borderRadius: 12,
            },
        },
    },
    MuiListItemIcon: {
        styleOverrides: {
            root: {
                minWidth: 'unset',
                marginRight: 16,
            },
        },
    },
    MuiStepButton: {
        styleOverrides: {
            root: {
                padding: 8,
                margin: 0,
            },
        },
    },
    MuiCheckbox: {
        defaultProps: {
            color: 'primary',
            // icon: <CheckboxUncheckedIcon/>,
            // checkedIcon: <CheckboxCheckedIcon/>,
            // indeterminateIcon: <IndeterminateIcon/>
        },
    },
    MuiFormHelperText: {
        styleOverrides: {
            root: {
                margin: '2px 8px 0 0',
                fontSize: '12px',
            },
        },
    },
};
