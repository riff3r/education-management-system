import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { ElementProps, lightModePalette, myBreakpoints, typographyProperties } from '../../helper/constant/themeConstant';

interface Props {
    children: React.ReactNode;
}

const ThemeWrapper: React.FC<Props> = ({ children }) => {
    const theme = React.useMemo(
        () =>
            createTheme({
                palette: lightModePalette,
                typography: typographyProperties,
                breakpoints: myBreakpoints,
                components: ElementProps,
            }),
        []
    );

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;
