import { SellerType } from '../main/types';

type UserType = {
    id: string;
    name: string;
    email?: string;
    phone?: string;
};

type ProductDetailType = {
    id: number;
    created_at: string;
    updated_at: string;
    title: string;
    desc: string;
    product_img: string[];
    price: number;
    category: string;
    like_user: number;
    count?: number; // view count
    is_done: boolean;
};

export type { ProductDetailType };
