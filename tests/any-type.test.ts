describe('check if any', function(){
    // sebaiknya jangan gegabah. jangan gunakan any terlalu sering, anda menggunakan typescript untuk terjaganya script.
    const person: any = {
        id: 1, 
        name: "Agus Sutarom",
        age: 30
    };

    person.age = 33;
    person.address = 'Jl. Temandang Merakurak';

    console.info(person);
});