// Map is a key-value pair
//Syntax is map=new Map([["key","value"],["key","value"]])

mapeg=new Map([
    ["id","21CDR017"],
    ["Name","Karthick"],
    ["Dept","CSD"],
    ["College","Kongu"]
])
console.log(mapeg)
console.log()

//for in loop in map
console.log("for in loop in map")//for in loop will not work in map. Instead use for of loop. it will return empty.
for(var i in mapeg)
{
    console.log(i)
}
console.log()

//for of loop in map
console.log("for if loop in map")
for(var i of mapeg)
{
    console.log(i)
}
console.log()

//check if the element present in map
console.log("check if the element present in map")
console.log(mapeg.has("Name"))
console.log()

//adding element in map
mapeg.set("Age","20")
console.log("Map after adding Age")
console.log(mapeg)
console.log()
mapeg.set("City","Namakkal")
console.log("Map after adding City")
console.log(mapeg)
console.log()

//deleting element in map
mapeg.delete("City")
console.log("Map after deleting City")
console.log(mapeg)
console.log()
