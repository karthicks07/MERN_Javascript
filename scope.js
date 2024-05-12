//Local Scope
// for(let i=0;i<5;i++)
// {
//     console.log(i+11)
// }
// console.log(i)
//The above code will throw an error as i is not defined.
//It is because the i is defined using the keyword 'let'.
//'let' is a keyword used to declare a variable only inside a block
//We can use var instead let
console.log("Local Scope")
for(var i=0;i<5;i++)
{
    console.log(i+11)
}
console.log(i)
console.log()
//Block scope
console.log("Block Scope")
var a=10
console.log(a)
{
    let a=5
    let b=5
    console.log(a)
    console.log(b)
}
console.log(a)
console.log()