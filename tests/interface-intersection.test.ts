describe('should do intersection', function () {
    it('do intersection', function () {
        interface HasId {
            id: string
        }

        interface HasName {
            name: string
        }

        type Domain = HasId & HasName;

        // implementasi
        const domain: Domain = {
            id: '1',
            name: 'Nama Domain',
        }
        console.info(domain);

        // bisa juga di tulis 
        interface OtherDomain extends HasName, HasId { }

        const domain2: OtherDomain = {
            id: '2',
            name: 'Nama Domain Lain'
        }

        console.info(domain2);

    });
});