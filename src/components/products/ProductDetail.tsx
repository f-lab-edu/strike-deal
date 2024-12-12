import React from 'react';
import { Carousel, Divider } from 'antd';
import { HeartFilled, EyeOutlined, HistoryOutlined } from '@ant-design/icons';
import { getBeautifiedNum } from '../../utils/utils';
import { productStyle } from '../../styles/ProductStyle';
import type { ProductDetailType } from './types';

const {
    wrapper,
    productCard,
    img,
    arrowButton,
    contentWrapper,
    statusWrapper,
    statusContent,
    divider,
    titleStyle,
    priceStyle,
} = productStyle;

const ProductDetail = ({ product }: { product: ProductDetailType }) => {
    const { title, price, like_user } = product;
    return (
        <div css={wrapper}>
            <div css={productCard}>
                <Carousel arrows draggable dots css={arrowButton}>
                    {product.product_img.map((url) => {
                        return (
                            <div key={product.id}>
                                <img src={url} css={img} />
                            </div>
                        );
                    })}
                </Carousel>
            </div>
            <div css={contentWrapper}>
                <span css={titleStyle}>{title}</span>
                <span css={priceStyle}>{getBeautifiedNum(price)} 원</span>
                <Divider css={divider} />
                <div css={statusWrapper}>
                    <div css={statusContent}>
                        <HeartFilled />
                        <p>{like_user}</p>
                    </div>
                    <div css={statusContent}>
                        <EyeOutlined />
                        <p>{product.count}</p>
                    </div>
                    <div css={statusContent}>
                        <HistoryOutlined />
                        <p>{product.created_at}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
