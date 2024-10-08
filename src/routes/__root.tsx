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

const TopWrapper = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid rgb(238, 238, 238);
    height: 40px;
    background: rgb(255, 255, 255);
`;

const TopContents = styled.div`
    width: 1024px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const TopLoginButton = styled(Button)`
    font-size: 14px;
    color: grey;
    align-items: center;
    :hover {
        background: none;
    }
`;

function RootComponent() {
    return (
        <div css={mainStyle.wrapper}>
            <div css={mainStyle.content}>
                <Header />
            </div>
            <Outlet />
        </div>
    );
}
