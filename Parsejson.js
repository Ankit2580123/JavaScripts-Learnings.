let data=[
                   `{
                                        "Name":"Ankit Kumar",
                                        "Age":23,
                                        "Branch":"CSE",
                                        "College":"RVSCET",
                                        "Languages":["C++","Python","JavaScript","CSS"],
                                        "Address":{
                                                            "city":"Bokaro",
                                                            "state":"Jharkhand",
                                                            "pincode":825102
                                        }
                    }`
]
let dObjects=JSON.parse(data);
console.log(dObjects["Languages"][1]);
console.log(dObjects["Address"]["state"]);
for(let x in dObjects){
                    console.log(dObjects[x]);

}