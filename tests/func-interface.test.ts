describe('should interface function', function () {
  it('interface function', function () {
    interface functionForYou {
      (val1: number, val2: number): number;
    }

    const add: functionForYou = (val1: number, val2: number): number => {
      return val1 + val2;
    }

    expect(add(2, 3)).toBe(5);
    expect(add(5, 3)).toBe(8);
  });
});