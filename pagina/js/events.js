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
//     let favoritosBtn = document.getElementById("favoritos");
//     favoritosBtn.setAttribute('style',`
//     pointer-events: initial;
//     cursor: default;
//     text-decoration: none;
    
// `)
    counter = 0;
    secBusqueda.style.display = "block";
    secFavoritos.style.display = "none";
    secCrear.style.display = "none";
    secMigif.style.display = "none";
    trends.style.display = "block";
}
);

favoritosBtn.addEventListener("click", ()=> 
{
    let favoritosBtn = document.getElementById("favoritos");
    favoritosBtn.setAttribute('style',`
    pointer-events: none;
    cursor: default;
    text-decoration: none;
    
`)

    secBusqueda.style.display = "none";
    secFavoritos.style.display = "block";
    secCrear.style.display = "none";
    secMigif.style.display = "none";
    trends.style.display = "block";

    let llave = localStorage.key('favUrl')
    const gifInfo = JSON.parse(localStorage.getItem(`${llave}`))
    console.log(gifInfo)
    const gifTitle = gifInfo.map(gifInfo => gifInfo.Title);
    const gifUrl = gifInfo.map(gifInfo => gifInfo.url);
    const gifname = gifInfo.map(gifInfo => gifInfo.Name); 

    
    alert("si quieres ver tus otros gifos añadidos recarga la pagina y podras verlos")

    
    for (let i = 0; i < gifInfo.length; i++) {
    // const console.log(gifTitle[i])
    // console.log(gifUrl[i])
    // console.log(gifname[i])

        console.log(gifTitle[i])
        console.log(gifUrl[i])
        console.log(gifname[i])

        let epmty = document.getElementById("empty")
        let myGifs= document.getElementsByClassName("favorites")
        let favElement = document.createElement("div");
        favElement.className = "gif-card fav-state";
        favElement.innerHTML = `
                    <div id="gif-id-${i}" ></div>
                        <div class="gif-box">
                            <div class="gif-icons">
                                <div class="icon-box zoom">
                                    <i class='fas fa-search-plus'></i>
                                </div>
                                <div class="icon-box downloadButton">
                                    <i class="fas fa-download"></i>
                                </div>
                                <div class= "gifid" style="display:none;">${gifUrl[i]}</div>
                                <div class="icon-box garbage">
                                    <i class="fa fa-trash"></i>
                                </div>
                            </div>
                            <div class="adaptive-text">
                                <P class="gif-name gif-title">${gifTitle[i]}</P>
                            </div>
                        </div>
        
        `
        myGifs[0].appendChild(favElement)[0];
        epmty.style.display= "none"
        let favContainer = document.getElementById(`gif-id-${i}`);
        favContainer.style.width = "260px";
        favContainer.style.height = "200px";
        favContainer.style.position = "absolute";
        favContainer.style.display = "block";

        let favGif = document.createElement("img")
        favGif.style.width = "260px";
        favGif.style.height = "200px";
        favGif.style.display = "block";
        favGif.setAttribute("src", gifUrl[i]);
        favContainer.appendChild(favGif);

    }
}
);

crearGif.addEventListener("click", ()=> 
{
    //     let favoritosBtn = document.getElementById("favoritos");
    //     favoritosBtn.setAttribute('style',`
    //     pointer-events: initial;
    //     cursor: default;
    //     text-decoration: none;
        
    // `)
    
    secBusqueda.style.display = "none";
    secFavoritos.style.display = "none";
    secCrear.style.display = "block";
    secMigif.style.display = "none";
    trends.style.display = "none";
}
);

crearGifBtn.addEventListener("click", ()=> 
{
    //     let favoritosBtn = document.getElementById("favoritos");
    //     favoritosBtn.setAttribute('style',`
    //     pointer-events: initial;
    //     cursor: default;
    //     text-decoration: none;
        
    // `)
    
    secBusqueda.style.display = "none";
    secFavoritos.style.display = "none";
    secCrear.style.display = "block";
    secMigif.style.display = "none";
    trends.style.display = "none";
}
);

misGifos.addEventListener("click", ()=> 
{
    //     let favoritosBtn = document.getElementById("favoritos");
    //     favoritosBtn.setAttribute('style',`
    //     pointer-events: initial;
    //     cursor: default;
    //     text-decoration: none;
    
    // `)
    
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