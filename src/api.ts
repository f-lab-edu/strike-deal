import { PostgrestSingleResponse, PostgrestError } from '@supabase/supabase-js';
import { supabase } from './utils/supabase/supabase';

type SearchProductType = {
    title?: string;
    id?: string;
    category?: string;
};

const executeResult = <T>(res: PostgrestSingleResponse<T>): T => {
    const { data, error } = res;

    if (error) {
        throw error;
    }

    if (!data) {
        throw new Error('No data');
    }

    return data;
};

const fetchFromSupabase = async (table: string, filters: SearchProductType = {}) => {
    let query = supabase.from(table).select('*');

    for (const [key, value] of Object.entries(filters)) {
        query = query.eq(key, value);
    }

    const res = await query;

    return executeResult(res);
};

export const getProducts = async () => {
    return await fetchFromSupabase('products');
};

export const getProductDetail = async (productId: string) => {
    return await fetchFromSupabase('products', { id: productId });
};
