//modo oscuro y calro

var cuerpoweb = document.body;
var modo = document.querySelector("#modo a");


modo.onclick = function()
{
    cuerpoweb.classList.toggle("oscuro");
    modo.innerHTML = cuerpoweb.classList.contains("oscuro") ? "modo diurno" : "modo nocturno";
}







