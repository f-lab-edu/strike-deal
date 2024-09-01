import React from 'react';
import { Card } from 'antd';
import { mainStyle } from '../../styles/MainStyle';
import type { TodayRegProductType } from './types';

const { Meta } = Card;

function TodayRegProductCard({ product }: { product: TodayRegProductType }) {
    const { title, img, description } = product;
    return (
        <Card hoverable css={mainStyle.productCard} cover={<img alt="product_img" src={img} />}>
            <Meta title={title} description={description} />
        </Card>
    );
}

export default TodayRegProductCard;
