//Submit form example with single timeout.
submitform=(message,database)=>
{
    setTimeout(()=>
    {
        console.log(message)
        database()
    },1000)
}
database=()=>
{
    console.log("Form submitted successsfully.")
}
submitform("Form submit button clicked.",database)




//Post button example with multiple timeouts.
postbutton=(message,posting)=>
{
    setTimeout(()=>
    {
        console.log(message)
        posting()
    },1000)
}
posting=()=>
{
    setTimeout(()=>
    {
        console.log("Picture posting...")
        posted()
    },2000)
}
posted=()=>
{
    setTimeout(()=>
    {
        console.log("Picture posted successfully!")
    },2000)
}
postbutton("Post button clicked",posting)