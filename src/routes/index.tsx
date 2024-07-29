/** @jsxImportSource @emotion/react */
import { createFileRoute } from '@tanstack/react-router';
import { Header } from '../layout';
import { mainStyle } from '../styles/MainStyle';

export const Route = createFileRoute('/')({
    component: Main,
});

function Main() {
    return (
        <div css={mainStyle.wrapper}>
            <div css={mainStyle.content}>
                <Header />
            </div>
        </div>
    );
}
