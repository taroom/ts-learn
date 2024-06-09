describe('Should looping on TS', function () {
    it('do for loop', function () {
        const daftarNama: string[] = ['Agus', 'Sutarom', 'Hilya'];

        for (let i = 0; i < daftarNama.length; i++) {
            console.info(`nama ${i + 1} : ${daftarNama[i]}`);
        }

        // for of
        for (const nama of daftarNama) {
            console.info(`namamu pakai of ${nama}`);
        }

        // for in (for use index)
        for (const i in daftarNama) {
            console.info(`namamu pakai in ${daftarNama[i]}`);
        }
    });

    it('do while loop', function () {
        let counter: number = 0;

        while (counter < 10) {
            console.info(`perulangan while ke ${counter}`);
            counter++;
        }
    });

    it('doing dowhile loop', function () {
        let counter: number = 0;

        do {
            console.info(`perulangan while ke ${counter}`);
            counter++;
        } while (counter < 10)
    });

    it('doing break and continue loop', function () {
        let counter: number = 0;

        do {
            counter++;

            if (counter == 10) break;
            if (counter % 2 == 0) continue;

            console.info(`perulangan while ke ${counter}`);
        } while (true)
    });
});