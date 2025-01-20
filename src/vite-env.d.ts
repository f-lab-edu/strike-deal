/// <reference types="vite/client" />
/// <reference types="@emotion/react/types/css-prop" />

interface ImportMetaEnv {
    // readonly VITE_APP_TITLE: string
    // more env variables...
    readonly VITE_APP_SUPABASE_URL: string;
    readonly VITE_APP_SUPABASE_ANON_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
