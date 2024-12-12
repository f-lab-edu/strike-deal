import { supabase } from './utils/superbase/superbase';

export const getProducts = async () => {
    const { data, error } = await supabase.from('products').select('*');

    if (error) {
        return error;
    }

    return data;
};

export const getProductDetail = async (productId: string) => {
    const { data, error } = await supabase.from('products').select().eq('id', productId);

    if (error) {
        return error;
    }

    return data;
};
