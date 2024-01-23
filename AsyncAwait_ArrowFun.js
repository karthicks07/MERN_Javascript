// AsyncAwait example
const AsAw= async()=>
{
    var promise=new Promise(
        (response)=>
        {
            setTimeout(()=>
            {
                response("Example for Async/Await")
            },1000)
        }
    )
    console.log(await promise)
}
AsAw()

//Real time example

const like= async()=>
{
   return new Promise((likeresponse)=>
   {
    setTimeout(()=>
    {
        likeresponse("This is my first post's like icon")
    },1000)
   })
}

const comment= async()=>
{
    return new Promise((commentresponse)=>
   {
    setTimeout(()=>
    {
        commentresponse("This is my first post's comment icon")
    },1000)
   })
}

const post= async()=>
{
    var post=new Promise(
        (postresponse)=>
        {
            setTimeout(()=>
            {
                postresponse("This is my first post.")
            },1000)
        }
    )
    var [feed,like1,comment1]=await Promise.all([post,like(),comment()])
    console.log(await feed)
    console.log(await like1)
    console.log(await comment1)
}
post()