 var num = 5
 console.log(num)
 var num = 7
 console.log(num)

 x = 5
 y = 6
sum = 2  * (y + x)
 console.log(sum)

 x = 5
 y = 6
  dvisible = (y + x)%10
  total = dvisible + (y + x)
 console.log(total)

 x = 4
 n = 7
 result = x ** n
 console.log(result)

 a = 4
 x = a + 10
 y = a - 10
 z = a % 10

 result = a / ( x * y * z)
 console.log(result)

 console.log(typeof null)

 let person ={
    firstName: "Solomon",
   lastname: "Banjo",
    age: 30,
    gender: "Male"
}
console.log(person.firstName)

let array = []
let arr = new Array(3)

 let second_person ={
    id : 12,
    available : "is available",
     count : 23,
     name : "Solomon",
   authour: "Semicolon"
}
console.log(second_person)

 let number = 5;
 let result = (number > 2)? true: false;
 console.log(result)
 let left_oprand = 20
 let right_oprand = 34
 let oprator = "*"
 if(oprator == "+"){
     console.log(left_oprand + right_oprand)
 }else if(oprator == "-"){
     console.log(left_oprand - right_oprand)
 }else if(oprator == "*"){
    console.log(left_oprand * right_oprand)
}else if(oprator == "/"){
    console.log(left_oprand / right_oprand) 
 }
 let ans = console

console.log(calc(3)(2));
function calc(x){
    function secondNumber(a){
        return a * x;
    }
    return secondNumber;
    
}

const clac = (x) =>{
    function secondNumber(a){
        return a * x;

    }
};

let result = calc(3);
console.log(result(2));
console.log(calc(3)(2));

function higherOrderFunction(func){
    console.log("higher function")
    func();
}

// function lowerOrderFunction(){
//     console.log("lower function")
// }
// higherOrderFunction(lowerOrderFunction);

higherOrderFunction(()=>{
    console.log("lower fuction")
});

function greetings(greet){
    return function person(name){
        return `Hello, ${name}. ${greet}`;
    } 
    }
    console.log(greetings("Good morning!")("John"))






 

