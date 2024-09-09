import React from 'react';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { QueryClient } from '@tanstack/react-query';
import { Button } from 'antd';
import { Header } from '../layout';
import { mainStyle } from '../styles/MainStyle';
import styled from '@emotion/styled';

export const Route = createRootRouteWithContext<{
    queryClient: QueryClient;
}>()({
    component: RootComponent,
});

// const TopLoginButton = styled(Button)`
//     font-size: 14px;
//     color: grey;
//     align-items: center;
//     :hover {
//         background: none;
//     }
// `;

function RootComponent() {
    return (
        <div css={mainStyle.wrapper}>
            <div css={mainStyle.content}>
                <Header />
            </div>
            <div css={mainStyle.body}>
                <Outlet />
            </div>
        </div>
    );
}
