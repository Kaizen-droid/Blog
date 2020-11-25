
$("#msgLogin").hide();
function login(){
    u = $("#user").val();
    p = document.getElementById("pass").value;

    $.get("login.php", {user:u,pass:p}).done(function(respuesta){
        console.log(respuesta);
    });

    if(u=="admin" & p== "123"){
       // location.href="inicio.html";
    }else{
        $("#msgLogin").fadeIn(1000);
        $("#msgLogin").html("Error de Usuario/Contraseña xd");
        
    }
}