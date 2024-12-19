import { supabase } from './utils/supabase/supabase';

type SearchProductType = {
    title?: string;
    id?: string;
    category?: string;
};

const fetchFromSupabase = async (table: string, filters: SearchProductType = {}) => {
    let query = supabase.from(table).select('*');

    for (const [key, value] of Object.entries(filters)) {
        query = query.eq(key, value);
    }

    const { data, error } = await query;

    if (error) {
        return error;
    }

    return data;
};

export const getProducts = async () => {
    return await fetchFromSupabase('products');
};

export const getProductDetail = async (productId: string) => {
    return await fetchFromSupabase('products', { id: productId });
};
