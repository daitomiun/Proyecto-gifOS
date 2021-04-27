//redireccion de la pagina


//links

let home = document.querySelector("#home");
let favoritosBtn = document.querySelector("#favoritos a");
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

favoritosBtn.addEventListener("click", ()=> 
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


// eventos mouseOver

//gifcard

    //zoom , download, heart

    
    
    
    
    
    
    // window.onload = function(){
        //     let zoom = document.getElementById("zoom");
        //     let download = document.getElementById("download");
        //     let heart = document.getElementById("heart");
        
        //     heart.addEventListener("click", favoritos)
        //     heart.addEventListener("click", ()=>
        //     {
            //         console.log("funciona")
            //     })
            // }
            
            // let zoom = document.getElementById("zoom");
            // let download = document.getElementById("download");
            // let heart = document.querySelector(".gif-icons #heart");
            
    //     document.addEventListener('DOMContentLoaded', function () {
    //         console.log(heart)
    //         let imgCatch = document.getElementsByTagName("img");
        
    //         console.log(imgCatch.namedItem)
            
    //         heart.addEventListener("click", favoritos)
    // });
    
    
    // function favoritos(element){
    //     //let heart = document.querySelector(".gif-icons #heart");
    //     console.log(element)
    //     console.log("funciona?")
        

    // }
    // function maximizar(){
    //     console.log("maximiza?")
    //     let max = document.querySelector(".gif-icons #zoom");
    //     console.log(max)
        
    // }
    //  async function descargar(){
    //     // console.log("descarga?")
    //     let imgCatch = document.querySelector("#download img");
        
    //     console.log(imgCatch)
        
    // }
    // const downloadGif = async (url, title) => {
    //     let blob = await fetch(url).then((img) => img.blob());
    //     invokeSaveAsDialog(blob, title + '.gif');
    // };






    //gif para para propagacion

  
    

    // Array.from(NodeList, stopGif =>
                    
    //     stopGif.addEventListener("mouseover", ()=>{

    //         let limit = 48

    //         for(let i = 0; i<=limit; i++){

    //             let stopGif = document.querySelector(`.gif-${i} img`).getAttribute('src');
    //             stopGif.stopPropagation("img");
    //         }



    // })

    // );