import React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';
import { getProductDetail } from '../api';
import { ProductDetail } from '../components';

const productQueryOptions = (productId: string) =>
    queryOptions({
        queryKey: ['products', { productId }],
        queryFn: () => getProductDetail(productId),
    });

export const Route = createFileRoute('/products/$productId')({
    loader: ({ context: { queryClient }, params: { productId } }) => {
        return queryClient.ensureQueryData(productQueryOptions(productId));
    },
    component: Product,
});

function Product() {
    const productId = Route.useParams().productId;
    const { data: product, isFetching } = useSuspenseQuery(productQueryOptions(productId));

    if (isFetching) {
        return <div>Loading...</div>;
    }
    return product && <ProductDetail product={product[0]} />;
}
