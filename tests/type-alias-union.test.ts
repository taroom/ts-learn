import { Category, Product } from "../src/type-alias-union";

describe('type alias', function() {
  it('type alias is must', function(){
    const categoryHp: Category = {
        id: 1,//ini implementasi dari union bisa number
        name: 'Baju'
    }

    const product: Product = {
        id: '1',//ini implementasi dari union bisa string
        name: 'Millagro',
        price: 20000,
        category: categoryHp
    }
    
    console.info(categoryHp);
    console.info(product);
  });
});
