describe('Optional Test', function(){
    it('should optional', function(){
        function sayHello(name?: string | null){
            if(name){
                console.info(`Hallo ${name}`);
            } else {
                console.info('hello');
            }
        }

        sayHello('Taroom');
        const name: string | undefined = undefined;
        sayHello(name);
        sayHello(null);
    });
});
