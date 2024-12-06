import React, { useState, useEffect } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { PostgrestError } from '@supabase/supabase-js';
import { Flex } from 'antd';
import { supabase } from '../utils/superbase/superbase';
import { TodayRegProductCard } from '../components';
import { mainStyle } from '../styles/MainStyle';
import type { TodayRegProductType } from '../components/main/types';

export const Route = createFileRoute('/')({
    component: Main,
});

function Main() {
    const [products, setProducts] = useState<TodayRegProductType[]>([]);
    const [error, setError] = useState<PostgrestError | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data, error } = await supabase.from('products').select('*');
            if (error) {
                setError(error);
            } else {
                setProducts(data);
            }
        };

        fetchProducts();
    }, []);

    return (
        <>
            <div css={mainStyle.catecories}>
                <div>Categories</div>
                <div>Browse By Category</div>
                <div css={mainStyle.categoryBox}>
                    <div>글러브</div>
                    <div>신발</div>
                    <div>배트</div>
                    <div>보호장비</div>
                    <div>악세서리</div>
                    <div>기타</div>
                </div>
            </div>
            <div css={mainStyle.todayProducts}>
                <div>
                    <h2>Today's Products</h2>
                </div>
                <Flex wrap align="start" gap="large" justify="start">
                    {products.map((product) => (
                        <TodayRegProductCard key={product.id} product={product} />
                    ))}
                </Flex>
            </div>
        </>
    );
}
