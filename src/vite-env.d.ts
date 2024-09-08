/// <reference types="vite/client" />
/// <reference types="@emotion/react/types/css-prop" />

interface ImportMetaEnv {
    // readonly VITE_APP_TITLE: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
