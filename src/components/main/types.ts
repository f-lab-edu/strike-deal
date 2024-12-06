type TodayRegProductType = {
    id: string;
    createdDate: string;
    title: string;
    description: string;
    product_img: string[];
    price: string;
    seller: SellerType;
    category: string;
    productInfo: ProductType;
};

type SellerType = {
    id: string;
    name: string;
};

type ProductType = {
    brand: string;
    color: string;
    size: string;
    hand: string;
};

export { TodayRegProductType, SellerType, ProductType };
