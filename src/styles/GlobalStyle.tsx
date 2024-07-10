import React from 'react';
import { Global, css } from '@emotion/react';

const baseStyle = css`
    body {
        height: 100%;
        width: 100%;
        overflow: hidden;
    }
`;

const GlobalStyle = () => <Global styles={baseStyle} />;

export default GlobalStyle;
