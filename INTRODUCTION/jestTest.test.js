let {addNumbers, evenNumbers, maximumProduct, sortArrayWithMixedNumbers} = require("./add.js");
test("Add two numbers",()=>{
    let a = 3;
    let b = 5;
    let answer = addNumbers(a, b);
    expect(answer).toBe(8);

}) 

test("Filter even numbers", ()=>{
    let arr = [1,2,3,4,5,6];
    let answer = evenNumbers(arr);
    expect(answer).toEqual([2,4,6])

}) 

// const getLetterGrade = require('./arrays.js');

// test('return correct letter grade for given score', () => {
//     expect(getLetterGrade(95)).toBe('A');
//     expect(getLetterGrade(78)).toBe('C');
//     expect(getLetterGrade(85)).toBe('B');
//     expect(getLetterGrade(60)).toBe('D');
//     expect(getLetterGrade(45)).toBe('F');
//     expect(getLetterGrade(92)).toBe('A');
// });

test('test maximum prodduct', () =>{
    let arr = [1,5,10,4,0]
    let answer = maximumProduct(arr);
    expect(answer).toBe(50)

})

test('test sorting numbers', () =>{
    let arr = [3,2,0,-1,7,0,8]
    let answer = sortArrayWithMixedNumbers(arr)
    expect(answer).toEqual([3,2,-1,7,8,0,0])

})
