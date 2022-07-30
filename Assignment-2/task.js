// 1) String is Palindrome or Not


// let str=prompt('Enter the string');
// let ab=str.split('').reverse().join('');
// if(ab==str) alert('Palindrome');
// else alert('not a palindrome');

//.......................................................................................

// 2)Convert Decimal to Binary

// let num=+prompt('Enter number with base 10');
// let s='';
// if (isNaN(num)==false){
// while(num>0){
// s+=(num%2);
// num=Math.floor(num/2);
// }
// s=s.split('').reverse().join('');
// alert(s);
// }
// else alert('wrong input');

//........................................................................................


// 3)ASCII Value of Character Using charCodeAt()

//  let ch=prompt('enter the charcter');
//  alert(ch.charCodeAt(0));

 //.......................................................................................


 // 4)ASCII Value of Character Using codePointAt()
// let ch=prompt('enter the character');
// alert(ch.codePointAt(0));

//..........................................................................................

//5) Sort Words in Alphabetical Order.

//approach1
// function sotofwords(arr){
//     console.log(arr.sort());
// }

// // approach 2
// function SortAnArray(arr1) {
//     for (let i = 0; i < arr1.length - 1; i++) {
//         for (let j = 0; j < arr1.length - i - 1; j++) {
//             if (arr1[j] > arr1[j + 1]) {
//                 let swap = arr1[j + 1];
//                 arr1[j + 1] = arr1[j];
//                 arr1[j] = swap;
//             }
//         }
//     }
//     console.log(arr1);
//}
//SortAnArray(['hey','hlo','bye','akash',"vikash"])


//sotofwords(['hey','hlo','bye','akash',"vikash"])

//..................................................................................

//6)  Replace Characters of a String

// let str=prompt('enter the string');
// let ch=prompt('enter the charcter you want to replace');
// let z=prompt('enter the charcter');
// str=str.split('');
// for(let i=0;i<str.length-1;i++){
//     if (str[i]==ch){
//         str[i]=z;
//     }
// }

// str=str.join('');
// console.log(str);

// for(let i=0;i<str.length-1;i++){
//     if(str[i]==ch){
//         str=str.slice(0,i-1)+z+str.slice(i+1);
//     }
// }
// console.log(str);


//.....................................................................

// 7) Reverse a String

//let s=prompt('enter the string to be reversed');

// approach 1
// s=s.split('').reverse().join('');
// console.log('reversed string is'+s);

// approach 2

// let rev='';
// for (let i=s.length-1;i>=0;i--){
//     rev+=s[i];
// }
// console.log('reversed string is',rev);


//......................................................................................

// 8)Using object literal and 12) 12. remove a property from an object
 
// let obj={
//     name:'akash',
//     age:45,

// }
// // adding property/key in existing object
// obj['is Singer']='yes';

// console.log(obj)

// // remove property of existing object

// delete obj.age;

// console.log(obj);

// // printing all the keys 
// console.log(Object.keys(obj));

// // printing all the values 
// console.log(Object.values(obj));


//.....................................................................................

//  9)Check the Number of Occurrences of a Character in the String

// let st=prompt('enter the string');
// let ch=prompt('enter the character to be count');

// let count=0;
// for(let i=0;i<st.length;i++){
//     if (st[i]==ch) count++;
// }
// console.log(ch+' letter comes '+count+' times');

//...........................................................................................


// 10). Convert the First Letter of a String into UpperCase
// let str=prompt('enter the string');
// console.log(str[0].toUpperCase()+str.slice(1));

//...................................................................

// 11)Count the Number of Vowels in a String


// approach 1
//  const vowelCount = str => {
//     let vowels = /[aeiou]/gi;
//     let result = str.match(vowels);
//     let count = result.length;
  
//     console.log(count);
//   };
//   vowelCount('helloii')

// //approch 2
//  let vow='aeiouAEIOU';
//  let str=prompt('enter the string');
//  let a='';
//  for(let i=0;i<str.length;i++){
//     if(a.includes(str[i])){
//         continue;
//     }
//     if(vow.includes(str[i])){
//         a+=str[i];

//     }

//  }
//  console.log(a.length);


//.............................................................................

// 13)Check Whether a String Starts and Ends With Certain Characters
//  let str=prompt('enter the string');
//  let start=prompt('enter to check starting character');
//  let end=prompt('enter character to match with last charcter');

// //  if (str[0]==start && str[str.length-1]==end) alert('matched');
// //  else alert('not matched');

// console.log(str.startsWith(start) && str.endsWith(end));

//..................................................................................

 //14) Check if a Key Exists in an Object
// let user={
//     name:'akash',
//     age:20,
//     isSinger:true
// }
// // for(let key in user){
// //     if ('isSinger'==key) console.log(true);
// // }

// alert(user.hasOwnProperty('isSinger'));

//...................................................................................

//15) Clone a JS Object
// let user={
//         name:'akash',
//         age:20,
//         isSinger:true
//     }

//     let user1=Object.assign({},user);
//     console.log(user1);

//..........................................................................

//16) Loop Through Object Using for...in


// let user={
//     name:'akash',
//     age:20,
//     isSinger:true
// }

// for(let keys in user){
//     console.log(keys,"=",user[keys]);
// }

//....................................................................................

//17) Merge Property of Two Objects

// let user={
//     name:'akash',
//     age:23
// }

// let user2={
//     isSinger:'yes'
// }

// console.log(Object.assign(user,user2));  


//......................................................................................

//18) Count the Number of Keys/Properties in an Object


// let user={
//         name:'akash',
//          age:23,
//          isAdmin:true
//      }
// console.log(Object.keys(user).length)

//..................................................................................

//19)  JavaScript parseInt()



//...................................................................................

//20)Arrow function in an object

// let user={
//     name:'abc',
//     obj:{
//         obj1:{
//             obj2:(a,b)=>{ return a+b;}
//         }
//     }
// }
// let sum=user.obj.obj1.obj2(2,3)
// alert(sum);

// 21)Generate Random Strings

// function makeid(length) {
//     var result           = '';
//     var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
//     for ( var i = 0; i < length; i++ ) {
//       result += characters.charAt(Math.floor(Math.random() * 
//  charactersLength));
//    }
//    return result;
// }

// console.log(makeid(5));


//....................................................................................

// 22)Check if a String Starts With Another String

// let s=prompt('enter the string');
// let a=prompt('enter to string to matchh with substring');
// let sub=s.slice(0,a.length);
// if(sub==a){
//     alert('matched');
// }
// else alert('not matched');

//...................................................................................

// 23)Program to Trim a String

//let str='    hello bye hey     ';
//approach 1
//console.log(str.trim());


//approach 2
// let i=0;
// while(str[i]==' '){
//     i++;
// }
// str=(str.slice(i));
// let j=str.length-1;
// while(str[j]==' '){
//     j--;
// }

// str=str.slice(0,j+1);



// console.log(str);
// console.log(str.length);

//.................................................................................

// 24)Convert Object to String
// let user={
//     name:'akash',
//     age:23,
//     isSinger:true
// }

//approach 1
// console.log(JSON.stringify(user));

//approach 2
//   function objToString(object) {
//     var str = '';
//     for (var k in object) {
//       if (object.hasOwnProperty(k)) {
//         str += k + ':' + object[k] + '\n';
//       }
//     }
//   console.log(str);
//     return str;
//   }
//   objToString(user);

//............................................................................
  // 25)Remove a char from a String

//   let str=prompt('enter the string');
//   let ch=prompt('enter the character to be removed');
  
//   while(str.includes(ch)){
//     let i=str.indexOf(ch);
//     str=str.slice(0,i)+str.slice(i+1);
//   }
//   console.log(str);


//...............................................................................

// 26) String to Base64

// const str = prompt("enter the string"); 
// const result = window.btoa(str);
// console.log(result);

// // 27) BAse64 to syting
// const result1 = window.atob(result);
// console.log(result1);

//................................................................

// 28)Program to Perform Case Insensitive String Comparison

// let str1=prompt('enter the first string');
// let str2 =prompt('enter the  second string ');
//  str1=str1.toUpperCase();
//  str2=str2.toUpperCase();
// if(str1==str2){
//     console.log('strings matched!!');
// }else
// console.log('not matched');
//................................................................

//29) Pyramid star pattern in javascript
// const n=prompt('enter the value of n');
// let string = "";
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// alert(string);

//...............................................................

//. Reversed pyramid star pattern
// const n =prompt(' enter the value of n');
// let string = "";
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 0; j <=i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 1; k <= 2 * (n-i) - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// alert(string);




