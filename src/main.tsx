import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.tsx';
import ThemeWrapper from './common/GlobalWrapper/ThemeWrapper.tsx';
import './index.css';
import store from './state/store.ts';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <ThemeWrapper>
                <App />
            </ThemeWrapper>
        </Provider>
    </StrictMode>
);
