export type ID = string | number;
export type Category = {
    id: ID,
    name: string
    description?: string // ? menandakan optional, tidak harus diisi
}

export type Product = {
    id: ID,
    name: string,
    price:number,
    category: Category,
    description?: string // ? iini juga optional, lihat optional-prop.ts
}