describe('Object Type', function(){
    it('implementasi objek type', function(){
        // untuk kasus sederhana aja, bisa ditulis seperti ini
        // dimana person mempunyai tipe data objek dengan 2 elemen id dan name
        const person: { id: string, name: string} = {
            id: '1',
            name:'Taroom'
        }

        console.info(person);
    });
});