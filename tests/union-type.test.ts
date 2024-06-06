describe('bisa ganti ganti', function(){
    it('menggunakan union type', function(){
        let dinamis: number | string | boolean = "Taroom";

        console.info(dinamis);
        dinamis = 100;
        console.info(dinamis);
        dinamis = true;
        console.info(dinamis);


    });

    it('menggunakan typeof untuk kehati hatian', function(){

        function processData(value:number | string | boolean){
            if(typeof value === 'string'){
                return value.toUpperCase();
            } else if(typeof value === 'number'){
                return value + 2;
            } else {
                return !value;
            }
        }

        expect(processData("taroom")).toBe('TAROOM');
        expect(processData(8)).toBe(10);
        expect(processData(true)).toBe(false);
    });
});