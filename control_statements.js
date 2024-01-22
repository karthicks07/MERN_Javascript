//Looping statements
var n=10
var sum=0


console.log("for loop")
for(var i=0;i<10;i++)
{
    sum+=i
}
console.log("Sum after for loop:",sum)
console.log()


console.log("while loop")
i=0
while(i<10)
{
    sum+=i
    i++
}
console.log("Sum after while loop:",sum)
console.log()


console.log("do while loop")
i=0
do{
    sum+=i
    i++
}while(i<10);
console.log("Sum after do while loop:",sum)
console.log()


//Array 
//Javascript can hold all datatypes including functions in the array values
console.log("Array with multiple datatypes")
a1=[10,20,30]//Valid array
a2=[10,10.5]//Valid array
a3=[10,"karthick",20.5]//Valid array
a4=[10,20,true,false]// Valid array
console.log("Length of a1:",a1.length)
console.log("a1 =",a1)
console.log()
console.log("Length of a2:",a2.length)
console.log("a2 =",a2)
console.log()
console.log("Length of a3:",a3.length)
console.log("a3 =",a3)
console.log()
console.log("Length of a4:",a4.length)
console.log("a4 =",a4)
console.log()
