import { Seller } from "../src/seller-interface-readonly";

describe('must interface', function() {
  it('seller interface', function() {
    const seller:Seller = {
        id: 1,
        name: 'Agus Sutarom',
        npwp: '221',
        nib: '222'
    }

    console.info(seller);

    // coba mengubah nib, tidak bisa karena  (cannot assign cause readonly prop)
    // seller.nib = '2233';
    seller.name = 'Agus Mulyadi';
    
    console.info(seller);
    const seller2:Seller = {
        id: 2,
        name: 'Khoirul Abdul',
        address: 'Kembangbilo',
        npwp: '221',
        nib: '222',
        direktur: 'Arif'
    }

    console.info(seller2);
  });
});
