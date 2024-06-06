import { Customer, CustomerType, CustomerStringEnum, CustomerTypeString } from "../src/enum";

describe('Enum Test', function(){
  it('should enum', function(){

    const customer: Customer = {
        id: 1,
        name: 'Agus Sutarom',
        type:CustomerType.GOLD
    };

    const customerString: CustomerStringEnum = {
        id: 1,
        name:'Agus Sutarom',
        type:CustomerTypeString.GOLD
    };

    console.info(customer);
    console.info(customerString);
  });
});
