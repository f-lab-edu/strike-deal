import React from 'react';
import { Link } from '@tanstack/react-router';
import { Card } from 'antd';
import { mainStyle } from '../../styles/MainStyle';
import type { TodayRegProductType } from './types';

const { Meta } = Card;

const TodayRegProductCard = React.memo(({ product }: { product: TodayRegProductType }) => {
    const { title, product_img, description } = product;

    return (
        <Link
            to="/products/$productId"
            params={{
                productId: product.id,
            }}
        >
            <Card
                hoverable
                css={mainStyle.productCard}
                cover={<img alt="product_img" src={product_img[0]} />}
            >
                <Meta title={title} description={description} />
            </Card>
        </Link>
    );
});

export default TodayRegProductCard;
