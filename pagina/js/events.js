//redireccion de la pagina


//links

let home = document.querySelector("#home");
let favoritos = document.querySelector("#favoritos a");
let crearGif = document.querySelector("#crear-gifos");
let crearGifBtn = document.querySelector("#crear-gifos-btn")
let misGifos = document.querySelector("#mis-gifos a");

// let output = document.querySelector("#btn");
      

//sections
 

let secBusqueda = document.getElementById("search-sect");
let secFavoritos = document.getElementById("favorites-sect");
let secCrear = document.getElementById("create-gif-sect");
let secMigif = document.getElementById("my-gifs-sect");
let trends = document.getElementById("trending-sect")

// let gifCard = document.getElementsByClassName("gif-card");


//evento onclick

home.addEventListener("click", ()=> 
{
    secBusqueda.style.display = "block";
    secFavoritos.style.display = "none";
    secCrear.style.display = "none";
    secMigif.style.display = "none";
    trends.style.display = "block";
}
);

favoritos.addEventListener("click", ()=> 
{
    secBusqueda.style.display = "none";
    secFavoritos.style.display = "block";
    secCrear.style.display = "none";
    secMigif.style.display = "none";
    trends.style.display = "block";
}
);

crearGif.addEventListener("click", ()=> 
{
    secBusqueda.style.display = "none";
    secFavoritos.style.display = "none";
    secCrear.style.display = "block";
    secMigif.style.display = "none";
    trends.style.display = "none";
}
);

crearGifBtn.addEventListener("click", ()=> 
{
    secBusqueda.style.display = "none";
    secFavoritos.style.display = "none";
    secCrear.style.display = "block";
    secMigif.style.display = "none";
    trends.style.display = "none";
}
);

misGifos.addEventListener("click", ()=> 
{
    secBusqueda.style.display = "none";
    secFavoritos.style.display = "none";
    secCrear.style.display = "none";
    secMigif.style.display = "block";
    trends.style.display = "block";
}
);

// output.addEventListener("click", (e)=>
// {
//   gifCard.style.display = "block";
// }
// );

//slides

// new Splide( '.splide' ).mount();

// var elms = document.getElementsByClassName( 'splide' );
// for ( var i = 0, len = elms.length; i < len; i++ ) {
// 	new Splide( elms[ i ] ).mount();
// }

