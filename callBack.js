
// function message(){
//                     console.log("Multiplty done..")
// }
function Multiply(num1,num2,callback){
                    console.log(num1*num2);
                    callback();
}
let num1=parseInt(prompt('Enter Numer One:'))
let num2=parseInt(prompt('Enter Numer Two:'))

Multiply(num1,num2,function (){
                    console.log("Multiply done..")
});