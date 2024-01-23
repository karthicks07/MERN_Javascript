

function isValid()
{
    var v="vali"
    if(v=== "valid")
    {
        return true
    }
    else
    {
        return false
    }
}

function location()
{
    return new Promise(function(noerror,error)
    {
        setTimeout(function()
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
.then(function(noerror)
{
    console.log(noerror)
})
.catch(function(error)
{
    console.log(error)
})