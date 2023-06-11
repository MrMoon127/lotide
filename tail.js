const tail = function(arr1) {
  let returnArr = [];

  for (let i = 1; i < arr1.length; i++) {
    returnArr.push(arr1[i]);
  }

  return returnArr;
};

module.exports = tail;