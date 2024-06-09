describe('conditional in ts', function () {
    it('IF Statement', function () {
        const nilai = 90;

        if (nilai > 80) {
            console.info(`Bagus Sekali`);
        } else if (nilai > 64) {
            console.info(`Lumayan`);
        } else {
            console.info(`Belajar lagi yaa`);
        }
    });

    it('Ternary Statement', function () {
        const nilai = 90;

        console.info(nilai > 70 ? `Lulus` : `Tidak lulus`);
    });

    it('Switch Statement', function () {
        const nama = 'agus';

        switch (nama) {
            case 'agus':
                console.info(`Hallo Agus`);
                break;
            case "hilya":
                console.info(`Hallo Hilya`);
                break;
            case 'khoirul':
                console.info(`Hallo Khoirul`);
                break;
            default:
                console.info(`Hallo Saya`);
                break;
        }
    });

});