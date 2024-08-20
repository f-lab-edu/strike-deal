/** @jsxImportSource @emotion/react */
import { createFileRoute } from '@tanstack/react-router';
import { Carousel, Card } from 'antd';
import { mainStyle } from '../styles/MainStyle';

export const Route = createFileRoute('/')({
    component: Main,
});

function Main() {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };
    return (
        <>
            {/* <div css={mainStyle.carousel}>
                <Card>
                    <Carousel afterChange={onChange}>
                        <div>Hello 1</div>
                        <div>Hello 2</div>
                        <div>Hello 3</div>
                        <div>Hello 4</div>
                    </Carousel>
                </Card>
            </div> */}
            <div css={mainStyle.content}>
                <div css={mainStyle.body}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
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
