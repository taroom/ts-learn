describe('Array test', function(){
    it('sama dengan js', function(){
        
        const name:string[] = ['taroom', 'khoirul', 'novi'];
        const val:number[] = [1,2,3];

        console.info(name);
        console.info(val);

        // Readonly Array
    });

    it('Readonly Array', function(){
        const hobbies: ReadonlyArray<string> = ['read', 'write'];

        console.info(hobbies);

        // hobbies[0] = "aska";
        //  <- ini akan menghasilkan error karena hobbies bertipe readonly array
    });

    it('Support Tuple', function(){
        /* hal ini disebut tuple di ts, jumlah elemen sudah ditentukan dan termasuk jenis datanya, jumlah tidak bisa dirubah, value dari element tidak bisa diubah */
        const person: readonly [string, string, number] = ["agus", "sutarom", 100];
        console.info(person);
        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);

        // person[1] = "salsa"; //<--menghasilkan error readonly property 
    });
});