
$("#msgLogin").hide();
function login(){
    u = document.getElementById("user").value;
    p = document.getElementById("pass").value;

    if(u=="admin" & p== "123"){
        location.href="inicio.html";
    }else{
        $("#msgLogin").fadeIn(1000);
        $("#msgLogin").html("Error de Usuario/Contraseña");
        
    }
}