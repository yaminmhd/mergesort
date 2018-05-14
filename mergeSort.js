/*
Algorithm
Merge sort keeps on dividing the list into equal halves until it can no more be divided. By definition, if it is only one element in the list, it is sorted. Then, merge sort combines the smaller sorted lists keeping the new list sorted too.

Step 1 − if it is only one element in the list it is already sorted, return.
Step 2 − divide the list recursively into two halves until it can no more be divided.
Step 3 − merge the smaller lists into new list in sorted order.
*/

const mergeSort = array => {
  //if it is only element in the list, it is already sorted, return
  if (array.length <= 1) return array;

  //find middle
  const middle = Math.ceil(array.length / 2);

  //split array
  let leftHalf = array.slice(0, middle);
  let rightHalf = array.slice(middle);

  //recursively divide the list into two halves until it can no more be divided
  let left = mergeSort(leftHalf);
  let right = mergeSort(rightHalf);

  //return merge
  return merge(left, right);
};

const merge = (leftHalf, rightHalf) => {
  let finalArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftHalf.length && rightIndex < rightHalf.length) {
    let left = leftHalf[leftIndex];
    let right = rightHalf[rightIndex];

    if (left > right) {
      finalArray.push(right);
      rightIndex++;
    } else {
      finalArray.push(left);
      leftIndex++;
    }
  }

  if(leftIndex < leftHalf.length){
    finalArray = finalArray.concat(leftHalf.slice(leftIndex));
  }
  if(rightIndex < rightHalf.length){
    finalArray = finalArray.concat(rightHalf.slice(rightIndex));
  }
  return finalArray;
};

//console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));

module.exports = mergeSort;
