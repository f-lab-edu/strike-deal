/** @jsxImportSource @emotion/react */
import { createFileRoute } from '@tanstack/react-router';
import { mainStyle } from '../styles/MainStyle';

export const Route = createFileRoute('/')({
    component: Main,
});

function Main() {
    return (
        <>
            <div css={mainStyle.content}>
                <div css={mainStyle.body}>
                    <div css={mainStyle.catecories}>
                        <div>Categories</div>
                        <div>Browse By Category</div>
                        <div css={mainStyle.categoryBox}>
                            <div>Phones</div>
                            <div>Computers</div>
                            <div>SmartWatch</div>
                            <div>Camera</div>
                            <div>HeadPhones</div>
                            <div>Gaming</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
