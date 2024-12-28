interface ImportMetaEnv {
    readonly PUBLIC_PRIMARY_COLOR: string;
    readonly PUBLIC_SECONDARY_COLOR: string;
    readonly PUBLIC_TERTIARY_COLOR: string;
    readonly PUBLIC_QUATERNARY_COLOR: string;
    readonly PUBLIC_QUINARY_COLOR: string;
    // más variables de entorno...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}