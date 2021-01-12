var sub  = "React js"
var wish =`Welcome to ${sub}`;
console.log(wish);

var tbl_name = "employee"
var sal = 50000
var query = `select * from ${tbl_name} where esal>${sal}`
console.log(query);

var u_name = "admin"
var u_pwd  = "admin"

var query = `select * from ${tbl_name} where u_name='${u_name}' and u_pwd='${u_pwd}'`;
console.log(query);


// number 

var decimal = 100
var double = 100.12345;
var hexadecimal  = 0x123
var octalnumber  = 0o123
var binary = 0b1010
console.log( decimal,double,hexadecimal,octalnumber,binary);

// boolean 
var flag = true;
console.log(flag);


// arrays 

var arr1 = [10,20,30,40,50];
console.log( arr1[0],
             arr1[1],
             arr1[2],
             arr1[3],
             arr1[4] );                 //10 20 30 40 50
console.log( arr1[5] );                 //undefined
console.log( arr1[-1] );                //undefined


var f_end = ['angular','react','vuejs']
var b_end = ['java','node','django']

f_end.forEach((element,index)=>{
    console.log(element,b_end[index])

})


var frameworsk = ["asp.net", `hibernate`,`spring`, `JPA`]

frameworsk.forEach((element,index)=>{
    console.log(element,index)
})