function sortUp(arr) {
    return arr.sort((a, b) => a - b);
  }
  function unique(arr) {
    return arr.filter((elem, index) => arr.indexOf(elem) === index);
  }
  function uniqueSorted(arr) {
    return sortUp(unique(arr));
  }
  const arr = [1, 2, 3, 4, 5, 5, 3, 4, 8, 2, 9];
  const uniqueSortedArr = uniqueSorted(arr);
  console.log(uniqueSortedArr); 