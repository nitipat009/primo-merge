import { Merge } from '../merge';

describe('Merge function', () => {
  it('should return a sorted array if input arrays of length 1', () => {
    const collection1 = [1];
    const collection2 = [2];
    const mustbe = [1,2]
    const result = Merge(collection1, collection2);
    expect(result).toEqual(mustbe)
  });
  it('should return a sorted array two input arrays of equal sizes', () => {
    const collection1 = [1, 4, 5];
    const collection2 = [2, 6, 8];
    const mustbe = [1,2,4,5,6,8]
    const result = Merge(collection1, collection2);
    expect(result).toEqual(mustbe)
  });
  it('should return a sorted array two input arrays of different sizes', () => {
    const collection1 = [1, 10, 11];
    const collection2 = [2, 3, 6, 9];
    const mustbe = [1,2,3,6,9,10,11]
    const result = Merge(collection1, collection2);
    expect(result).toEqual(mustbe)
  });
  it('should return a sorted array if either of the input arrays is empty', () => {
    const collection2 = [2, 3, 6, 9];
    const mustbe = [2, 3, 6, 9]
    const result = Merge([], collection2);
    expect(result).toEqual(mustbe)
  });
  
  it('should return a sorted array if either of the input arrays that contain duplicate elements', () => {
    const collection1 = [1, 2, 3];
    const collection2 = [1, 2, 3];
    const mustbe = [1,1,2,2,3,3]
    const result = Merge(collection1, collection2);
    expect(result).toEqual(mustbe)
  });
  it('should return empty array and error message when negative in array', () => {
    const collection1 = [-1,1, 10, 11];
    const collection2 = [2, 3, 6, 9];
    const consoleSpy = jest.spyOn(console, 'error');
    const result = Merge(collection1, collection2);
    expect(result).toEqual([]);
    expect(consoleSpy).toHaveBeenCalledWith('Array is contain negative number')
  })
  it('should return empty array and error message when float in array', () => {
    const collection1 = [1, 10, 11.1];
    const collection2 = [2, 3, 6, 9];
    const consoleSpy = jest.spyOn(console, 'error');
    const result = Merge(collection1, collection2);
    expect(result).toEqual([]);
    expect(consoleSpy).toHaveBeenCalledWith('Array is contain float number')
  })
  it('should return empty array and error message when collection1 or collection2 is not sorted', () => {
    const collection1 = [11,5,8,9];
    const collection2 = [2, 3, 6, 9];
    const consoleSpy = jest.spyOn(console, 'error');
    const result = Merge(collection1, collection2);
    expect(result).toEqual([]);
    expect(consoleSpy).toHaveBeenCalledWith('Array is not sorted')
  })
});