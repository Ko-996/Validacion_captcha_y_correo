function validar(info){
    if(info.Pnombre.value.length<5){
        alert("Debe llenar el campo 'Primer nombre'")
    }if(info.Snombre.value.length<5){
        alert("Debe llenar el campo 'Segundo nombre'")
    }if(info.Papellido.value.length<5){
        alert("Debe llenar el campo 'Primer apellido'")
    }if(info.Sapellido.value.length<5){
        alert("Debe llenar el campo 'Segundo apellido'")
    }
}

let emailId = document.getElementById("e");
let errorMsg = document.getElementById("error-msg");
let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
function verificarEmail(){
    if(emailId.value.match(mailRegex)){
        errorMsg.style.display = 'none';
        emailId.style.border = /*'2px solid #2ecc71'*/ '';
    }
    else if(emailId.value == ""){
        errorMsg.style.display = 'none';
        emailId.style.border = '2px solid #d1d3d4';
    }
    else{
        errorMsg.style.display = 'block';
        emailId.style.border = '2px solid #ff2851';
    }

}