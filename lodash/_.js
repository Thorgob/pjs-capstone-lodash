let _ = {

  clamp (value, lowerBound, upperBound) {
    value = Math.max(value, lowerBound);
    value = Math.min(value, upperBound);
    return value;
  },

  inRange (value, start, end) {
    if (end == null) {
      end = start
      start = 0
    };

    if (start > end) {
      let swapVar = start;
      start = end;
      end = swapVar;
    };

    if (value >= start && value <= end){
      return true;
    } else {
      return false;
    };

  },

	words (string) {
    wordsArray = string.split(' ');
    return wordsArray;
  },

  pad (string, length) {
    if (string.length >= length) {
      return string;
    };

    const frontPad = Math.floor((length - string.length)/2);
    const backPad = Math.ceil((length - string.length)/2);

    const paddedString = ' '.repeat(frontPad) + string + ' '.repeat(backPad)

    return paddedString
  },

  has (object, key) {
  value = object[key];
	if (value == undefined) {
    return false;
  } else {
    return true;
  	};
  },

  invert (object) {
    let invertedObject = {};
    for (let key in object) {
      originalValue = object.key
      invertedObject.originalValue = key
    };
    return invertedObject;
  },

  findKey(object, pFunction) {

    for (let key in object) {
      let value = object.key
      let pFunctionValue = pFunction(value);
      if (pFunctionValue) {
        return key;
      }
    }
    return undefined;
  },

  drop (array, dropNumber) {
    if (dropNumber == undefined) {
      dropNumber = 1;
    }
    dropArray = array.slice(dropNumber);
    return dropArray;
  },

  dropWhile (array, pFunction) {
    let dropNumber = array.findIndex(function (element, index) {return !pFunction(element, index, array)});
		let droppedArray = this.drop(array, dropNumber)
    return droppedArray;
  },

 	chunk (array, size) {
    if (size == undefined) {
      size = 1;
    };
    let newArray = [];
   for (let i = 0; i < array.length; i = i + size) {
      let arrayChunk = array.slice(i, i+size);
      newArray.push(arrayChunk);
    };
  	return newArray;
  },

};

// Do not write or modify code below this line.
module.exports = _;
