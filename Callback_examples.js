function submitform(message,database)
{
    setTimeout(function()
    {
        console.log(message)
        database()
    },1000)
}


function database()
{
    console.log("Form submitted successsfully.")
}
submitform("Form submit button clicked.",database)


function postbutton(message,posting)
{
    setTimeout(function()
    {
        console.log(message)
        posting()
    },1000)
}
function posting()
{
    setTimeout(function()
    {
        console.log("Picture posting...")
        posted()
    },2000)
}
function posted()
{
    setTimeout(function()
    {
        console.log("Picture posted successfully!")
    },2000)
}
postbutton("Post button clicked",posting)