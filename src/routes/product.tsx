import React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { ProductDetail } from '../components';

export const Route = createFileRoute('/product')({
    component: Product,
});

const mockProduct = {
    id: 'product_00001',
    createdDate: '2024-08-31',
    updateDate: '2024-08-31',
    title: '윌슨 투수 글러브 팝니다.',
    description: '회전근개 파열로 투수 관둡니다.',
    img: [
        'https://www.yagooshop.com/shop/data/goods/1724833446916m0.jpg',
        'https://www.yagooshop.com/shop/data/goods/1724833446916m0.jpg',
    ],
    price: 200000,
    category: 'gloves',
    brand: 'wilson',
    color: ['black', 'blue'],
    size: '12',
    postUser: {
        id: 'user_00001',
        name: '김투수',
    },
    likes: 5,
    count: 43,
};

function Product() {
    return <ProductDetail {...mockProduct} />;
}
