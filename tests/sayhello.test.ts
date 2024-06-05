import {sayHello} from '../src/sayhello';

describe('sayHello', function(){
    it('harusnya kembali hallo taroom', function(){
        const nameToTest = 'taroom';
        expect(sayHello(nameToTest)).toBe(`Halo ${nameToTest}`);
    });
});