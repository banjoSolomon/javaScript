//pop remove the last index
//let number = [1,2,3,4,5]
//number.pop()
//console.log(number);
// push add to the last index
//let numbers = [1,2,3,4,5]
//numbers.push()
//console.log(numbers)
//Shift remove the first index
//let numbers1 = [1,2,3,4,5]
//numbers1.shift()
//console.log(numbers1)
//UnShift add to the first index
//let numbers2 = [1,2,3,4,5]
//numbers2.unshift()
//console.log(numbers2)
// slice form the index
//let numbers3 = [1,2,3,4,5]
//numbers3.slice(1,3)
//console.log(numbers3.slice(1))

//splice u can remove and add
//let numbers4 = [1,2,3,4,5]
//numbers4.splice(2,0,9,8)
//console.log(numbers4)

//let num = [12,3,34,2,56,33,22,11,13]
//let numOne = [3,6,7]
//console.log(num.concat(numOne))

//let check = [["car", 2000],["Truck", 500],["Bike", 6500]]
//let another = ["scooter", 1500]
//console.log(check)
//console.log(check[0][0])
//check.push(another)
//console.log(check)

//let check1 = ["Toyota","Nissan"]
//let check2 = ["Ford"]
//let check3 = ["Honda"]
//check[0].push(check1)
//check[1].push(check2)
//check[2].push(check3)
//console.log(check)

//let array = [[200,50,300,5],
      //      [10,25,7,100],
    //        [25,20,70,45],
  //          [500,170,11,35]]

//console.log(array[1].splice(0,3))

//let user = {
    //firstName: "Solomon",
    //lastName: "Banjo",
    //age: "56",
   // sex : "Male"
//}

//let see = [1,2,3,4,5]
//for(const index in see){
  //  console.log(see)
//}
//for (const value of see){
   // console.log(value)
//}


 var obj1 ={
     name: "Solomon",
     population: 300,
     temprature: 12,
     currency: "Male"
 }

 var obj2 ={
    name: "Alex",
    population: 100,
    temprature: 11,
    currency: "doller"
}
var obj3 ={
    name: "Sam",
    population: 500,
    temprature: 9,
    currency: "doller"
}

 
var obj4 ={
    name: "Ola",
    population: 420,
    temprature: 5,
    currency: "doller"
}
 
var obj5 ={
    name: "See",
    population: 70,
    temprature: 18,
    currency: "doller"
}

var obj6 ={
    name: "Ben",
    population: 300,
    temprature: 12,
    currency: "doller"
}


var obj7 ={
    name: "Perker",
    population: 250,
    temprature: 8,
    currency: "doller"
}

var obj8 ={
    name: "Mav",
    population: 150,
    temprature: 3,
    currency: "doller"
}

var obj9 ={
    name: "Dope",
    population: 200,
   temprature: 12,
    currency: "doller"
}

let view = [[null,obj1,obj2,obj3],
            [obj4,obj5,obj6,null],
            [obj7,null,obj8,obj9],
            ]
          let total = 0
                for(let index in view){
                    for(let key of index){
                        if(view[index][key] != null && view[index][key].temprature >=10){
                            total += view[index][key].population
                        }
                    }
                } console.log(total)

const divide = function(x,y,z){
    let max = 0
    let numbers = [x,y,z]
    for (let index = 0; index < numbers.length; index++) {
         if (numbers[index] > numbers)max = numbers 
         for (let index = 0; index < numbers.length; index++) {
           if(max % 2 == 0 && numbers % 2 == 0)return numbers
            
         }
        
    }

};
console.log(divide(2,6,8))