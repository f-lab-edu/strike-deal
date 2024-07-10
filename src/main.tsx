import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyleProvider } from '@ant-design/cssinjs';
import App from './App.tsx';
import GlobalStyle from './styles/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <StyleProvider layer>
            <GlobalStyle />
            <App />
        </StyleProvider>
    </React.StrictMode>
);
