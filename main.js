function generarHora(){
let horaAhora= new Date()

let horas = horaAhora.getHours().toString().length<2? "0" + horaAhora.getHours() : horaAhora.getHours();
let minutos = horaAhora.getMinutes().toString().length<2 ? "0" + horaAhora.getMinutes() : horaAhora.getMinutes();
let segundos = horaAhora.getSeconds().toString().length<2 ? "0" + horaAhora.getSeconds() : horaAhora.getSeconds();

let horaPrincipal = `${horas}:${minutos}:${segundos}`;
//aca le pasa mi variable horaPrincipal al id del div en el html
document.getElementById("hora").innerHTML= horaPrincipal
}
setInterval(() =>{
generarHora();
},100);

