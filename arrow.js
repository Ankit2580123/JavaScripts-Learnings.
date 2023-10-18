function square(num){
                    return num*num;
}
console.log(square(5));

//arrow function
let squareA=(num)=>num*num;
console.log(squareA(5));

//Normal Functions
// document.addEventListener('click', function msg (){
//                            console.log("Clicked..")             
//                     })

//Arrow anonymous Function..
document.addEventListener('click', ()=>{
                    console.log("Clicked..")             
 })
