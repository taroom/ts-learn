import { Manusia } from "../src/manusia";

describe('should method test', function () {
    it('method test', function () {
        const manusia1: Manusia = {
            nama: 'Agus Sutarom',
            sebutNama(nama) {
                return `Hallo ${nama} nama saya ${this.nama}`;
            }
        };

        console.info(manusia1);
        console.info(manusia1.sebutNama('Hilya'));
    });
});