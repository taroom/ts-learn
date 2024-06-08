export interface Seller {
    id: number,
    name: string,
    address?: string, //optional
    readonly nib: string,
    readonly npwp: string,
    readonly direktur?: string
}