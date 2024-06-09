import { Manusia } from "../src/manusia";

describe('should do assertion', function () {
    it('doing assertion', function () {

        const ngasal: any = {
            nama: 'Sony Tulung',
            umur: 36
        }

        const baruBenar: any = {
            nama: 'Agung',
            sebutNama(nama: string): string {
                return `Hallo ${nama} saya adalah ${this.nama}`;
            }
        }

        const manusia1: Manusia = ngasal as Manusia;
        const manusia2: Manusia = baruBenar as Manusia;
        console.info(manusia1);
        console.info(manusia2);

        // nah defaulnya umur pada ngasal harusnya tidak ada, dan sebutNama juga tidak ada di ngasal ini akan menyebabkan error yang tidak diketahui
        // konsepnya aneh, perlu dipelajari kegunaannya
    });
});