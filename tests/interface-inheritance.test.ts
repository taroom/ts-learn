describe('should interface inheritance', function(){
    it('inheritance interface', function(){
        interface Pegawai {
            id: string,
            name: string,
            division: string
        }

        interface Manajer extends Pegawai {
            numberOfEmployees: number
        }

        const pegawai1:Pegawai = {
            id: '1',
            name: 'Sumarko',
            division: 'Sales'
        }

        console.info(pegawai1);

        const manajer1:Manajer = {
            id: '2',
            name: 'Taroom',
            division: 'Z-generatif',
            numberOfEmployees:1
        }

        console.info(manajer1);
    });
});