//Creating promises
//promise 1st types
const promise=new Promise(function(resolve,reject){
                    setTimeout(function(){
                                        console.log("Promise Called..");
                                        resolve();
                    },1000)
});
promise.then(function(){
                    console.log("Promise Consumed..");
})
//promise 2nd types
new Promise(function(resolve,reject){
                    setTimeout(function(){
                                        console.log("Promise2 Called...");
                                        resolve();
                    },1000)
}).then(function(){
                    console.log("Promise 2 Consuumed..");
})

//promises 3rd types
const thirdPromise=new Promise(function(resolve,reject){
                    setTimeout(function(){
                                        resolve({username:"Ankit", email:"xyz@gmail.com"});
                    },1000)
})
thirdPromise.then(function(user){
                    console.log(user);
})
//promise 4th types

const fourthPromise=new Promise(function(resolve,reject){
                    setTimeout(function(){
                                        let error=false;
                                        if(!error){
                                                            resolve({username:"Ankit",age:"23"})
                                        }else{
                                                            reject("ERROR: Something went Wrong")
                                        }
                    },1000)
})
fourthPromise.then(function(user){
                    console.log(user);
                    return user.username;
}).then(function(username){
                    console.log(username);
}).catch(function(error){
                    console.log(error);
}).finally(function(){
                    console.log("Promise is Either Resolve or Reject")
})

//Promise 5th Types

const fifthPromise=new Promise(function(resolve,reject){
                    setTimeout(function(){
                                        let error=false;
                                        if(!error){
                                                            resolve({username:"JavaScript",password:"1234"});
                                        }else{
                                                            reject("JS Error: Something went wrong.");
                                        }
                    },1000)
});

async function fifthPromiseConsumed(){
                   
                    try{
                                        const response= await fifthPromise; //wait for executing and happening of promises
                                        console.log(response);
                    }
                    catch(error){
                                        console.log(error);
                    }

}
fifthPromiseConsumed();