import { Category, Product } from "../src/type-alias";

describe('type alias', function() {
  it('type alias is must', function(){
    const categoryHp: Category = {
        id: '1',
        name: 'Baju'
    }

    const product: Product = {
        id: '1',
        name: 'Millagro',
        price: 20000,
        category: categoryHp
    }

    
    // misalkan mau menambahkan elm objek baru maka tidak bisa di ts (location did not exist), kalau di js bisa
    // product.location = "AB";

    console.info(categoryHp);
    console.info(product);
  });
});
