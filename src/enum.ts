export enum CustomerType {
    REGULAR,
    GOLD,
    PLATINUM
}
/* kode diatas implementasinya adalah REGULAR = 0, GOLD = 1, PLATINUM = 2 */
/* untuk mengatasi ini coba kita buat yang kembaliannya string menggunakan kode dibawah ini */
export enum CustomerTypeString {
    REGULAR = 'REGULAR',
    GOLD = 'GOLD',
    PLATINUM = 'PLATINUM'
}

export type Customer = {
    id:number,
    name:string,
    type: CustomerType
}

export type CustomerStringEnum = {
    id:number,
    name:string,
    type: CustomerTypeString
}