describe('indexable array', function(){
  it('should doing indexable array', function(){
    interface StringArray {
        [index:number]: string
    }

    const names: StringArray = ['Agus', 'Sutarom', 'Freeya'];
    console.info(names);
  });

  it('should doing indexable map/dict', function(){
    interface StringDictionary {
        [index:string]: string
    }

    const profile: StringDictionary = {
        name: "Agus Sutarom",
        alamat: "Indonesia"
    }
    console.info(profile);

    expect(profile.name).toBe('Agus Sutarom');
    expect(profile.alamat).toBe('Indonesia');
    // atau
    expect(profile['name']).toBe('Agus Sutarom');
    expect(profile['alamat']).toBe('Indonesia');
  });
});
