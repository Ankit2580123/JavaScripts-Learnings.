let arr=[2,5,10,15,20];
//double the arrays elements using map functions.
let result=arr.map(function (value){
                    return value*2;
});
//using arrow functions
let result2=arr.map((value2)=> value2*2);
console.log(result)
console.log(result2)

