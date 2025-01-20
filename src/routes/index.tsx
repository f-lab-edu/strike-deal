import React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { queryOptions, useQuery } from '@tanstack/react-query';
import { Flex } from 'antd';
import { getProducts } from '../api';
import { TodayRegProductCard } from '../components';
import { mainStyle } from '../styles/MainStyle';

const productsQueryOptions = queryOptions({
    queryKey: ['products'],
    queryFn: () => getProducts(),
});

export const Route = createFileRoute('/')({
    loader: ({ context: { queryClient } }) => queryClient.ensureQueryData(productsQueryOptions),
    component: Main,
});

function Main() {
    const productsQuery = useQuery(productsQueryOptions);
    const { data: products, isFetching } = productsQuery;
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
                {isFetching ? (
                    <div>Loading...</div>
                ) : (
                    <Flex wrap align="start" gap="large" justify="start">
                        {Array.isArray(products) &&
                            products.length > 0 &&
                            products.map((product) => (
                                <TodayRegProductCard key={product.id} product={product} />
                            ))}
                    </Flex>
                )}
            </div>
        </>
    );
}
