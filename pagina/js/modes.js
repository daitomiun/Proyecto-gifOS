//modo oscuro y calro

function cambiarModo()
{
    var cuerpoweb = document.body;
    cuerpoweb.classList.toggle("oscuro");


    document.querySelector("#modo").hidden = true;
    document.querySelector("#modo").hidden = false;

    var state = false;
    var modoN = document.getElementById("modo");
    modoN.innerHTML = "modo nocturno"
    
    modoN.onclick = function(){
        state = !state;
        if (state)
        {
            modoN.innerHTML = "modo nocturno";
            
        } else
        {
            modoN.innerHTML = "modo diurno";
        }
        cuerpoweb.classList.toggle("oscuro");
        
    }
    
}

//eventos







