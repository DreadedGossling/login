console.log("hello world")

let a = 33;
let b = 20;
console.log ('the sum of a and b is :', a+b)
console.log ('the product of a and b is :', a*b);


let x = 2;
x += 2; 
x /= 2;
console.log (x);


//array

arr  = [1,'ravi',false,33];
arr.pop ();
arr.shift ();
arr.length;
arr.sort();
arr.push (87);
console.log(arr);
console.log(arr[2]);


//object

let address = {name : 'ravi', age : 25, city : 'Dhanbad'};
console.log (address.name);
console.log (address.age);


//comparision operator

let c = 34;
let d = 45;
console.log (c == d);
console.log (c <= d);
console.log (c < d);
console.log (c >= d);
console.log (c > d);


//logical operator

console.log (true && true);
console.log (true && false);
console.log (false && false);
console.log (false && true);
console.log (true || false);
console.log (true || true);
console.log (true || false);
console.log (true || true);
console.log (!false);
console.log (!true);


//functions

function sum (a,b) {
    return a+b;
}
console.log (sum(2,9));
         (or)
sum = (a,b) => {
    return a+b;
}
console.log (2+5);


console.log(document.getElementById ('head'));
console.log(document.getElementsByClassName ('.container'));
console.log(document.getElementsByTagName ('button'))
console.log(document.querySelector ('h'));
console.log(document.querySelectorAll ('h'));


//for loop

marks = [22,43,78,61,96];
console.log (marks);
for ( let i = 0 ; i < marks.length ; i++ ){
     console.log (marks[i]);
}


//for-each loop

marks.forEach (element => {
    console.log (element);
});


//while loop

let j = 0;
while (j < marks.length) {
    console.log ( marks[j] );
    j++ ;
}


// switch statement

let day = 'sunday';
switch (day){
    case 'monday': console.log ('this is monday');
    break;
    case 'tuesday': console.log ('this is tuesday');
    break;
    case 'wednesday': console.log ('this is wednesday');
    break;
    case 'thursday': console.log ('this is thursday');
    break;
    case 'friday': console.log ('this is friday');
    break;
    case 'saturday': console.log ('this is saturday');
    break;
    case 'sunday': console.log ('this is sunday');
    break;
    default: console.log ('this is not a day');
    break;
}


//if-else

let age = 5;
if (age < 25){
    console.log ('child')
}
else if (age > 25){
    console.log ('adult')
}

//setInterval & setTimeout

log = () => {
    console.log ('hii');
}
clr = setInterval (log,2000); //clearInterval (clr);  <!--to stop interval-->
 setTimeout (log,10);


let name = 'This Is a Paragraph';
 console.log(name);
 console.log(name.length);
