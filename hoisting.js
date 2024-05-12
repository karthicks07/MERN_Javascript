//Variable hoisting
//if we define a variable after print statement, it will throw undefined value.
//if we define a variable using 'let', it will throw reference error because of local scope.
// console.log(b)
// var b=10
// console.log(a)
// let a=10

//Functional hoisting
//Normal function
function fun()
{
    var a=10
    return a
}
console.log(fun())

//Function with hoisting
kongu(10,20)
function kongu(a,b)
{
    for(var i=a;i<b;i++)
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
}