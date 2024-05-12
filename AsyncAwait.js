// async function AsAw()
// {
//     var promise=new Promise(
//         function(response)
//         {
//             setTimeout(function()
//             {
//                 response("Example for Async/Await")
//             },1000)
//         }
//     )
//     console.log(await promise)
// }
// AsAw()

//Real time example

async function like()
{
   return new Promise(function(likeresponse)
   {
    setTimeout(function()
    {
        likeresponse("This is my first post's like icon")
    },1000)
   })
}

async function comment()
{
    return new Promise(function(commentresponse)
   {
    setTimeout(function()
    {
        commentresponse("This is my first post's comment icon")
    },1000)
   })
}

async function post()
{
    var post=new Promise(
        function(postresponse)
        {
            setTimeout(function()
            {
                postresponse("This is my first post.")
            },5000)
        }
    )
    var [feed,like1,comment1]=await Promise.all([post,like(),comment()])
    console.log(feed)
    console.log(await like1)
    console.log(await comment1)
}
post()