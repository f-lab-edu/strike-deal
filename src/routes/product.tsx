import React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { ProductDetail } from '../components';
import { Button, Carousel } from 'antd';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Route = createFileRoute('/product')({
    component: Product,
});

const productDetailWrapperStyle: React.CSSProperties = {
    width: '100%',
    maxHeight: 600,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flex: '1 1 50%',
};

const productImgDetailStyle: React.CSSProperties = {
    width: '50%',
    height: 400,
    alignContent: 'center',
    verticalAlign: 'middle',
};

const imgStyle: React.CSSProperties = {
    width: 300,
    height: 300,
    margin: '0 auto',
};

const arrowButton = css`
    .slick-arrow {
        color: grey;
    }
    .slick-dots {
        button {
            background-color: grey;
        }
    }
`;

function Product() {
    return (
        <div style={productDetailWrapperStyle}>
            <div style={productImgDetailStyle}>
                <Carousel arrows dots css={arrowButton}>
                    <div
                        style={{
                            overflow: 'hidden',
                            width: '50%',
                            maxWidth: 400,
                            alignContent: 'center',
                        }}
                    >
                        <img
                            src="https://shop-phinf.pstatic.net/20240829_248/1724899383166NaSpA_JPEG/4901609597450718_76377642.jpg?type=m510"
                            style={imgStyle}
                        />
                    </div>
                    <div>
                        <img
                            src="https://shop-phinf.pstatic.net/20240829_248/1724899383166NaSpA_JPEG/4901609597450718_76377642.jpg?type=m510"
                            style={imgStyle}
                        />
                    </div>
                </Carousel>
            </div>
            <div style={{ width: '50%' }}>
                <h1>상세설명</h1>
            </div>
        </div>
    );
}
