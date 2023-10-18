//constructor use function for creating an class before ES6.

function Person(first,last,age){
                    this.firstName=first;
                    this.lastName=last;
                    this.Age=age;

                    this.changeAge=function(newAge){
                                    this.Age=newAge;    
                    }
                    function sayHi(msg){
                                        this.message=msg;
                    }
}

let person1=new Person("Ankit","Kumar",23);

let person2=new Person("Aman","Kumar",24);
person2.changeAge(23);
console.log(person1);
console.log(person2);

