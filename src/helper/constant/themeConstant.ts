import { alpha, Components, darken, outlinedInputClasses } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';

export const themeProperties = {
    primaryColor: '#346FEF',
    secondaryColor: '#924CFF',
    errorColor: '#EC131F',
    warningColor: '#F79009',
    infoColor: '#00BEC5',
    successColor: '#008951',
};

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

const fontConstant = ['Inter', 'sans-serif'].join(',');

export const lightModePalette = {
    mode: 'light' as const,
    common: {
        black: '#000000',
        white: '#FFFFFF',
    },
    background: {
        paper: '#FFFFFF',
        default: '#F9FAFB',
        paperElevation0: '#F5F5F6',
    },
    text: {
        primary: '#1D2939',
        secondary: '#475467',
        tertiary: '#757F8E',
        light: '#F2F4F7',
        contrastText: '#FFFFFF',
        state: {
            selected: '#54637633',
        },
    },
    primary: {
        main: primaryColor,
        dark: darken(primaryColor, opacityFocus),
        light: alpha(primaryColor, opacityHover),
        contrastText: '#FFFFFF',
        state: {
            selected: '#004ABB33',
        },
    },
    secondary: {
        main: secondaryColor,
        dark: darken(secondaryColor, opacityFocus),
        light: alpha(secondaryColor, opacityHover),
        contrastText: '#FFFFFF',
        state: {
            selected: '#5D00C233',
        },
    },
    warning: {
        main: warningColor,
        dark: darken(warningColor, opacityFocus),
        light: alpha(warningColor, opacityHover),
        contrastText: '#FFFFFF',
        state: {
            selected: '#A83F0F33',
        },
    },
    error: {
        main: errorColor,
        dark: darken(errorColor, opacityFocus),
        light: alpha(errorColor, opacityHover),
        contrastText: '#FFFFFF',
        state: {
            selected: '#A9000F33',
        },
    },
    info: {
        main: infoColor,
        dark: darken(infoColor, opacityFocus),
        light: alpha(infoColor, opacityHover),
        contrastText: '#FFFFFF',
        state: {
            selected: '#00969C33',
        },
    },
    success: {
        main: successColor,
        dark: darken(successColor, opacityFocus),
        light: alpha(successColor, opacityHover),
        contrastText: '#FFFFFF',
        state: {
            selected: '#005F3733',
        },
    },
    inheritWhite: {
        main: '#ffffff',
        light: '#FFFFFF79',
        contrastText: '#f1f1f1',
        state: {
            selected: '#ffffff33',
        },
    },
    grey: {
        50: '#FAFAFA',
        100: '#f3f3f3',
    },
    divider: '#1D29391A',
    tonalOffset: 0.5,
    other: {
        outlinedBorder: 'rgba(148, 157, 178, 0.12)',
        outlinedBorderDarker: 'rgba(148, 157, 178, 0.24)',
        dividerFillColor: 'rgba(148, 157, 178, 0.12)',
        inputOutlinedHoverBorder: '#757F8E',
        inputOutlinedEnabledBorder: 'rgba(29, 41, 57, 0.12)',
        ratingActiveFill: '#FFB400',
    },
    action: {
        active: '#949DB2',
        actionHover: 'rgba(98, 88, 255, 0.06)',
        hover: 'rgba(29, 41, 57, 0.04)',
        hoverOpacity: 0.05,
        selected: 'rgba(29, 41, 57, 0.08)',
        selectedOpacity: 0.08,
        disabled: '#1D29391F',
        disabledBackground: 'rgba(3, 6, 11, 0.12)',
        disabledOpacity: 0.38,
        focus: 'rgba(28, 15, 19, 0.12)',
        focusOpacity: 0.12,
        activatedOpacity: 0.12,
    },
};

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
        fontWeight: 300,
        fontSize: '96px',
        lineHeight: '112px',
        letterSpacing: '-1.5px',
    },
    h2: {
        fontFamily: fontConstant,
        fontWeight: 300,
        fontSize: '60px',
        lineHeight: '120%', //72px
        letterSpacing: '-0.5px',
    },
    h3: {
        fontFamily: fontConstant,
        fontWeight: 400,
        fontSize: '48px',
        lineHeight: '116.7%', //56.016px
        letterSpacing: '0',
    },
    h4: {
        fontFamily: fontConstant,
        fontWeight: 400,
        fontSize: '34px',
        lineHeight: '123.5%', //41.99px
        letterSpacing: '-1.25px',
    },
    h5: {
        fontFamily: fontConstant,
        fontWeight: 600,
        fontSize: '24px',
        lineHeight: '30px', //125%
        letterSpacing: '-0.85px',
    },
    h6: {
        fontFamily: fontConstant,
        fontWeight: 600,
        fontSize: '20px',
        lineHeight: '28px', //140%
        letterSpacing: '-0.5px',
    },
    subtitle1: {
        fontFamily: fontConstant,
        fontWeight: 500,
        fontSize: '18px',
        lineHeight: '26px', //144.44%
        letterSpacing: '-0.35px',
    },
    subtitle2: {
        fontFamily: fontConstant,
        fontWeight: 500,
        fontSize: '15px',
        lineHeight: '18px' /* 120% */,
        letterSpacing: '-0.35px',
    },
    body1: {
        fontFamily: fontConstant,
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '150%' /* 24px */,
        letterSpacing: '-0.25px',
    },
    body2: {
        fontFamily: fontConstant,
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '20px' /* 142.857% */,
        letterSpacing: '-0.15px',
    },
    button: {
        fontFamily: fontConstant,
        fontWeight: 600,
        fontSize: '14px',
        lineHeight: '24px' /* 171.429% */,
        letterSpacing: '-0.2px',
        textTransform: 'capitalize',
    },
    caption: {
        fontFamily: fontConstant,
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '18px' /* 150% */,
        letterSpacing: '-0.15px',
    },
    overline: {
        fontFamily: fontConstant,
        fontWeight: 500,
        fontSize: '11px',
        lineHeight: '12px' /* 109.091% */,
        letterSpacing: '0.75px',
        textTransform: 'uppercase',
    },
};

export const ElementProps: Components = {
    MuiButton: {
        defaultProps: {
            variant: 'contained',
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
                borderRadius: '8px',
            },
            sizeLarge: {
                padding: '8px 16px',
            },
            sizeMedium: {
                padding: '6px 12px',
            },
            sizeSmall: {
                padding: '4px 8px',
            },
            text: {
                '&:hover': {
                    backgroundColor: 'transparent',
                },
            },
            containedInherit: {
                backgroundColor: lightModePalette.text.secondary,
                color: lightModePalette.secondary.contrastText,
                '&:hover': {
                    backgroundColor: lightModePalette.text.primary,
                },
            },
            containedInheritWhite: {
                backgroundColor: lightModePalette.text.contrastText,
                color: lightModePalette.text.primary,
                '&:hover': {
                    backgroundColor: lightModePalette.text.contrastText,
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
            tonalInheritWhite: {
                backgroundColor: alpha(lightModePalette.inheritWhite.main, opacityFocus),
                color: lightModePalette.text.contrastText,
                '&:hover': {
                    backgroundColor: lightModePalette.text.light,
                },
            },
            tonal: {
                '&.Mui-disabled': {
                    backgroundColor: lightModePalette.action.disabled,
                },
                '& .MuiLoadingButton-loadingIndicator': {
                    left: '12px',
                },
            },
            noPadding: {
                '&:hover': { backgroundColor: 'transparent' },
                '&.Mui-disabled': {
                    color: lightModePalette.action.disabled,
                },
                '& .MuiLoadingButton-loadingIndicator': {
                    left: '2px',
                },
            },
            noPaddingPrimary: {
                color: lightModePalette.primary.main,
                '&:hover': {
                    color: lightModePalette.primary.dark,
                },
            },
            noPaddingSecondary: {
                color: lightModePalette.secondary.main,
                '&:hover': {
                    color: lightModePalette.secondary.dark,
                },
            },
            noPaddingError: {
                color: lightModePalette.error.main,
                '&:hover': {
                    color: lightModePalette.error.dark,
                },
            },
            noPaddingWarning: {
                color: lightModePalette.warning.main,
                '&:hover': {
                    color: lightModePalette.warning.dark,
                },
            },
            noPaddingInfo: {
                color: lightModePalette.info.main,
                '&:hover': {
                    color: lightModePalette.info.dark,
                },
            },
            noPaddingSuccess: {
                color: lightModePalette.success.main,
                '&:hover': {
                    color: lightModePalette.success.dark,
                },
            },
            noPaddingInherit: {
                color: lightModePalette.text.secondary,
                '&:hover': {
                    color: lightModePalette.text.primary,
                },
            },
            noPaddingInheritWhite: {
                color: lightModePalette.text.contrastText,
                '&:hover': {
                    color: lightModePalette.text.light,
                },
            },
        },
    },
    MuiChip: {
        variants: [
            {
                props: { size: 'xSmall' },
                style: {
                    height: 28,
                    fontSize: 11,
                },
            },

            {
                props: { variant: 'tonal' },
                style: {},
            },
        ],

        styleOverrides: {
            root: {
                '&:active': {
                    boxShadow: 'unset',
                },
                fontWeight: 500,
            },

            // Tonal
            tonalDefault: {
                backgroundColor: lightModePalette.text.light,
            },
            tonalPrimary: {
                backgroundColor: lightModePalette.primary.light,
                color: lightModePalette.primary.dark,
                '&:hover': {
                    backgroundColor: lightModePalette.primary.light,
                },
            },
            tonalSecondary: {
                backgroundColor: lightModePalette.secondary.light,
                color: lightModePalette.secondary.dark,
                '&:hover': {
                    backgroundColor: lightModePalette.secondary.light,
                },
            },
            tonalError: {
                backgroundColor: lightModePalette.error.light,
                color: lightModePalette.error.dark,
                '&:hover': {
                    backgroundColor: lightModePalette.error.light,
                },
            },
            tonalWarning: {
                backgroundColor: lightModePalette.warning.light,
                color: lightModePalette.warning.dark,
                '&:hover': {
                    backgroundColor: lightModePalette.warning.light,
                },
            },
            tonalInfo: {
                backgroundColor: lightModePalette.info.light,
                color: lightModePalette.info.dark,
                '&:hover': {
                    backgroundColor: lightModePalette.info.light,
                },
            },
            tonalSuccess: {
                backgroundColor: lightModePalette.success.light,
                color: lightModePalette.success.dark,
                '&:hover': {
                    backgroundColor: lightModePalette.success.light,
                },
            },

            // Tonal Delete Icon
            deleteIconTonalColorPrimary: {
                fill: alpha(lightModePalette.primary.dark, 0.7),
            },
            deleteIconTonalColorSecondary: {
                fill: alpha(lightModePalette.secondary.dark, 0.7),
            },
            deleteIconTonalColorError: {
                fill: alpha(lightModePalette.error.dark, 0.7),
            },
            deleteIconTonalColorWarning: {
                fill: alpha(lightModePalette.warning.dark, 0.7),
            },
            deleteIconTonalColorInfo: {
                fill: alpha(lightModePalette.info.dark, 0.7),
            },
            deleteIconTonalColorSuccess: {
                fill: alpha(lightModePalette.success.dark, 0.7),
            },

            // Avatar Color
            avatarColorDefault: {
                color: lightModePalette.common.white,
            },
            avatarColorError: {
                backgroundColor: lightModePalette.error.dark,
                color: lightModePalette.common.white,
            },
            avatarColorWarning: {
                backgroundColor: lightModePalette.warning.dark,
                color: lightModePalette.common.white,
            },
            avatarColorInfo: {
                backgroundColor: lightModePalette.info.dark,
                color: lightModePalette.common.white,
            },
            avatarColorSuccess: {
                backgroundColor: lightModePalette.success.dark,
                color: lightModePalette.common.white,
            },

            // Code for default chip
            filledDefault: {
                backgroundColor: lightModePalette.action.selected,
                '&:hover': {
                    backgroundColor: lightModePalette.other.inputOutlinedEnabledBorder,
                },
                '&:active': {
                    backgroundColor: 'transparent',
                },
            },

            colorDefault: {
                color: lightModePalette.text.secondary,
            },

            // Global Code for small chip
            sizeSmall: {
                height: 30,
            },
            avatarSmall: {
                height: 22,
                width: 22,
                marginLeft: '5px',
            },

            // Global Code for xSmall chip
            avatarXSmall: {
                height: 20,
                width: 20,
                marginLeft: '4px',
            },
            deleteIconXSmall: {
                width: 16,
            },
        },
    },

    MuiRadio: {
        defaultProps: {
            color: 'default',
        },
        variants: [
            {
                props: { size: 'large' },
                style: {},
            },
        ],
        styleOverrides: {
            root: {
                '& .MuiSvgIcon-fontSizeLarge': {
                    fontSize: '28px',
                },
            },
        },
    },

    MuiLoadingButton: {
        defaultProps: {
            variant: 'contained',
            disableElevation: true,
        },
    },

    MuiIconButton: {
        variants: [
            {
                props: { variant: 'rounded' },
                style: {
                    borderRadius: '8px',
                },
            },
            {
                props: { variant: 'outlined' },
                style: {
                    border: `1px solid ${lightModePalette.action.selected}`,
                },
            },
            {
                props: { variant: 'roundedBorder' },
                style: {
                    borderRadius: '8px',
                    border: `1px solid ${lightModePalette.action.selected}`,
                },
            },
            {
                props: { variant: 'outlined', color: 'primary' },
                style: {
                    border: `1px solid ${lightModePalette.primary.state.selected}`,
                    '&:hover': {
                        border: `1px solid ${lightModePalette.primary.state.selected}`,
                    },
                    '&:focus': {
                        border: `1px solid ${lightModePalette.primary.state.selected}`,
                    },
                },
            },
            {
                props: { variant: 'outlined', color: 'secondary' },
                style: {
                    border: `1px solid ${lightModePalette.secondary.state.selected}`,
                    '&:hover': {
                        border: `1px solid ${lightModePalette.secondary.state.selected}`,
                    },
                    '&:focus': {
                        border: `1px solid ${lightModePalette.secondary.state.selected}`,
                    },
                },
            },
            {
                props: { variant: 'outlined', color: 'error' },
                style: {
                    border: `1px solid ${lightModePalette.error.state.selected}`,
                    '&:hover': {
                        border: `1px solid ${lightModePalette.error.state.selected}`,
                    },
                    '&:focus': {
                        border: `1px solid ${lightModePalette.error.state.selected}`,
                    },
                },
            },
            {
                props: { variant: 'outlined', color: 'warning' },
                style: {
                    border: `1px solid ${lightModePalette.warning.state.selected}`,
                    '&:hover': {
                        border: `1px solid ${lightModePalette.warning.state.selected}`,
                    },
                    '&:focus': {
                        border: `1px solid ${lightModePalette.warning.state.selected}`,
                    },
                },
            },
            {
                props: { variant: 'outlined', color: 'info' },
                style: {
                    border: `1px solid ${lightModePalette.info.state.selected}`,
                    '&:hover': {
                        border: `1px solid ${lightModePalette.info.state.selected}`,
                    },
                    '&:focus': {
                        border: `1px solid ${lightModePalette.info.state.selected}`,
                    },
                },
            },
            {
                props: { variant: 'outlined', color: 'success' },
                style: {
                    border: `1px solid ${lightModePalette.success.state.selected}`,
                    '&:hover': {
                        border: `1px solid ${lightModePalette.success.state.selected}`,
                    },
                    '&:focus': {
                        border: `1px solid ${lightModePalette.success.state.selected}`,
                    },
                },
            },
            {
                props: { variant: 'outlined', color: 'inherit' },
                style: {
                    border: `1px solid ${lightModePalette.text.state.selected}`,
                    '&:hover': {
                        border: `1px solid ${lightModePalette.text.state.selected}`,
                    },
                    '&:focus': {
                        border: `1px solid ${lightModePalette.text.state.selected}`,
                    },
                },
            },
            {
                props: { variant: 'outlined', color: 'inheritWhite' },
                style: {
                    border: `1px solid ${lightModePalette.inheritWhite.state.selected}`,
                    '&:hover': {
                        border: `1px solid ${lightModePalette.inheritWhite.state.selected}`,
                    },
                    '&:focus': {
                        border: `1px solid ${lightModePalette.inheritWhite.state.selected}`,
                    },
                },
            },
            {
                props: { variant: 'roundedBorder', color: 'primary' },
                style: {
                    border: `1px solid ${lightModePalette.primary.state.selected}`,
                    '&:hover': {
                        border: `1px solid ${lightModePalette.primary.state.selected}`,
                    },
                    '&:focus': {
                        border: `1px solid ${lightModePalette.primary.state.selected}`,
                    },
                },
            },
            {
                props: { variant: 'roundedBorder', color: 'secondary' },
                style: {
                    border: `1px solid ${lightModePalette.secondary.state.selected}`,
                    '&:hover': {
                        border: `1px solid ${lightModePalette.secondary.state.selected}`,
                    },
                    '&:focus': {
                        border: `1px solid ${lightModePalette.secondary.state.selected}`,
                    },
                },
            },
            {
                props: { variant: 'roundedBorder', color: 'error' },
                style: {
                    border: `1px solid ${lightModePalette.error.state.selected}`,
                    '&:hover': {
                        border: `1px solid ${lightModePalette.error.state.selected}`,
                    },
                    '&:focus': {
                        border: `1px solid ${lightModePalette.error.state.selected}`,
                    },
                },
            },
            {
                props: { variant: 'roundedBorder', color: 'warning' },
                style: {
                    border: `1px solid ${lightModePalette.warning.state.selected}`,
                    '&:hover': {
                        border: `1px solid ${lightModePalette.warning.state.selected}`,
                    },
                    '&:focus': {
                        border: `1px solid ${lightModePalette.warning.state.selected}`,
                    },
                },
            },
            {
                props: { variant: 'roundedBorder', color: 'info' },
                style: {
                    border: `1px solid ${lightModePalette.info.state.selected}`,
                    '&:hover': {
                        border: `1px solid ${lightModePalette.info.state.selected}`,
                    },
                    '&:focus': {
                        border: `1px solid ${lightModePalette.info.state.selected}`,
                    },
                },
            },
            {
                props: { variant: 'roundedBorder', color: 'success' },
                style: {
                    border: `1px solid ${lightModePalette.success.state.selected}`,
                    '&:hover': {
                        border: `1px solid ${lightModePalette.success.state.selected}`,
                    },
                    '&:focus': {
                        border: `1px solid ${lightModePalette.success.state.selected}`,
                    },
                },
            },
            {
                props: { variant: 'roundedBorder', color: 'inherit' },
                style: {
                    border: `1px solid ${lightModePalette.text.state.selected}`,
                    '&:hover': {
                        border: `1px solid ${lightModePalette.text.state.selected}`,
                    },
                    '&:focus': {
                        border: `1px solid ${lightModePalette.text.state.selected}`,
                    },
                },
            },
            {
                props: { variant: 'roundedBorder', color: 'inheritWhite' },
                style: {
                    border: `1px solid ${lightModePalette.inheritWhite.state.selected}`,
                    '&:hover': {
                        border: `1px solid ${lightModePalette.inheritWhite.state.selected}`,
                    },
                    '&:focus': {
                        border: `1px solid ${lightModePalette.inheritWhite.state.selected}`,
                    },
                },
            },
        ],
        styleOverrides: {
            root: {
                '&:hover': {
                    backgroundColor: lightModePalette.action.hover,
                },
            },
            outlinedPrimary: {
                borderColor: lightModePalette.primary.main,
            },
            sizeLarge: {
                '& .MuiSvgIcon-root': {
                    fontSize: '36px',
                },
            },
            sizeSmall: {
                '& .MuiSvgIcon-root': {
                    fontSize: '20px',
                },
            },
            colorPrimary: {
                '&:hover': {
                    backgroundColor: alpha(lightModePalette.primary.main, lightModePalette.action.hoverOpacity),
                },
            },
            colorSecondary: {
                '&:hover': {
                    backgroundColor: alpha(lightModePalette.secondary.main, lightModePalette.action.hoverOpacity),
                },
            },
            colorError: {
                '&:hover': {
                    backgroundColor: alpha(lightModePalette.error.main, lightModePalette.action.hoverOpacity),
                },
            },
            colorWarning: {
                '&:hover': {
                    backgroundColor: alpha(lightModePalette.warning.main, lightModePalette.action.hoverOpacity),
                },
            },
            colorInfo: {
                '&:hover': {
                    backgroundColor: alpha(lightModePalette.info.main, lightModePalette.action.hoverOpacity),
                },
            },
            colorInherit: {
                '&:hover': {
                    backgroundColor: alpha(lightModePalette.text.primary, lightModePalette.action.hoverOpacity),
                },
            },
            colorInheritWhite: {
                '&:hover': {
                    backgroundColor: alpha(lightModePalette.inheritWhite.main, lightModePalette.action.hoverOpacity),
                },
            },
        },
    },
    MuiButtonGroup: {
        defaultProps: {
            variant: 'contained',
            disableElevation: true,
        },
        styleOverrides: {
            containedInheritWhite: {
                grouped: {
                    '&:not(:last-of-type)': {
                        borderColor: lightModePalette.text.primary,
                    },
                },
            },
        },
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
                    borderRight: `1px solid ${lightModePalette.other.inputOutlinedEnabledBorder}`,
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
                    borderLeft: `1px solid ${lightModePalette.other.inputOutlinedEnabledBorder}`,
                    padding: '8px 10px',
                },
                '&.MuiInputAdornment-sizeSmall': {
                    '& p': { padding: '6px 10px' },
                },
            },
        },
    },
    MuiTextField: {
        defaultProps: {
            hiddenLabel: true,
        },
        styleOverrides: {
            root: {
                borderRadius: '8px',
                '& label.Mui-focused': {
                    color: lightModePalette.text.secondary,
                },
                input: {
                    padding: '10px 13px',
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
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '16px',
                letterSpacing: '-0.15px',
                marginBottom: '8px',
                '&.Mui-error': {
                    '&.Mui-focused': {
                        color: lightModePalette.error.main,
                    },
                },
            },
            sizeSmall: {
                fontSize: '14px',
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
    MuiFilledInput: {
        defaultProps: {
            disableUnderline: true,
        },
        styleOverrides: {
            root: {
                borderRadius: '8px',
                '&.Mui-error': {
                    backgroundColor: alpha(lightModePalette.error.main, lightModePalette.action.hoverOpacity),
                    input: {
                        color: lightModePalette.error.main,
                    },
                },
            },
            input: {
                height: 'unset',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '20px',
                letterSpacing: '-0.25px',
            },
            adornedStart: {
                paddingLeft: 0,
            },
            adornedEnd: {
                paddingRight: 0,
            },
            sizeSmall: {
                input: {
                    padding: '8px 13px',
                },
            },
        },
    },
    MuiInput: {
        styleOverrides: {
            root: {
                borderRadius: '8px',
                '&:before': {
                    borderColor: lightModePalette.other.inputOutlinedEnabledBorder,
                },
                '&:hover:not(.Mui-disabled, .Mui-error):before': {
                    borderColor: lightModePalette.other.inputOutlinedHoverBorder,
                },
                '&.Mui-focused:after': {
                    borderColor: lightModePalette.primary.main,
                },
                '&.Mui-error': {
                    input: {
                        color: lightModePalette.error.main,
                    },
                    '&.Mui-focused:after': {
                        borderBottomColor: lightModePalette.error.main,
                    },
                },
            },
            input: {
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '20px',
                letterSpacing: '-0.25px',
            },
            underline: {
                marginTop: '0 !important',
            },
            adornedStart: {
                paddingLeft: 0,
            },
            adornedEnd: {
                paddingRight: 0,
            },
            sizeSmall: {
                input: {
                    padding: '8px 13px',
                },
            },
        },
    },
    MuiFormHelperText: {
        styleOverrides: {
            root: {
                color: lightModePalette.text.secondary,
                margin: '6px 14px 0 0',
                fontSize: '12px',
                fontWeight: 400,
            },
        },
    },
    MuiFormControl: {
        styleOverrides: {
            root: {
                '& label.Mui-focused': {
                    color: lightModePalette.text.secondary,
                },
            },
        },
    },
    MuiSelect: {
        styleOverrides: {
            select: {
                minWidth: 250,
            },
        },
    },
    MuiSwitch: {
        defaultProps: {
            color: 'default',
        },
        variants: [
            {
                props: { variant: 'filled', size: 'medium' },
                style: {
                    padding: 8,
                    '& .MuiSwitch-track': {
                        borderRadius: 22 / 2,
                        // opacity: 1,
                    },
                    '& .MuiSwitch-thumb': {
                        boxShadow: 'none',
                        width: 16,
                        height: 16,
                        margin: 2,
                    },
                    '& .MuiSwitch-switchBase': {
                        '&.Mui-checked': {
                            '& + .MuiSwitch-track': { opacity: 1 },
                            '& .MuiSwitch-thumb': {
                                backgroundColor: lightModePalette.common.white,
                            },
                        },
                    },
                },
            },
            {
                props: { variant: 'filled', size: 'small' },
                style: {
                    padding: 4,
                    '& .MuiSwitch-track': {
                        borderRadius: 16 / 2,
                    },
                    '& .MuiSwitch-thumb': {
                        boxShadow: 'none',
                        width: 12,
                        height: 12,
                        margin: 2,
                    },
                    '& .MuiSwitch-switchBase': {
                        '&.Mui-checked': {
                            '& + .MuiSwitch-track': { opacity: 1 },
                            '& .MuiSwitch-thumb': {
                                backgroundColor: lightModePalette.common.white,
                            },
                        },
                    },
                },
            },
            {
                props: { variant: 'withIcon', size: 'medium' },
                style: {
                    padding: 8,
                    '& .MuiSwitch-track': {
                        borderRadius: 22 / 2,
                        '&:before, &:after': {
                            content: '""',
                            position: 'absolute',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: 16,
                            height: 16,
                        },
                        '&:before': {
                            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="white" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
                            left: 12,
                        },
                        '&:after': {
                            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13"><path d="M7.19354 6.49937L10.7092 2.30875C10.7681 2.2391 10.7185 2.1333 10.6275 2.1333H9.55872C9.49578 2.1333 9.43551 2.16143 9.39399 2.20964L6.49444 5.66634L3.59488 2.20964C3.5547 2.16143 3.49444 2.1333 3.43015 2.1333H2.3614C2.27033 2.1333 2.22078 2.2391 2.2797 2.30875L5.79533 6.49937L2.2797 10.69C2.2665 10.7055 2.25803 10.7245 2.2553 10.7447C2.25257 10.7649 2.25569 10.7854 2.26429 10.8039C2.2729 10.8224 2.28662 10.838 2.30383 10.8489C2.32104 10.8598 2.34102 10.8656 2.3614 10.8654H3.43015C3.4931 10.8654 3.55336 10.8373 3.59488 10.7891L6.49444 7.33241L9.39399 10.7891C9.43417 10.8373 9.49444 10.8654 9.55872 10.8654H10.6275C10.7185 10.8654 10.7681 10.7596 10.7092 10.69L7.19354 6.49937Z" fill="white"/></svg>')`,
                            right: 12,
                            width: 13,
                            height: 13,
                        },
                    },
                    '& .MuiSwitch-thumb': {
                        boxShadow: 'none',
                        width: 16,
                        height: 16,
                        margin: 2,
                    },
                    '& .MuiSwitch-switchBase': {
                        '&.Mui-checked': {
                            '& + .MuiSwitch-track': { opacity: 1 },
                            '& .MuiSwitch-thumb': {
                                backgroundColor: lightModePalette.common.white,
                            },
                        },
                    },
                },
            },
            {
                props: { variant: 'withIcon', size: 'small' },
                style: {
                    padding: 4,
                    '& .MuiSwitch-track': {
                        borderRadius: 16 / 2,
                        '&:before, &:after': {
                            content: '""',
                            position: 'absolute',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: 12,
                            height: 12,
                        },
                        '&:before': {
                            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 24 24"><path fill="white" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
                            left: 7,
                        },
                        '&:after': {
                            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 16 16"><path d="M7.19354 6.49937L10.7092 2.30875C10.7681 2.2391 10.7185 2.1333 10.6275 2.1333H9.55872C9.49578 2.1333 9.43551 2.16143 9.39399 2.20964L6.49444 5.66634L3.59488 2.20964C3.5547 2.16143 3.49444 2.1333 3.43015 2.1333H2.3614C2.27033 2.1333 2.22078 2.2391 2.2797 2.30875L5.79533 6.49937L2.2797 10.69C2.2665 10.7055 2.25803 10.7245 2.2553 10.7447C2.25257 10.7649 2.25569 10.7854 2.26429 10.8039C2.2729 10.8224 2.28662 10.838 2.30383 10.8489C2.32104 10.8598 2.34102 10.8656 2.3614 10.8654H3.43015C3.4931 10.8654 3.55336 10.8373 3.59488 10.7891L6.49444 7.33241L9.39399 10.7891C9.43417 10.8373 9.49444 10.8654 9.55872 10.8654H10.6275C10.7185 10.8654 10.7681 10.7596 10.7092 10.69L7.19354 6.49937Z" fill="white"/></svg>')`,
                            right: 9,
                            width: 10,
                            height: 10,
                        },
                    },
                    '& .MuiSwitch-thumb': {
                        boxShadow: 'none',
                        width: 12,
                        height: 12,
                        margin: 2,
                    },
                    '& .MuiSwitch-switchBase': {
                        '&.Mui-checked': {
                            '& + .MuiSwitch-track': { opacity: 1 },
                            '& .MuiSwitch-thumb': {
                                backgroundColor: lightModePalette.common.white,
                            },
                        },
                    },
                },
            },
            {
                props: { variant: 'onOff', size: 'medium' },
                style: {
                    padding: 8,
                    width: 65,
                    '& .MuiSwitch-track': {
                        borderRadius: 22 / 2,
                        '&:before, &:after': {
                            position: 'absolute',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            fontSize: 12,
                            color: lightModePalette.text.light,
                        },
                        '&:after': {
                            content: '"OFF"',
                            right: 13,
                        },
                    },
                    '& .MuiSwitch-thumb': {
                        boxShadow: 'none',
                        width: 16,
                        height: 16,
                        margin: 2,
                    },
                    '& .MuiSwitch-switchBase': {
                        '&.Mui-checked': {
                            transform: 'translateX(27px)',
                            '& + .MuiSwitch-track': {
                                opacity: 1,
                                '&:before': {
                                    content: '"ON"',
                                    left: 14,
                                },
                                '&:after': {
                                    content: 'none',
                                },
                            },
                            '& .MuiSwitch-thumb': {
                                backgroundColor: lightModePalette.common.white,
                            },
                        },
                    },
                },
            },
            {
                props: { variant: 'onOff', size: 'small' },
                style: {
                    padding: 4,
                    width: 43,
                    '& .MuiSwitch-track': {
                        borderRadius: 16 / 2,
                        '&:before, &:after': {
                            position: 'absolute',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            fontSize: 9,
                            color: lightModePalette.text.light,
                        },
                        '&:after': {
                            content: '"OFF"',
                            right: 7,
                        },
                    },
                    '& .MuiSwitch-thumb': {
                        boxShadow: 'none',
                        width: 12,
                        height: 12,
                        margin: 2,
                    },
                    '& .MuiSwitch-switchBase': {
                        '&.Mui-checked': {
                            transform: 'translateX(19px)',
                            '& + .MuiSwitch-track': {
                                opacity: 1,
                                '&:before': {
                                    content: '"ON"',
                                    left: 8,
                                },
                                '&:after': {
                                    content: 'none',
                                },
                            },
                            '& .MuiSwitch-thumb': {
                                backgroundColor: lightModePalette.common.white,
                            },
                        },
                    },
                },
            },
        ],
        styleOverrides: {
            track: {
                backgroundColor: lightModePalette.text.primary,
            },
        },
    },
    MuiFormControlLabel: {
        styleOverrides: {
            label: {
                lineHeight: '24px',
                letterSpacing: '-0.25px',
            },
        },
    },
    MuiMenuItem: {
        styleOverrides: {
            root: {
                borderRadius: 6,
                '&:hover': {
                    backgroundColor: alpha(lightModePalette.primary.main, lightModePalette.action.selectedOpacity),
                },
                paddingInline: 12,
                fontSize: 14,
                '& .MuiListItemIcon-root': {
                    minWidth: 'unset',
                },
            },
        },
    },
    MuiListItemText: {
        styleOverrides: {
            root: {
                '& .MuiListItemText-primary': {
                    fontWeight: 500,
                    fontSize: 15,
                    lineHeight: '18px',
                    letterSpacing: '-0.35px',
                },
                '&.MuiListItemText-dense': {
                    '& .MuiListItemText-primary': {
                        fontWeight: 400,
                        fontSize: 14,
                    },
                },
            },
        },
    },
    MuiCheckbox: {
        defaultProps: {
            color: 'default',
            // icon: checkboxIcon,
            // checkedIcon: checkedIcon,
            // indeterminateIcon: checkedIcon,
        },
        variants: [
            {
                props: { size: 'large' },
                style: {
                    svg: {
                        width: '28px',
                        height: '28px',
                    },
                },
            },
            {
                props: { size: 'medium' },
                style: {
                    svg: {
                        width: '24px',
                        height: '24px',
                    },
                },
            },
            {
                props: { size: 'small' },
                style: {
                    svg: {
                        width: '16px',
                        height: '16px',
                    },
                },
            },
        ],
        styleOverrides: {
            root: {
                '& .MuiSvgIcon-fontSizeLarge': {
                    fontSize: '28px',
                },
                '&.Mui-disabled': {
                    '& svg path': {
                        fill: lightModePalette.action.disabled,
                    },
                },
            },
            colorPrimary: {
                '&.Mui-checked': {
                    '& svg path': {
                        fill: lightModePalette.primary.main,
                    },
                },
            },
            colorSecondary: {
                '&.Mui-checked': {
                    '& svg path': {
                        fill: lightModePalette.secondary.main,
                    },
                },
            },
            colorError: {
                '&.Mui-checked': {
                    '& svg path': {
                        fill: lightModePalette.error.main,
                    },
                },
            },
            colorInfo: {
                '&.Mui-checked': {
                    '& svg path': {
                        fill: lightModePalette.info.main,
                    },
                },
            },
            colorWarning: {
                '&.Mui-checked': {
                    '& svg path': {
                        fill: lightModePalette.warning.main,
                    },
                },
            },
            colorSuccess: {
                '&.Mui-checked': {
                    '& svg path': {
                        fill: lightModePalette.success.main,
                    },
                },
            },
        },
    },
    MuiList: {
        styleOverrides: {
            padding: {
                padding: '8px',
            },
            dense: {
                '& .MuiMenuItem-root': {
                    paddingInline: 16,
                },
                '& .MuiListItemIcon-root': {
                    marginRight: 8,
                },
            },
        },
    },
    MuiListItemIcon: {
        styleOverrides: {
            root: {
                minWidth: 'unset',
                marginRight: 16,
                color: lightModePalette.text.secondary,
            },
        },
    },
    MuiListItemButton: {
        styleOverrides: {
            root: {
                borderRadius: 8,
                '&.Mui-selected': {
                    '& .MuiListItemText-primary,& .MuiListItemIcon-root': {
                        color: lightModePalette.primary.main,
                    },
                },
            },
        },
    },
    MuiTooltip: {
        defaultProps: {
            arrow: true,
        },
        styleOverrides: {
            tooltip: {
                backgroundColor: lightModePalette.text.secondary,
            },
            arrow: {
                '&:before': {
                    backgroundColor: lightModePalette.text.secondary,
                },
            },
            popper: {
                "&[data-popper-placement*='right']": {
                    '& .MuiTooltip-arrow': {
                        '&:before': {
                            borderBottomLeftRadius: 2,
                        },
                    },
                },
                "&[data-popper-placement*='left']": {
                    '& .MuiTooltip-arrow': {
                        '&:before': {
                            borderTopRightRadius: 2,
                        },
                    },
                },
                "&[data-popper-placement*='top']": {
                    '& .MuiTooltip-arrow': {
                        '&:before': {
                            borderBottomRightRadius: 2,
                        },
                    },
                },
                "&[data-popper-placement*='bottom']": {
                    '& .MuiTooltip-arrow': {
                        '&:before': {
                            borderTopLeftRadius: 2,
                        },
                    },
                },
            },
        },
    },
    MuiBadge: {
        defaultProps: {
            outlined: 'large',
        },
        variants: [
            {
                props: { outlined: 'large' },
                style: {
                    '& .MuiBadge-badge': {
                        outline: `1px solid ${lightModePalette.background.paper}`,
                    },
                },
            },

            {
                props: { outlined: 'small' },
                style: {
                    '& .MuiBadge-badge': {
                        height: 6,
                        width: 6,
                        minWidth: 6,
                        outline: `1px solid ${lightModePalette.background.paper}`,
                    },
                },
            },
        ],
    },
    MuiAvatar: {
        defaultProps: {
            size: 'medium',
        },
        variants: [
            {
                props: { size: 'large' },
                style: {
                    height: 40,
                    width: 40,
                    fontSize: 20,
                },
            },
            {
                props: { size: 'medium' },
                style: {
                    height: 32,
                    width: 32,
                    fontSize: 20,
                },
            },
            {
                props: { size: 'small' },
                style: {
                    height: 24,
                    width: 24,
                    fontSize: 12,
                },
            },
        ],
    },
    MuiAvatarGroup: {
        defaultProps: {
            size: 'medium',
        },
        variants: [
            {
                props: { size: 'large' },
                style: {
                    '& .MuiAvatar-root': {
                        height: '36px',
                        width: '36px',
                        fontSize: 20,
                    },
                },
            },
            {
                props: { size: 'medium' },
                style: {
                    '& .MuiAvatar-root': {
                        height: '28px',
                        width: '28px',
                        fontSize: 20,
                    },
                },
            },
            {
                props: { size: 'small' },
                style: {
                    '& .MuiAvatar-root': {
                        height: '20px',
                        width: '20px',
                        fontSize: 12,
                    },
                },
            },
        ],
    },
    MuiRating: {
        styleOverrides: {
            root: {
                color: lightModePalette.other.ratingActiveFill,
            },
        },
    },
    MuiPaginationItem: {
        styleOverrides: {
            rounded: {
                '&.MuiPaginationItem-previousNext': {
                    backgroundColor: lightModePalette.background.paperElevation0,
                },
                '&.MuiPaginationItem-firstLast': {
                    backgroundColor: lightModePalette.background.paperElevation0,
                },
            },
        },
    },
    MuiFormLabel: {
        styleOverrides: {
            asterisk: {
                color: lightModePalette.error.main,
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
    // MuiTableCell: {
    //     styleOverrides: {
    //         head: {
    //             backgroundColor: lightModePalette.grey[100],
    //             color: lightModePalette.text.primary,
    //             fontSize: 16,
    //             fontWeight: 600,
    //             whiteSpace: 'nowrap',

    //             '&:first-of-type': {
    //                 borderTopLeftRadius: '8px', // Change to your desired border radius
    //             },
    //             '&:last-of-type': {
    //                 borderTopRightRadius: '8px',
    //             },
    //         },
    //     },
    // },
    // MuiTableBody: {
    //     styleOverrides: {
    //         root: {
    //             '& .MuiTableRow-root:last-child .MuiTableCell-root': {
    //                 borderBottom: `1px solid ${lightModePalette.other.outlinedBorderDarker}`,
    //             },
    //         },
    //     },
    // },
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
