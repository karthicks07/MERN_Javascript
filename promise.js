//In callback we are not so sure that the code will get executed in mentioned/setted time
//Due to this user or developer does not know what is happening.
//That is why we are going for promise.
//Syntax return new Promise()
function isAuthenticated()
{
    return 1;
}
function Login()
{
    return new Promise(function(response,noresponse)
    {
        setTimeout(function()
        {
            if(isAuthenticated())
            {
                response("Your Authentication is successfull")
            }
            else
            {
                noresponse("Login Falied")
            }
        },2000)
    })
}
Login()
.then(function (message) {
    console.log(message);
  })
  .catch(function (message) {
    console.log(message);
  });