/** @jsxImportSource @emotion/react */
import React from 'react';
import { Card } from 'antd';
import type { TodayRegProductType } from './MainPageTypes';
import { mainStyle } from '../../styles/MainStyle';

const { Meta } = Card;

function TodayRegProductCard({ product }: { product: TodayRegProductType }) {
    const { title, img, price, description } = product;
    return (
        <Card hoverable css={mainStyle.productCard} cover={<img alt="product_img" src={img} />}>
            <Meta title={title} description={description} />
        </Card>
    );
}

export default TodayRegProductCard;
