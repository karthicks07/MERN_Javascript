function ispwd(password) {
    if (password === "karthick7167") {
        return 1
    }
    else {
        return 0
    }
}
function Password(password) {
    return new Promise(function (correct, incorrect) {
        setTimeout(function () {
            if (ispwd(password)) {
                correct("Password is correct")
            }
            else {
                incorrect("Password incorrect")
            }
        }, 1000)
    })
}
Password("karthick7167")
    .then(function (message) {
        console.log(message);
    })
    .catch(function (message) {
        console.log(message);
    });