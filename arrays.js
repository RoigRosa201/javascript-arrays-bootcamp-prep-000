var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]



  function destructivelyAddElementToBeginningOfArray(array, element) {

    array.unshift(element)
    return array
  }

function addElementToBeginningOfArray(array, element) {
return   [element, ...array]

}

function addElementToEndOfArray(array, element) {
 return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {

    array.push(element)

  return array
}

function accessElementInArray(array, index) {
  return array[index];

}


function   destructivelyRemoveElementFromEndOfArray(array) {

     array.pop(array)
     return array
}

function destructivelyRemoveElementFromBeginningOfArray(array) {

  array.shift()
  return array
}


function removeElementFromBeginningOfArray(array) {

return array.slice(1)

}

function removeElementFromEndOfArray(0, iceCreams.length - 1) {

  var iceCreams = ["chocolate", "vanilla", "raspberry"]

iceCreams.slice(0, iceCreams.length - 1)
}
