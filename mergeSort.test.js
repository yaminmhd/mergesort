const mergeSort = require('./mergeSort');

describe('merge sort', () => {
  it('should sort the elements using mergesort', () => {
    const data = [38, 27, 43, 3, 9, 82, 10];
    expect(mergeSort(data)).toEqual([3,9,10,27,38,43,82]);
  });

  it('should return array when length is less than 1', () => {
    const data= [];
    expect(mergeSort(data)).toEqual([]);
  });

  it('should return array when length is 1', () => {
    const data = [1];
    expect(mergeSort(data)).toEqual([1]);
  });
});