//Function is a block of code which performs some tasks.

//function with return type and without arguments.
console.log("Function with return type and without arguments.")
function add()
{
    var a=1;
    var b=2;
    return a+b
}
var x=add()
console.log(x)
console.log()

//function with return type and with arguments.
console.log("Function with return type and with arguments.")
function add1(c,d)
{
    var e=c;
    var f=d;
    return c+d
}
var y=add1(5,5)
console.log(y)
console.log()

//function for printing odd and even numbers
console.log("Function for printing od and even numbers")
function oddeven(i)
{
    if(i%2==0)
    {
        console.log(i,"is even")
    }
    else
    {
        console.log(i,"is odd")
    }
}
for( var i=0;i<=10;i++)
{
    oddeven(i)
}