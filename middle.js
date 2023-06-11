// ACTUAL FUNCTION
const middle = function(arr) {
  let returnArr = []

  if (arr.length === 1 || arr.length === 2) {
    return returnArr;
  }

  if (arr.length % 2 === 0) {
    let index = (arr.length / 2) - 1;

    returnArr.push(arr[index], arr[index + 1]);
  } else {
    let index = (arr.length / 2) - 0.5;

    returnArr.push(arr[index]);
  }

  return returnArr;
}


module.exports = middle