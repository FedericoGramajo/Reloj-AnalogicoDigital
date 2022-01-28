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


function horaAnalogico(){
horaAhora= new Date();
horas=horaAhora.getHours();
minutos= horaAhora.getMinutes() ;
segundos=horaAhora.getSeconds();

  porcenHoras = horas>=12 ? horas/12*360 : horas/24*360;
  porcenHoras += minutos / 60 * 30

  porcenMinutos = minutos / 60 * 360;
  porcenSegundos = segundos/ 60 * 360;

  document.getElementById("horas").style.transform = `rotate( ${porcenHoras}deg)`;
  document.getElementById("minutos").style.transform = `rotate( ${porcenMinutos}deg)`;
  document.getElementById("segundos").style.transform = `rotate( ${porcenSegundos}deg)`;

//   document.getElementById("horas").style.transform = "rotate("+ porcenHoras +"deg)";
//   document.getElementById("minutos").style.transform = "rotate("+ porcenMinutos +"deg)";
//   document.getElementById("segundos").style.transform = "rotate("+ porcenSegundos +"deg)";
 }
setInterval(() =>{
    horaAnalogico();
    },100);
    
