var $ = document.getElementById.bind(document);

var serverResponseHandler = function(res){
        console.log("getting " + res);
        if (res === "ok"){
                window.location.replace("http://127.0.0.1:8081/dashboard.html")
        }
};

var loginClickHandler = function(){
        var user = $('username').value;
        var pass = $('password').value;
        var stuff = JSON.stringify({"user": user, "pass": pass});
        httpPostAsync("http://127.0.0.1:8081/login", stuff, serverResponseHandler);

};
$('login_space').addEventListener("click", loginClickHandler);