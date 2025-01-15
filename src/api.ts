import { supabase } from './utils/supabase/supabase';

type SearchProductType = {
    title?: string;
    id?: string;
    category?: string;
};

type QueryResult<T> = {
    data: T | null;
    error: Error;
};

const executeQuery = async <T>(query): Promise<T | Error> => {
    const { data, error }: QueryResult<T> = await query;

    if (error) {
        return error;
    }

    return data !== null ? data : new Error('No data');
};

const fetchFromSupabase = async (table: string, filters: SearchProductType = {}) => {
    let query = supabase.from(table).select('*');

    for (const [key, value] of Object.entries(filters)) {
        query = query.eq(key, value);
    }

    return await executeQuery(query);
};

export const getProducts = async () => {
    return await fetchFromSupabase('products');
};

export const getProductDetail = async (productId: string) => {
    return await fetchFromSupabase('products', { id: productId });
};
