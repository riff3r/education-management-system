import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { ElementProps, lightModePalette, typographyProperties } from './helper/themeConstant.ts';
import store from './state/store.ts';

const theme = createTheme({
    palette: lightModePalette,
    typography: typographyProperties,
    components: ElementProps,
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Provider>
    </StrictMode>
);
