// Set is a collection of unique values. Syntax is var_name= new Set()

SetExample = new Set(["karthick","senthil","kongu"])// if the set is given inside array bracket, it will print all elements in set.
console.log(SetExample)
SetExample.add("kec")
SetExample.add("senthil")// since "senthil" is already in set, it removes the duplicated elements in the set.
console.log(SetExample)
console.log()

//for in loop in set. for in loop will not work in set. Instead use for of loop. it will return empty.
console.log("for in loop in set")
for(key in SetExample)
{
    console.log(key)
}
console.log()

//for of loop in set.
console.log("for of loop in set")
for(key of SetExample)
{
    console.log(key)
}
console.log()

//for each loop in set
console.log("for each loop in set")
var setarray=Array.from(SetExample)
setarray.forEach(element => {
    console.log(element)
});
console.log()

//for in loop for setarray
console.log("for in loop for set after converting set to array")
for(var i in setarray)
{
    console.log(setarray[i])
}
console.log()