let array=[10,5,8,12,15,9,20,25,14,3];

//anonyoumous function
//filter the data whose greater than 10.
// let ans=array.filter(function (value){
//                     return value>=10;
// });

//with arrow functions.
// let ans=array.filter(value => value>=10);
// console.log(ans);


let members=[
                    {
                                        Name:"Ankit",
                                        Positions:"Developer"
                    },
                    {
                                        Name:"Amar",
                                        Positions:"Hr"
                    },
                    {
                                        Name:"Rohan",
                                        Positions:"UI Designer"
                    },
                    {
                                        Name:"Anshu",
                                        Positions:"Developer"
                    },
                    {
                                        Name:"Aastha",
                                        Positions:"Developer"
                    },
];
let developer=members.filter(val=> val.Positions=="Developer")

for(x of developer){
                    console.log(x);
}
console.log(developer);
