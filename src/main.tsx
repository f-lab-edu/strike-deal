import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { StyleProvider } from '@ant-design/cssinjs';
import { ThemeProvider } from '@emotion/react';
import { routeTree } from './routeTree.gen';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

const queryClient = new QueryClient();

const router = createRouter({
    routeTree,
    context: {
        queryClient,
    },
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0,
});

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

ReactDOM.createRoot(document.getElementById('app')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <StyleProvider layer>
                <GlobalStyle />
                <QueryClientProvider client={queryClient}>
                    <RouterProvider router={router} />
                </QueryClientProvider>
            </StyleProvider>
        </ThemeProvider>
    </React.StrictMode>
);
