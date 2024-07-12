//uzma imran 
//i tried to include every possible condition in array and its method

//Array

let friend = "yura";
let friend2 ="niba";
let friend3 ="sania";
let friend4 = "asma";
let friend5 ="viniza";

// now we can use array for passing the multiuple values in a single variable              
//number 1
//string array

let friends :string[]=["yura","niba","sania","asma","viniza"];
         //  index numbr  0       1             2        3
 
         console.log(friends);
         console.log(friends[2]);

//number 2 is 
//number array

let numbers :number[]=[1,2,3,4,5,6,7,8]
console.log(numbers[6]);

//number3 is 
//boolean array

let boolean:boolean[]=[true,false,true,false];
console.log(boolean);

/////////////mixed array//////////////////////


let mixedarray:(string|number|boolean)[]=["uzma",25,"thursdaymorning",true];
console.log(mixedarray);
let newarray = mixedarray[4]; // undefined
console.log(newarray);


////////////////mixed array/////////////////////////////

let neastedarray:string[][]=[["uzma","yura"],["haram","sania"],["vini","asma"]]
console.log(neastedarray.length);// 3leanth
let newneastedarray = neastedarray[1][1];
console.log(newneastedarray);// sania

console.log(newneastedarray.length);//5leanth


//////////////////index access///////////////////

let  number :number[][]=[[45,88,89,76],[23,33],[23,22]];
console.log(number[0][1]);//88
console.log(number.length);//3
let newarray2 = number[1][2]
console.log(newarray2);//we can not add here .length method b,cz of its number

/////////////////////methods///////////////////////////////
let methodPush:number[]=[1,2,3,4]; //add one or m ore elementat the end of an arra
methodPush.push(5,6,7,8,9)//1,2,3,4,5,6,7,8,9
console.log(methodPush);


/////////////////////pop method//////////////////////////

let methodPop:string[]=["html","css","javascript","typscript"];
methodPop.pop(); // it removes the last element of array so we dont pass any vale in brackets()
console.log(methodPop); // result html,css

/////////////////////shift////////////////////////////////

let methodShift:number[]=[1,2,3,4,5]
methodShift.shift() //it removes the first elements from the starting
console.log(methodShift); //2,3,4,5

////////////////////////unshift////////////////////////////
let methodUnshift:string[]=["uzma","yusra","niba","sania"];
methodUnshift.unshift("haram")
console.log(methodUnshift);//add "haram " in start

///////////////////////slice///////////////////////////////

let methodSlice:number[]=[1,2,3,4,5,6];
let xyz = methodSlice.slice(2,4);//result 3,4 
console.log(xyz); //3,4
console.log(xyz.length) // 2

///////////////////////slice with a index number which is not in array////////////

 let response:number[]=[1,2,3,4,5,6,7,8,9];
       //index          0 1 2 3 4 5 6 7 8
 let response2 = response.slice(4,9);
 console.log(response2);//5, 6,7,8,9
    //index            // 0  1 2 3 4

 let response3 =response2.slice(2)
 console.log(response3);
 
////////////////////////splice method of array////////////////////////////////////

let result:string[]=["small","medium","large","x-large","xx-large","xl","xxl"];
        //index         0         1     2        3         4         5    6
result.splice(2,2,);
console.log(result);//'small', 'medium', 'xx-large', 'xl', 'xxl'

result.splice(0,0,"x-small")
console.log(result);//'x-small', 'small', 'medium', 'xx-large', 'xl', 'xxl' 

result.splice(4,0,"xxxl")
console.log(result);//'x-small', 'small','medium',  'xx-large','xxxl','xl','xxl'

result.splice(-5,2,"medium1")// -7     -6        -5         -4      -3      -2     -1
console.log(result);//'x-small', 'small', 'medium1', 'xxxl', 'xl', 'xxl' 

result.splice(6,2,"xyz"); //delet koch nhi hoga end main add hoga kun k 6 index i not included
console.log(result);//'x-small', 'small','medium1', 'xxxl','xl', 'xxl','xyz'

result.splice(-8,1,"start")//out of index hai -8 phir bhi start say ek delet hojeyga 1 ki waja sy
//or "start" add hojaeyga shuro main just like unshift method
console.log(result);// start,small,medium1, xxxl,xl,xxl,xyz


















 
























































let lastScore = number[3]
console.log();




























         
         
































































// const numbers = [1,2,3,4,5,6]
// numbers.forEach( number=>{
//     console.log(number);
    

// });

// const string = ["uzma","yusra","niba"];
// string.forEach(string=>{
//     console.log(string);
    
// })

// let matrix:number[][]=[[1,2,3],[4,5,6],[7,8,9]]
// matrix.forEach((row)=>row.forEach((num)=>
// console.log(num)))













