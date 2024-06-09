describe('learn function', function () {
    it('do function normaly', function () {
        function sebutNama(nama: string): string {
            return `Hallo, ${nama}`;
        }

        expect(sebutNama('Taroom')).toBe('Hallo, Taroom');

        function dalamHati(nama: string): void {
            console.info(`Hallo ${nama} dalam hati`);
        }

        dalamHati('Taroom');
    });

    it('default parameter', function () {
        function sebutNamaku(nama: string = 'Agus'): string {
            return `Halo Nama Saya ${nama}`;
        }

        expect(sebutNamaku('Khoirul')).toBe('Halo Nama Saya Khoirul');
        expect(sebutNamaku()).toBe('Halo Nama Saya Agus');
    });

    it('rest parameter', function () {
        function sebutNamaku(...nama: string[]): number {
            let total = 0;
            for (const n of nama) {
                console.info(`Nama ke-${total + 1} adalah ${n}`);
                total += 1;
            }

            return total;
        }

        expect(sebutNamaku('Khoirul', 'Agus', 'Sutarom', 'Hilya')).toBe(4);

        function sumAll(...angka: number[]): number {
            let total = 0;
            for (const a of angka) {
                total += a;
            }

            return total;
        }

        expect(sumAll(50, 20, 15, 15)).toBe(100);
    });

    it('optional parameter', function () {
        function sebutNamaku(nama?: string): string {
            if (nama) {
                return `Oh namamu ${nama} ya?`;
            } else {
                return `Belum sebut nama`;
            }
        }

        expect(sebutNamaku()).toBe('Belum sebut nama');
        expect(sebutNamaku('Taroom')).toBe('Oh namamu Taroom ya?');
    });

    it('function overloading', function () {
        // satu function untuk banyak tipe input dan tipe out
        // definisikan rule dulu
        function sebutAku(val: number): number;
        function sebutAku(val: string): string;

        // implementasi menggunakan any
        function sebutAku(val: any): any {
            if (typeof val == "string") {
                return `Hallo saya ${val}`;
            } else if (typeof val == "number") {
                return val;
            }
        }
        expect(sebutAku('Hilya')).toBe('Hallo saya Hilya');
        expect(sebutAku(101)).toBe(101);
    });

    it("function as parameter", function () {
        // implementasi menggunakan any
        function sebutAku(nama: string, filter: (name: string) => string): string {
            return `sebut aku ${filter(nama)}`;
        }

        function besarkanSemua(nama: string): string {
            return nama.toUpperCase();
        }

        expect(sebutAku("Hilya", besarkanSemua)).toBe("sebut aku HILYA");
    });

    it("anonymous function as parameter", function () {
        // implementasi menggunakan any
        function sebutAku(nama: string, filter: (name: string) => string): string {
            return `sebut aku ${filter(nama)}`;
        }

        expect(sebutAku("Hilya", function (name: string): string {
            return name.toUpperCase();
        })).toBe("sebut aku HILYA");
    });

    it("anonymous arrow function as parameter", function () {
        // implementasi menggunakan any
        function sebutAku(nama: string, filter: (name: string) => string): string {
            return `sebut aku ${filter(nama)}`;
        }

        expect(sebutAku("Taroom", (name: string): string => name.toUpperCase())).toBe("sebut aku TAROOM");
    });
});