const getPercents = require('./index.js');
describe('getPersents', () => {
  it('should returns correct result', () => {
    expect(getPercents(30, 200)).toBe(60);
  });
  it('should return percentage of a negative numbers', () => {
     expect(getPercents(45, -100)).toBe(-45); 
  });
  
  it('should returns number', () => {
    expect(typeof getPercents(50, 100)).toEqual('number');
  });
  
  it('should throw an error when percent is not a number', () => {
    expect(getPercents("a", 200)).toThrowError();
  });
  it('should throw an error when number is not a number', () => {
    expect(getPercents(50, "b")).toThrowError();
  });
});
