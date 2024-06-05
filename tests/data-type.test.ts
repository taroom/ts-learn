describe('Data Type', function(){
    it('harus di deklarasikan', function(){
        const name: string = "Agus Sutarom";
        const balance: number = 1000000;
        const isVip: boolean = true;

        console.info(name);
        console.info(balance);
        console.info(isVip);

        // ketika di test akan baik baik saja
        // tapi ketika di kompilasi maka error
        // hal ini dikarenakan saat di test typescript akan diubah menjadi js
        // tips, harus dilakukan kompilasi terus menerus dengan perintah
        // npx tsc --watch   
    });
});