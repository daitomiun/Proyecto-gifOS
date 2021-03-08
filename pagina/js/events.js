//redireccion de la pagina


//links

let home = document.querySelector("#home ");
let favoritos = document.querySelector("#favoritos a");
let crearGif = document.querySelector("#crear-gifos");
let crearGifBtn = document.querySelector("#crear-gifos-btn")
let misGifos = document.querySelector("#mis-gifos a");



//sections

// let secBusqueda = document.getElementById("search-sect").style.display = "block";
// let secFavoritos = document.getElementById("favorites-sect").style.display = "none";
// let secCrear = document.getElementById("create-gif-sect").style.display = "none";
// let secMigif = document.getElementById("my-gifs-sect").style.display = "none";

let secBusqueda = document.getElementById("search-sect");
let secFavoritos = document.getElementById("favorites-sect");
let secCrear = document.getElementById("create-gif-sect");
let secMigif = document.getElementById("my-gifs-sect");

//evento onclick

home.addEventListener("click", (e)=> 
{
    secBusqueda.style.display = "block";
    secFavoritos.style.display = "none";
    secCrear.style.display = "none";
    secMigif.style.display = "none";
}
);

favoritos.addEventListener("click", (e)=> 
{
    secBusqueda.style.display = "none";
    secFavoritos.style.display = "block";
    secCrear.style.display = "none";
    secMigif.style.display = "none";
}
);

crearGif.addEventListener("click", (e)=> 
{
    secBusqueda.style.display = "none";
    secFavoritos.style.display = "none";
    secCrear.style.display = "block";
    secMigif.style.display = "none";
}
);

crearGifBtn.addEventListener("click", (e)=> 
{
    secBusqueda.style.display = "none";
    secFavoritos.style.display = "none";
    secCrear.style.display = "block";
    secMigif.style.display = "none";
}
);

misGifos.addEventListener("click", (e)=> 
{
    secBusqueda.style.display = "none";
    secFavoritos.style.display = "none";
    secCrear.style.display = "none";
    secMigif.style.display = "block";
}
);




