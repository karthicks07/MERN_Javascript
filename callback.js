//Callback is defined as a function is embedded inside or called by another function through paramaters.
//It triggers another function if the given time is encountered.
function kongu(welcome,Callback)
{
    setTimeout(function(){
        console.log(welcome)
        Callback();
    },1000)// after 1 second it will call the kec() function.
}
function kec()
{
    console.log("Dont come here")
}
kongu("Hello Karthick\nWelcome to Kongu Engineering College.",kec)//these are the arguments for the function kongu.