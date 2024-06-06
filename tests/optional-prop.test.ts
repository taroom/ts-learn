import { Category, Product } from "../src/optional-prop";

describe('type alias', function() {
  it('type alias is must', function(){
    const categoryHp: Category = {
        id: 1,//ini implementasi dari union bisa number
        name: 'Baju',
        description: 'ini harusnya bisa tidak diisi'
    }

    const product: Product = {
        id: '1',//ini implementasi dari union bisa string
        name: 'Millagro',
        price: 20000,
        category: categoryHp
        // contohnya disini description tidak diisi karena bersifat optional
    }
    
    console.info(categoryHp);
    console.info(product);
  });
});
