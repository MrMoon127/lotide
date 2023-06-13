const without = function(source, itemsToRemove) {
  let newArr = [];

  for (const element1 of source) {
    let contains = false;

    for (const element2 of itemsToRemove) {
      if (element1 === element2) {
        contains = true;
      }
    }
    
    if (!contains) {
      newArr.push(element1);
    }

  }

  return newArr;
}

module.exports = without;