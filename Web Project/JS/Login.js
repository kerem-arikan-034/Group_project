var x=document.getElementById('login');
		var y=document.getElementById('register');
		var z=document.getElementById('btn');
function register()
{
    x.style.left='-400px';
    y.style.left='50px';
    z.style.left='110px';
}
function login()
{
    x.style.left='50px';
    y.style.left='450px';
    z.style.left='0px';
}

//Check Login Credentials
function LoginCheck(){
    var user = document.getElementById('Email').value;
    var pass = document.getElementById('Password').value;

    if (user == ""){
        $("#Email").next().text("This field is required");
    }
    if (user == "admin@gmail.com" && pass == "bear") {
        window.location.href="Home.html";
    } 
    else {
        document.getElementById("p1").innerHTML="Invalid Username or Password";
        document.getElementById("p1").style.color="Red";
        // alert('incorrect username or password');
      }
}

//Register
function Register(){
    var Password = document.getElementById("password").value;
    var ConfirmPassword = document.getElementById("confirmpassword").value;

    if(ConfirmPassword != Password){
        alert("Password does not match. Password and Confirmpassword should be same.");
    }

}