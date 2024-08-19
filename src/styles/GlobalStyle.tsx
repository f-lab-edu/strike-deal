import React from 'react';
import { Global, css } from '@emotion/react';

const baseStyle = css`
    body {
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
    html,
    body,
    #app {
        width: 100%;
        height: 100%;
    }
`;

const GlobalStyle = () => <Global styles={baseStyle} />;

export default GlobalStyle;
