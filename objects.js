//Object delaration
// How will you declare objects?
// var = new obj();
// var a={};
// var a={"dept":"CSD","Clg":"Kongu"};


// 1st method of object
console.log("1st Way of object declaration")
var customerDetails = {"Name":"Karthick","Age":"20","Phone":"6381145567"}// comma is optional for last key pair of the object
console.log(customerDetails)
//Adding new details
customerDetails["id"]="21CDR017"
console.log(customerDetails)
console.log()
//Key will not hold "" because it has a inbuilt ""


// 2nd method of object
console.log("2nd Way of object declaration")
var studentDetails = {}
studentDetails["Name"]="Karthick"
studentDetails["id"]="21CDR017"
studentDetails["Dept"]="CSD"
studentDetails["College"]="Kongu"
studentDetails["Age"]=20
console.log(studentDetails)
console.log()

// 3rd method of object
console.log("3rd Way of object declaration")
var staffDetails =new Object();
staffDetails["Name"]="Senthil"
staffDetails["Age"]="45"
staffDetails["Dept"]="MECH"
staffDetails["Designation"]="Assistant Professor"
staffDetails["College"]="KSR"
console.log(staffDetails)
console.log()