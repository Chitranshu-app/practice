//p1 Factorial of a number
function factorial(n){
 let f=1;
if (n<0 || isNaN(n)==false || !Number.isInteger(n)) alert('not exist');
else if (n==0 || n==1){
    alert('1');
}
else{
    for(let i=n;i>=2;i--){
        f*=i;
    }
    alert(" Its factorial is:"+f);
}
}
//factorial(4.5);

//p2 fibonacci series
function fibonacci() {
    let limit = prompt("enter the limit of series");
    let a = 0, b = 1, sum = 0;
    let s = "";
    if(isFinite(limit)==false) alert('enterd limit is a string');
    else if (limit<=0) alert('oops, you have entered negative number');
    else if(!Number.isInteger(limit)) alert('you have entered float number');
    else if (limit==1) console.log(a);
    else if (limit==2) console.log(`${a},${b}`);
    else {
    s =  a + "," + b;
    for (let i = 2; i <limit; i++) {
        sum = a + b;
        s+=','+sum;
        a = b;
        b = sum;
    }
    console.log(s);
}
}
//fibonacci();


// p3 Create a function to check whether the number is prime or not
function prime() {
    let num = prompt('enter the number to check whether its prime or not');
    let c = 0;
    if(isFinite(num)==false) alert('oops you have entered string');
    else if (num<0) alert('Negative integer cannot be prime');
    else if(!Number.isInteger(num)) alert('entered number is float');
    else if (num==1 || num==0) alert(num+' is not a prime number');
    else if(num==2) alert('2 is smallest prime number');
    else if (num > 2) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0){ 
            c++;}
        }
        if (c >0) alert("Not Prime");
        else alert('prime');
    }

}
//prime();


// p4  Create a function to calculate the sum of 2 numbers


// function add(num1, num2){
//     return num1 + num2;
// }
// let flag;
// do{
//     flag=0;
//     let num1=parseFloat(prompt('Enter first number :  '));
//     if(isNaN(num1)){
//         alert("Please enter valid number.....");
//         flag++;
//         continue;
//     }
//     let num2=parseFloat(prompt('Enter second number : '));
//     if(isNaN(num2)){
//         alert("Please enter valid number.....");
//         flag++;
//     } else{
//         alert(add(num1, num2));
//     }
// }while(flag!=0);

//Sum();


// p5 Create a function to calculate multiplication of 2 numbers

// function mul(num1, num2){
//     return num1 * num2;
// }
// let flagg;
// do{
//     flag=0;
//     let num1=parseFloat(prompt('Enter first number :  '));
//     if(isNaN(num1)){
//         alert("Please enter valid number.....");
//         flagg++;
//         continue;
//     }
//     let num2=parseFloat(prompt('Enter second number : '));
//     if(isNaN(num2)){
//         alert("Please enter valid number.....");
//         flag++;
//     } else{
//         alert(mul(num1, num2));
//     }
// }while(flagg!=0);

//mul();

//p6 Create a function to find the largest number from an array
function largestnum(arr) {
   
    let max = 0;
    for (let i = 0; i <arr.length; i++) {
        if (arr[i] > max)
            max = arr[i];

    }
    alert("largest element is:" + max);
}
//largestnum([5,7,8,9]);


// p7 Create a function to find the smallest number from an array
function smallestnum(arr) {
    
    let min = arr[0];
    for (let i = 0; i <arr.length; i++) {
        if (arr[i] < min)
            min = arr[i];

    }
    alert("smallest element is:" + min);
}
//smallestnum([5,7,8,9,-2]);


// p8 Write a function to search a given number in an array. (True/false)
function searchnum(arr) {
    
    let x = prompt('enter the number to be searched ');
    let flag=0;
    for (let k = 0; k < arr.length; k++) {
        if (arr[k] == x) {
            flag++;
            alert('True, number is present in array');

        }
    

    }
    if(flag==0) alert('Number is not present');

}
//searchnum([1,2,3,4,5]);

// p9 Write a function to reverse an array of strings.
function Reverse(arr) {
    let a = [];
    for (let t = arr.length - 1; t >= 0; t--) {
        let z = arr[t];
        a.push(z);
    }
    console.log(a);
}
//Reverse([5,'hello',7]);

// p10  Write a function to find the length of a string.
function lengthofString() {
    var st = prompt('enter the String');
    let arr2=[...st];
    let k=0;
    for (let i of arr2){
        k++;
    }
    alert(k);
}
//lengthofString();

// p11 Write a function to find the length of an array.
function lengthofArray(arr) {
   let i,j=0;
   for(i of arr){
    j++;
   }
   alert(j);
}
//lengthofArray([5,8,9,10,11]);

// p12 Write a function to find the area of a triangle.
function AreaofTriangle() {

let side1 = parseFloat(prompt('Enter side1: '));
let side2 = parseFloat(prompt('Enter side2: '));
let side3 = parseFloat(prompt('Enter side3: '));
if(side1<0 || side2<0 || side3<0) alert('side of triangle cannot be negative and zero');
else if((side1+side2)>=side3 || (side2+side3)>=side1 || (side1+side3)>=side2)
{
const s = (side1 + side2 + side3) / 2;

const areaValue = Math.sqrt(
  s * (s - side1) * (s - side2) * (s - side3)
);

alert(  `The area of the triangle is ${areaValue}`);
}
else alert('triangle is not possible');
}
//AreaofTriangle();

// p13 Create a function to find the prime number till the given number
function PrimetillN() {
    var lim = prompt('Enter the limit ');
    if (lim<=0 || isFinite(lim)==false) alert('not possible');
    else if (lim==1) alert('prime till 1 not exist');
    else{
    let s = '';
    for (let j = 2; j <= lim; j++) {
        let cv = 0;
        for (let i = 2; i < j; i++) {
            if (j % i == 0)
                cv++;
        }
        if (cv == 0)
            s += j + ",";
    }
    console.log(s);
}
}
//PrimetillN();


// p14 Create a function to find the square root of a given number
function SquareRoot() {
    let num1 = prompt('Enter the number ');
    alert('Square root is : ' + (num1 ** 0.5));
}
//SquareRoot();


// p15  Create a function to sort an array.
function SortAnArray(arr1) {
    for (let i = 0; i < arr1.length - 1; i++) {
        for (let j = 0; j < arr1.length - i - 1; j++) {
            if (arr1[j] > arr1[j + 1]) {
                let swap = arr1[j + 1];
                arr1[j + 1] = arr1[j];
                arr1[j] = swap;
            }
        }
    }
    console.log(arr1);
}
SortAnArray([45, 87, 2, 3,'hello','abcdef']);




