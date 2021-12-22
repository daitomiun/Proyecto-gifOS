//redireccion de la pagina
// fetch (`js/events.js`, {
//     method: 'GET',
//     headers: {
        
//         "Access-Control-Allow-Credentials": true,
//         "Accept": "application/json"
// }
// })

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
    let favoritosBtn = document.querySelector("#favoritos a");
    favoritosBtn.setAttribute('style',`
    pointer-events: initial;
    cursor: default;
    
    
`)

    let miBtn = document.querySelector("#mis-gifos a")

    miBtn.setAttribute('style',`
    pointer-events: initial;
    cursor: default;
    

    `)
    // let favSect = document.getElementById("favs")
    // let favorites = document.getElementById("favorites")

   
    // // favSect.parentNode.removeChild(favorites)

    
    // if (favorites.parentElement==favSect) {
    //         favSect.removeChild(favorites);
    // }
    
    // let myGif = document.getElementById("my-gifs")
    // let myGifSect = document.getElementById("my-gifs-sect")
    // // favSect.parentNode.removeChild(favorites)
    
    // if (myGif.parentElement==myGifSect) {
        
    //     myGifSect.removeChild(myGif);
    // }

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
        let favoritosBtn = document.querySelector("#favoritos a");
        favoritosBtn.setAttribute('style',`
        pointer-events: none;
        cursor: default;
        text-decoration: none;
        
    `)
    
    let miBtn = document.querySelector("#mis-gifos a")

    miBtn.setAttribute('style',`
    pointer-events: initial;
    cursor: default;
    

    `)

     let favSect = document.getElementById("favs")
    let favorites = document.getElementById("favorites")

   
    // favSect.parentNode.removeChild(favorites)

    
    if (favorites.parentElement==favSect) {
            favSect.removeChild(favorites);
    }


    // let myGif = document.getElementById("my-gifs")
    // let myGifSect = document.getElementById("my-gifs-sect")
    // // favSect.parentNode.removeChild(favorites)
    
    // if (myGif.parentElement==myGifSect) {
        
    //     myGifSect.removeChild(myGif);
    // }
        secBusqueda.style.display = "none";
        secFavoritos.style.display = "block";
        secCrear.style.display = "none";
        secMigif.style.display = "none";
        trends.style.display = "block";

        let epmty = document.getElementById("empty")

        let dadFav= document.getElementById("favs")
        let crearAppend = document.createElement("div")
        crearAppend.className = "favorites";
        crearAppend.id = "favorites";
        dadFav.insertBefore(crearAppend, epmty)
        
        let myGifs= document.getElementsByClassName("favorites")
        // let createFav = document.createElement("div")
        // createFav.className = "favorites";
        // dadFav.parentNode.removeChild(myGifs)


        // dadFav.insertBefore(createFav, epmty)
        let llave = localStorage.key('favUrl')
        const gifInfo = JSON.parse(localStorage.getItem(`${llave}`))
        console.log(gifInfo)
        const gifTitle = gifInfo.map(gifInfo => gifInfo.Title);
        const gifUrl = gifInfo.map(gifInfo => gifInfo.url);
        const gifname = gifInfo.map(gifInfo => gifInfo.Name); 

        
        // alert("si quieres ver tus otros gifos añadidos recarga la pagina y podras verlos")

        
        for (let i = 0; i < gifInfo.length; i++) {
        // const console.log(gifTitle[i])
        // console.log(gifUrl[i])
        // console.log(gifname[i])

            

            console.log(gifTitle[i])
            console.log(gifUrl[i])
            console.log(gifname[i])

            let favElement = document.createElement("div");
            favElement.className = `gif-card fav-state `;
            favElement.id = `card-${i}`
            favElement.innerHTML = `
                        <div id="gif-id-${i}" ></div>
                            <div class="gif-box">
                                <div class="gif-icons">
                                    <div class="icon-box zoomButton">
                                        <i class='fas fa-search-plus'></i>
                                    </div>
                                    <div class= "gifid" style="display:none;">${gifUrl[i]}</div>
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

        
        let zoomButton = document.getElementsByClassName('zoomButton')
        for (let i = 0; i < zoomButton.length; i++) {
                // let userName = dataGif.data[i].username
                // let title = dataGif.data[i].title
                // let imgPath = dataGif.data[i].images.fixed_width.url;
                // let objectGif = 
                
                // {
                    //     // Name: userName,
                    //     Title: title,
                    //     url: imgPath
                    // };
                    
                const gifInfo = JSON.parse(localStorage.getItem(`${llave}`))
                // console.log(gifInfo)
                
                zoomButton[i].addEventListener('click',()=> maximizarFav(gifInfo,i))
        }
        borrarGif();
        descargar();
    }
);

crearGif.addEventListener("click", ()=> 
{
        let favoritosBtn = document.querySelector("#favoritos a");
        favoritosBtn.setAttribute('style',`
        pointer-events: initial;
        cursor: default;
        text-decoration: none;
        
    `)
    
    let miBtn = document.querySelector("#mis-gifos a")

    miBtn.setAttribute('style',`
    pointer-events: initial;
    cursor: default;
    

    `)
    // let favSect = document.getElementById("favs")
    // let favorites = document.getElementById("favorites")

   
    // // favSect.parentNode.removeChild(favorites)

    
    // if (favorites.parentElement==favSect) {
    //         favSect.removeChild(favorites);
    // }
    // let myGif = document.getElementById("my-gifs")
    // let myGifSect = document.getElementById("my-gifs-sect")
    // // favSect.parentNode.removeChild(favorites)
    
    // if (myGif.parentElement==myGifSect) {
        
    //     myGifSect.removeChild(myGif);
    // }

    secBusqueda.style.display = "none";
    secFavoritos.style.display = "none";
    secCrear.style.display = "block";
    secMigif.style.display = "none";
    trends.style.display = "none";
}
);

crearGifBtn.addEventListener("click", ()=> 
{
        let favoritosBtn = document.querySelector("#favoritos a");
        favoritosBtn.setAttribute('style',`
        pointer-events: initial;
        cursor: default;
        text-decoration: none;
        
    `)
    
    let miBtn = document.querySelector("#mis-gifos a")

    miBtn.setAttribute('style',`
    pointer-events: initial;
    cursor: default;
    

    `)
    // let favSect = document.getElementById("favs")
    // let favorites = document.getElementById("favorites")

    // let myGif = document.getElementById("my-gifs")
    // let myGifSect = document.getElementById("my-gifs-sect")
    // // favSect.parentNode.removeChild(favorites)
    
    // if (myGif.parentElement==myGifSect) {
        
    //     myGifSect.removeChild(myGif);
    // }
    
    // if (favorites.parentElement==favSect) {
        
    //     favSect.removeChild(favorites);
    // }
    
    secBusqueda.style.display = "none";
    secFavoritos.style.display = "none";
    secCrear.style.display = "block";
    secMigif.style.display = "none";
    trends.style.display = "none";
}
);

misGifos.addEventListener("click", async ()=> 
{
        let favoritosBtn =  document.querySelector("#favoritos a");

        favoritosBtn.setAttribute('style',`
        pointer-events: initial;
        cursor: default;
        text-decoration: none;
    
    `)

    let miBtn = document.querySelector("#mis-gifos a")

    miBtn.setAttribute('style',`
    pointer-events: none;
    cursor: default;
    text-decoration: none;
    
`)
    // let favSect = document.getElementById("favs")
    // let favorites = document.getElementById("favorites")

   
    // if (favorites.parentElement==favSect) {
    //         favSect.removeChild(favorites);
    // }
    // favSect.parentNode.removeChild(favorites)
    let myGifDelete = document.getElementById("my-gifs")
    let myGifSect = document.getElementById("mine")
    let empty = document.getElementById("empty-my")

    if (myGifDelete.parentElement==myGifSect) {
        
            myGifSect.removeChild(myGifDelete);
    }

    

    let crearAppend = document.createElement("div")
    crearAppend.className = "my-gifs";
    crearAppend.id = "my-gifs";
    myGifSect.insertBefore(crearAppend, empty)
    
    secBusqueda.style.display = "none";
    secFavoritos.style.display = "none";
    secCrear.style.display = "none";
    secMigif.style.display = "block";
    trends.style.display = "block";

    
    const miGifInfo = JSON.parse(localStorage.getItem(`MyGifs`))
    let myGif = document.getElementsByClassName("my-gifs")
    
    for (let i = 0; i < miGifInfo.length; i++) 
    {
        

        const url = `https://media.giphy.com/media/${miGifInfo[i]}/giphy.gif`;
        console.log(url)




        let MyElement = document.createElement("div");
            MyElement.className = `gif-card my-state `;
            MyElement.id = `card-${i}-my`
            MyElement.innerHTML = `
                        <div id="gif-id-${i}" style="width: 260px; height: 200px; position: absolute; display: block;" >
                        <img src="${url}" style="width: 260px; height: 200px; display: block;">
                        </div>
                            <div class="gif-box">
                                <div class="gif-icons">
                                    <div class="icon-box zoomButton">
                                        <i class='fas fa-search-plus'></i>
                                    </div>
                                    <div class= "gifid" style="display:none;">${url}</div>
                                    <div class="icon-box downloadButton">
                                        <i class="fas fa-download"></i>
                                    </div>
                                    <div class= "gifid" style="display:none;">${url}</div>
                                    <div class="icon-box garbage">
                                        <i class="fa fa-trash"></i>
                                    </div>
                                </div>
                                <div class="adaptive-text">
                                    <P class="gif-name gif-title"></P>
                                </div>
                            </div>
            
            `
            myGif[0].appendChild(MyElement)[0];
            empty.style.display= "none"
            // let MiContainer = document.getElementById(`gif-id-${i}`);
            // MiContainer.style.width = "260px";
            // MiContainer.style.height = "200px";
            // MiContainer.style.position = "absolute";
            // MiContainer.style.display = "block";

            // let MiGif = document.createElement("img")
            // MiGif.style.width = "260px";
            // MiGif.style.height = "200px";
            // MiGif.style.display = "block";
            // MiGif.setAttribute("src", `${url}`);
            // MiContainer.appendChild(MiGif);
        
    }
    let zoomButton = document.getElementsByClassName('zoomButton')
    for (let i = 0; i < zoomButton.length; i++) {
            // let userName = dataGif.data[i].username
            // let title = dataGif.data[i].title
            // let imgPath = dataGif.data[i].images.fixed_width.url;
            // let objectGif = 
            
            // {
                //     // Name: userName,
                //     Title: title,
                //     url: imgPath
                // };
                
            const gifInfo = JSON.parse(localStorage.getItem(`MyGifs`))
            // console.log(gifInfo)
            
            zoomButton[i].addEventListener('click',()=> maximizarMio(gifInfo,i))
    }
    borrarGifMio();
    descargar();
}
);


