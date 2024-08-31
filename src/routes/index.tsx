/** @jsxImportSource @emotion/react */
import { createFileRoute } from '@tanstack/react-router';
import { Flex } from 'antd';
import { TodayRegProductCard } from '../components';
import { mainStyle } from '../styles/MainStyle';
import type { TodayRegProductType } from '../components';

export const Route = createFileRoute('/')({
    component: Main,
});

const productsList: TodayRegProductType[] = [
    {
        id: 'product_00001',
        createdDate: '2024-08-31',
        title: '윌슨 투수 글러브 팝니다.',
        description: '회전근개 파열로 투수 관둡니다.',
        img: 'https://www.yagooshop.com/shop/data/goods/1724833446916m0.jpg',
        price: '200,000',
        seller: {
            id: 'user_00001',
            name: '김투수',
        },
        category: 'gloves',
        productInfo: {
            brand: '윌슨',
            color: 'white',
            size: '11.5',
            hand: 'right',
        },
    },
    {
        id: 'product_00002',
        createdDate: '2024-08-31',
        title: '윌슨 투수 글러브 팝니다.',
        description: '회전근개 파열로 투수 관둡니다.',
        img: 'https://www.yagooshop.com/shop/data/goods/1724833446916m0.jpg',
        price: '200,000',
        seller: {
            id: 'user_00001',
            name: '김투수',
        },
        category: 'gloves',
        productInfo: {
            brand: '윌슨',
            color: 'white',
            size: '11.5',
            hand: 'right',
        },
    },
    {
        id: 'product_00003',
        createdDate: '2024-08-31',
        title: '윌슨 투수 글러브 팝니다.',
        description: '회전근개 파열로 투수 관둡니다.',
        img: 'https://www.yagooshop.com/shop/data/goods/1724833446916m0.jpg',
        price: '200,000',
        seller: {
            id: 'user_00001',
            name: '김투수',
        },
        category: 'gloves',
        productInfo: {
            brand: '윌슨',
            color: 'white',
            size: '11.5',
            hand: 'right',
        },
    },
];

function Main() {
    return (
        <>
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
                <div css={mainStyle.todayProducts}>
                    <div>
                        <h2>Today's Products</h2>
                    </div>
                    <Flex wrap align="start" gap="large" justify="start">
                        {productsList.map((product) => (
                            <TodayRegProductCard key={product.id} product={product} />
                        ))}
                    </Flex>
                </div>
            </div>
        </>
    );
}
