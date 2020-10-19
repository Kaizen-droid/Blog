tipoUsuarios = [{id:'1',nombre:'Enrique', password:'1548', tipoUsuario:'admin'}, 
            {id:'2',nombre:'Raul', password:'12589', tipoUsuario:'admin'}];

userId = 2;
idaeliminar = 0;
idaeditar = 0;

actualizar();
console.log(tipoUsuarios);

$("#nombreTema").text('Progra');

function agregarUsuario(){
    let User = $("#mensaje").val();
    userId ++;
    nuevoUser = {id: userId,nombre:User, password: '57842', tipoUsuario:'root'};
    tipoUsuarios.push(nuevoUser);
    console.log(tipoUsuarios);
    actualizar();
}

function actualizar(){
    $("#tablaUsuarios").html('');
    for(let i = 0 ; i < tipoUsuarios.length; i++){
        let fila = "<tr><td>" + tipoUsuarios[i].id + "</td><td>" + tipoUsuarios[i].nombre + "</td><td>" + tipoUsuarios[i].password + "</td><td>" + tipoUsuarios[i].tipoUsuario  + "</td>";
        fila = fila + "<td><button onclick='editarUsuario("+ tipoUsuarios[i].id +");' class='btn btn-primary' data-toggle='modal' data-target='#modificaUsuario'>";
        fila += "<i class='material-icons align-middle'>edit</i></button>";
        fila += "<button onclick='eliminarUsuario("+ tipoUsuarios[i].id +");' class='btn btn-danger' data-toggle='modal' data-target='#eliminaUsuario'>";
        fila += "<i class='material-icons align-middle'>cancel</i></button></td></tr>";
        //console.log(fila);
        $("#tablaUsuarios").append(fila);
    }
    
}

function editarUsuario(id){
    for(let i = 0 ; i < tipoUsuarios.length; i++){
        if(tipoUsuarios[i].id==id){
            $("#userEditar").val(tipoUsuarios[i].User);
            idaeditar = id;
            break;
        }
    }
}

function eliminarUsuario(id){
    idaeliminar = id;
}

function confirmaEliminar(){
    for(let i = 0 ; i < tipoUsuarios.length; i++){
        if(tipoUsuarios[i].id==idaeliminar){
            tipoUsuarios.splice(i,1);
            break;
        }
    }
    actualizar();
}

function guardaCambios(){
    for(let i = 0 ; i < tipoUsuarios.length; i++){
        if(tipoUsuarios[i].id==idaeditar){
            tipoUsuarios[i].nombre = $("#userEditar").val();
            break;
        }
    }
    actualizar();
}