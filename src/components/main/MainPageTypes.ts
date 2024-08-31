export type TodayRegProductType = {
    id: string;
    createdDate: string;
    title: string;
    description: string;
    img: string;
    price: string;
    seller: SellerType;
    category: string;
    productInfo: ProductType;
};

export type SellerType = {
    id: string;
    name: string;
};

export type ProductType = {
    brand: string;
    color: string;
    size: string;
    hand: string;
};
