var arr = [];
var i;
var max;
var min;
for(i = 0; i<10; i++) 
{
    arr.push(Math.floor(Math.random()*(1000)));
}
console.log("Array is: "+arr);
arr.sort();
console.log("2nd Maximum of Array: "+arr[8]+", 2nd Minimum of Array: "+arr[1]);