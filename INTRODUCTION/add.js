function addNumbers(x,y) {
    let answer = x + y;
    return answer
    
}
function evenNumbers(numbers) {
    let result =  numbers.filter(number => number % 2 == 0);
    return result;
    
}

function maximumProduct(myArray) {
    if(myArray.length < 2)return 0;
    var maximumProduct = myArray[0] * myArray[1]
    for (let index = 0; index < myArray.length; index++) {
        for(let count = 0 ; count < myArray.length; count++) {
            if(index != count) var product = myArray[index] * myArray[count];
            if(maximumProduct < product)maximumProduct = product;
            

        }
    }
    return maximumProduct;
}


function sortArrayWithMixedNumbers(myArray) {
   let nonZeroElements = myArray.filter(num => num !== 0);
   let zeroElements = myArray.filter(num => num === 0);
   return [...nonZeroElements, ...zeroElements];
}
module.exports = {addNumbers, evenNumbers, maximumProduct, sortArrayWithMixedNumbers};


