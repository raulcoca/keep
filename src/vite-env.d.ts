/// <reference types="vite/client" />


interface ImportMetaEnv {
    readonly VITE_SOME_KEY: string
    readonly db_PASSWORD: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}