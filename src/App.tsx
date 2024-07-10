import React from 'react';
import styled from '@emotion/styled';

import { Button } from 'antd';

const MyButton = styled(Button)`
    font-size: 18px;
    color: red;
`;

function App() {
    return (
        <>
            <div>Hello</div>
            <MyButton>button</MyButton>
        </>
    );
}

export default App;
