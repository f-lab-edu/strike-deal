import React from 'react';
import { css } from '@emotion/react';
import { Button, Carousel, Divider, theme } from 'antd';
import { HeartFilled, EyeOutlined, HistoryOutlined } from '@ant-design/icons';
import { getBeautifiedNum } from '../../utils';
import type { ProductDetailType } from './types';

const productDetailWrapperStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: 1080,
    maxHeight: 600,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flex: '1 1 50%',
    gap: 20,
    padding: 16,
};

const productImgDetailStyle: React.CSSProperties = {
    width: '50%',
    maxWidth: 500,
    height: 400,
    alignContent: 'center',
    border: '0.3px solid #c4c4c4',
    borderRadius: 10,
    boxShadow: theme['boxShadow1'],
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
    .slick-dots-bottom {
        bottom: 0;
    }
`;

function ProductDetail(product: ProductDetailType) {
    return (
        <div style={productDetailWrapperStyle}>
            <div style={productImgDetailStyle}>
                <Carousel arrows draggable dots css={arrowButton}>
                    <div
                        style={{
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
                <h3>{product.title}</h3>
                <h2>{getBeautifiedNum(product.price)} 원</h2>
                <Divider style={{ margin: '0 0 12px 0' }} />
                <div
                    style={{
                        height: 20,
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 20,
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}
                >
                    <div style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
                        <HeartFilled />
                        <p>{product.likes}</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
                        <EyeOutlined />
                        <p>{product.count}</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
                        <HistoryOutlined />
                        <p>{product.createdDate}</p>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default ProductDetail;
