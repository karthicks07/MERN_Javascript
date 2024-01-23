isValid=()=>
{
    var v="valid"
    if(v=== "valid")
    {
        return true
    }
    else
    {
        return false
    }
}

location=()=>
{
    return new Promise((noerror,error)=>
    {
        setTimeout(()=>
        {
            if(isValid())
            {
                noerror("There is no error!")
            }
            else
            {
                error("There is error!")
            }
        },1000)
    })
}


location()
.then((noerror)=>
{
    console.log(noerror)
})
.catch((error)=>
{
    console.log(error)
})