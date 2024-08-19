/** @jsxImportSource @emotion/react */
import { createFileRoute } from '@tanstack/react-router';
import { Carousel } from 'antd';
import { Header } from '../layout';
import { mainStyle } from '../styles/MainStyle';

export const Route = createFileRoute('/')({
    component: Main,
});

const contentStyle: React.CSSProperties = {
    // width: '75%',
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

function Main() {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };
    return (
        <div css={mainStyle.wrapper}>
            <div css={mainStyle.content}>
                <Header />
            </div>
            <Carousel afterChange={onChange} dots>
                <div style={{ width: '80%' }}>
                    <h3 style={contentStyle}>Hello 1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>Hello 2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>Hello 3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>Hello 4</h3>
                </div>
            </Carousel>
            <div css={mainStyle.body}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div
                        style={{
                            color: '#DB4444',
                            fontSize: 16,
                            fontFamily: 'Poppins',
                            fontWeight: '600',
                            wordWrap: 'break-word',
                        }}
                    >
                        Categories
                    </div>
                    <div
                        style={{
                            color: 'black',
                            fontSize: 24,
                            fontWeight: '600',
                            letterSpacing: 1.44,
                            wordWrap: 'break-word',
                        }}
                    >
                        Browse By Category
                    </div>
                    <div css={mainStyle.categoryBox}>
                        <div css={mainStyle.category}>
                            <div
                                style={{
                                    color: 'black',
                                    fontSize: 16,
                                    fontWeight: '400',
                                    wordWrap: 'break-word',
                                }}
                            >
                                Phones
                            </div>
                        </div>
                        <div css={mainStyle.category}>
                            <div
                                style={{
                                    color: 'black',
                                    fontSize: 16,
                                    fontWeight: '400',
                                    wordWrap: 'break-word',
                                }}
                            >
                                Computers
                            </div>
                        </div>
                        <div css={mainStyle.category}>
                            <div
                                style={{
                                    color: 'black',
                                    fontSize: 16,
                                    fontWeight: '400',
                                    wordWrap: 'break-word',
                                }}
                            >
                                SmartWatch
                            </div>
                        </div>
                        <div css={mainStyle.category}>
                            <div
                                style={{
                                    color: 'black',
                                    fontSize: 16,
                                    fontWeight: '400',
                                    wordWrap: 'break-word',
                                }}
                            >
                                Camera
                            </div>
                        </div>
                        <div css={mainStyle.category}>
                            <div
                                style={{
                                    color: 'black',
                                    fontSize: 16,
                                    fontWeight: '400',
                                    wordWrap: 'break-word',
                                }}
                            >
                                HeadPhones
                            </div>
                        </div>
                        <div css={mainStyle.category}>
                            <div
                                style={{
                                    color: 'black',
                                    fontSize: 16,
                                    fontWeight: '400',
                                    wordWrap: 'break-word',
                                }}
                            >
                                Gaming
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
