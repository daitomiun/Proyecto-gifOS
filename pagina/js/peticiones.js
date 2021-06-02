//search



async function callApi() {
    var uInput = document.getElementById("search").value;
    var apiKey = "VZ4N6ebz6BSdgrhUNiKAAU0dNYws5GSn";

    const elFetch = await fetch(`https://api.giphy.com/v1/gifs/search/tags?q=${uInput}&api_key=${apiKey}&limit=1`);
    // const elFecth = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apikey}&limit=${limit}`);
    laData = await elFetch.json();
    console.log(laData);




}



//gifs

let counter = 0;

let insert = [];

function capture() {
    let uInput = document.getElementById("search").value;

    insert.push(uInput)
    console.log(insert);
    console.log(`User input ${counter}`);
    
    deleteGifs();
 

}





async function descargar() {
        let downloadButton = document.getElementsByClassName('downloadButton')
        for (let i = 0; i < downloadButton.length; i++) {

            downloadButton[i].addEventListener('click', async ()=>{

                let createGif = document.createElement("a")
                let gifid= downloadButton[i].nextElementSibling.innerText
                // let gifIdSibling = downSibling[i].nextElementSibling.innerText
                console.log('you pressed download', gifid)
                // console.log(' gifid sibling is ', gifIdSibling)
                let response = await fetch(`${gifid}`);
                let file = await response.blob();
                createGif.download = 'MyGif';
                createGif.href = window.URL.createObjectURL(file);
                createGif.dataset.downloadurl = ['application/octet-stream', createGif.download, createGif.href].join(':');
                createGif.click();
                return
            })
            
        }
}

async function borrarGif() {
    let deleteButton = document.getElementsByClassName('garbage')
    // console.log(deleteButton)
 
    for (let i = 0; i < deleteButton.length; i++) {

        deleteButton[i].addEventListener('click', async ()=>{

            let quitarArr = new Array
            if ( JSON.parse(localStorage.getItem('favUrl')) ){
                quitarArr = JSON.parse(localStorage.getItem('favUrl')) 
                console.log('habia algo en el local para quitar gifos')
                console.log(quitarArr)
            } else {
                console.log('no habia nada en el local para quitar gifos')
                quitarArr = []
                
            }
            
            let favSect = document.querySelector("#favorites")
            let card = document.querySelector(`#card-${i}`)

            favSect.removeChild(card);
            
            console.log(card)
            

            let indexToRemove = i
            quitarArr.splice(indexToRemove, 1)
            console.log(quitarArr)
            
             localStorage.setItem('favUrl', JSON.stringify(quitarArr))

             if(quitarArr == ""){
                 
                    let epmty = document.getElementById("empty")
                    epmty.style.display= "block"
             }

        })
    }
}
async function borrarGifMio() {
    let deleteButton = document.getElementsByClassName('garbage')
    // console.log(deleteButton)
 
    for (let i = 0; i < deleteButton.length; i++) {

        deleteButton[i].addEventListener('click', async ()=>{

            let quitarArrMio = new Array
            if ( JSON.parse(localStorage.getItem('Mygifs')) ){
                quitarArr = JSON.parse(localStorage.getItem('Mygifs')) 
                console.log('habia algo en el local para quitar mis gifos')
                console.log(quitarArr)
            } else {
                console.log('no habia nada en el local para quitar mis gifos')
                quitarArr = []
                
            }
            
            let MySect = document.querySelector(".my-gifs")
            let card = document.querySelector(`#card-${i}-my`)

            MySect.removeChild(card);
            
            console.log(card)
            

            let indexToRemove = i
            quitarArrMio.splice(indexToRemove, 1)
            console.log(quitarArr)
            
             localStorage.setItem('MyGifs', JSON.stringify(quitarArrMio))

             if(quitarArr == ""){
                 
                    let epmty = document.getElementById("empty")
                    epmty.style.display= "block"
             }

        })
    }
}

//quitar gifs

function deleteGifs() {

    let requested = document.getElementById("show-requested")
    let quitAllWrittenText = document.getElementById("reflected-input")
    let recomend = document.getElementById("written-recomend");
    let getMore = document.getElementById("more-button");

    //let quitAllMore = document.getElementById("more-button");

    requested.parentNode.removeChild(quitAllWrittenText);
    recomend.parentNode.removeChild(recomend);
    //requested.parentNode.removeChild(quitAllMore)

    let createElement = document.createElement("div")
    createElement.className = "written-recomend";
    createElement.id = "written-recomend";


    requested.insertBefore(createElement, getMore)



    getMore.style.display = "block";


}

// function deleteFavs(){

//     let myGifs= document.getElementsByClassName("favorites")

// }


let button = document.getElementById("btn");

button.addEventListener("click", capture)
button.addEventListener("keyup", function (event) {
    if (event.key === 13 || event.key == "Enter") {
        event.preventDefault();
        capture();
        //deleteGifs();

    }
});





async function gifCall() {

    ++counter;
    let requested = document.getElementById("show-requested")
    console.log(`gif call ${counter}`);
    let apiKey = "VZ4N6ebz6BSdgrhUNiKAAU0dNYws5GSn";
    let uInput = document.getElementById("search").value;
    let tRecomend = document.getElementById("trend-recomend")
    //console.log(tRecomend)

    let maxLimit = 48
    let limit = 12;
    const fetchGif = await fetch(`https://api.giphy.com/v1/gifs/search?q=${uInput}&api_key=${apiKey}&limit=${maxLimit}`)
    let dataGif = await fetchGif.json();
    console.log("inst working:  " + dataGif)
    // let tRecomend = document.getElementsByClassName("trend-recomend")
    let recomend = document.getElementsByClassName("written-recomend");
    // tRecomend.appendChild(createReflected)

    for (let i = 0; i < maxLimit; i++) {

        let element = document.createElement("div");
        let userName = dataGif.data[i].username
        let title = dataGif.data[i].title
        let imgPath = dataGif.data[i].images.fixed_width.url;
        var objectGif = 
    
        {
            Name: userName,
            Title: title,
            url: imgPath
        };


        element.className = "gif-card";
        element.id = "delete";

        element.innerHTML = `
        <div id="gif-${i}" class="heart" ></div>
        <div class="gif-box" style="width: 260px; height: 200px;">
            <div class="gif-icons">
                <div class="icon-box zoomButton" id="zoom" >
                    <i class='fas fa-search-plus'></i>
                </div>
                <div class= "gifid" style="display:none;">${objectGif.url}</div>
                <div class="icon-box downloadButton" id="download">
                    <i class="fas fa-download"></i>
                </div>
                <div class= "gifid" style="display:none;">${objectGif.url}</div>
                <div class="icon-box favbutton"  >
                    <i class="far fa-heart"></i>
                </div>
                <div class= "gifid" style="display:none;">${objectGif.url}</div>
            </div>
            <div class="adaptive-text">
                <P class="gif-title">${objectGif.Title}</P>
            </div>
        </div>
        `;

       


        // console.log(dataGif);
        element.style.width = "260px";
        element.style.height = "200px";
        recomend[0].appendChild(element);

        let container = document.getElementById(`gif-${i}`);

        container.style.width = "260px";
        container.style.height = "200px";
        container.style.position = "absolute";
        container.style.display = "block";

        // console.log(dataGif);
        //console.log(dataGif.data[i].images.fixed_height.url);
        // let imgPath = dataGif.data[i].images.fixed_width.url;




        let gif = document.createElement("img");
        gif.id = `hearting-${i} download-${i}`
        gif.src = objectGif.url
        gif.style.width = "260px";
        gif.style.height = "200px";
        gif.style.display = "block";
        container.appendChild(gif);

        trendData.push(dataGif.data[i].images.fixed_height.url)
        //console.log("data gif  "+  trendData[i])


        // setTimeout(() => {
        //     console.log("==================================================")
        //     console.log("==================================================")
        //     console.log("data gifSearch  "+  trendData[i])

        //     //console.log(trendData)

        // }, 3000);
    }


    let getMore = document.getElementById("more-button");
    getMore.style.display = "flex";





    let createReflected = document.createElement("div")
    createReflected.className = "title-align"
    createReflected.id = "reflected-input"
    createReflected.innerHTML = `<p>${uInput}</p>`;
    // console.log("cambio:  "+createReflected);
    tRecomend.insertBefore(createReflected, requested)
    

    // maximizar(objectGif);
    
    async function executeZoom() {
        let zoomButton = document.getElementsByClassName('zoomButton')
        for (let i = 0; i < zoomButton.length; i++) {
        
            // let userName = dataGif.data[i].username
            // var userName = dataGif.data[i].username
            let title = dataGif.data[i].title
            let imgPath = dataGif.data[i].images.fixed_width.url;
            // console.log(title, imgPath)
            let objectGif = 
            
            {
                // Name: userName,
                Title: title,
                url: imgPath
            };
            
            // objectGif[i];
           
            zoomButton[i].addEventListener('click',()=> maximizar(objectGif, i))
        }
        
    } 
    executeZoom();
    
    async function execute() {
        let heartButton = document.getElementsByClassName('favbutton')
        
        for (let i = 0; i < heartButton.length; i++) {
            let userName = dataGif.data[i].username
            let title = dataGif.data[i].title
            let imgPath = dataGif.data[i].images.fixed_width.url;
            let objectGif = 
            
            {
                Name: userName,
                Title: title,
                url: imgPath
            };
            // objectGif[i]
            heartButton[i].addEventListener('click',()=> saveFav(objectGif,i))
            
        }
        
        
    }
    
    execute();
    descargar();
    
}


async function recomendations() {
    let apiKey = "VZ4N6ebz6BSdgrhUNiKAAU0dNYws5GSn";
    let uInput = document.getElementById("search").value;

    //llamar a los estilos
    let change = document.getElementById("search-bar");
    let suggest = document.querySelector(".suggest");
    let show = document.querySelector(".suggest .suggest-text .show");

    if (uInput == null || uInput.length == 0) {
        change.style.height = "50px";
        suggest.style.display = "none"
        return false;

    } else {

        console.log("se esta cambiando algo")
        const fetchSugest = await fetch(`https://api.giphy.com/v1/gifs/search/tags?q=${uInput}?&api_key=${apiKey}`);
        let laData = await fetchSugest.json();
        change.style.height = "18rem";
        suggest.style.display = "block";
        //let appendSearch = document.getElementById("search-bar")



        for (let i = 0; i < 5; i++) {

            let show = document.querySelector(`.suggest .suggest-text .show-${i}`);
            show.innerHTML = `${laData.data[i].name}`
            //console.log( laData.data[i].name);


        }


    }


}
recomendations();




//zoom, favoritos, descarga


//quitar gifs



var trendData = []


!async function trending() {

    let apiKey = "VZ4N6ebz6BSdgrhUNiKAAU0dNYws5GSn";
    const apiTrendfetch = await fetch(`https://api.giphy.com/v1/gifs/trending?&api_key=${apiKey}`)
    let dataGif = await apiTrendfetch.json()
    let limit = 12
    console.log(dataGif)

    let recomend = document.getElementsByClassName("community")

    for (let i = 0; i < limit; i++) {

        let element = document.createElement("div")

        let userName = dataGif.data[i].username
        let title = dataGif.data[i].title
        let imgPath = dataGif.data[i].images.fixed_width.url;
        let objectGif = 
    
        {
            Name: userName,
            Title: title,
            url: imgPath
        };


        element.className = `gif-card trends`
        element.setAttribute('style',`
            width:360px;
            height:275px;
        `)

        element.innerHTML = `
            <div id="gif-${i}" class="heart" ></div>
            <div class="gif-box" >
                <div class="gif-icons">
                    <div class="icon-box zoomButton" id="zoom"  style="width: 50px; height: 32px;">
                        <i class='fas fa-search-plus'></i>
                    </div>
                    <div class= "gifid" style="display:none;">${objectGif.url}</div>
                    <div class="icon-box  downloadButton" id="download" " style="width: 50px; height: 32px;">
                        <i class="fas fa-download"></i>
                    </div>
                    <div class= "gifid" style="display:none;">${objectGif.url}</div>
                    <div class="icon-box heart  favbutton" style="width: 50px; height: 32px;">
                        <i class="far fa-heart  "></i>
                    </div>
                    <div class= "gifid" style="display:none;">${objectGif.url}</div>
                <div class="adaptive-text">
                    <P class="gif-title">${objectGif.Title}</P>
                </div>
            </div>
            `

            
        recomend[0].appendChild(element)

        let container = document.getElementById(`gif-${i}`)
        container.setAttribute('style',`
            width:360px;
            height:275px;
            position:absolute;
            display:block;
           
        
        `)

        // let imgPath = dataGif.data[i].images.fixed_width.url;
        let gif = document.createElement("img");
        gif.id = `hearting download`

        gif.src = objectGif.url
        gif.style.width = "360px"
        gif.style.height = "275px"
        gif.style.display = "block"
        container.appendChild(gif)

        trendData.push(dataGif.data[i].images.fixed_height.url)

    }


    // maximizar();
    async function execute() {
        
        let heartButton = document.getElementsByClassName('favbutton')
        
        for (let i = 0; i < heartButton.length; i++) {
            let userName = dataGif.data[i].username
            let title = dataGif.data[i].title
            let imgPath = dataGif.data[i].images.fixed_width.url;
            let objectGif = 
        
            {
                Name: userName,
                Title: title,
                url: imgPath
            };
            heartButton[i].addEventListener('click',()=> saveFav(objectGif,i))
        
        }
    }
    execute();


    async function executeZoom() {
        
        let zoomButton = document.getElementsByClassName('zoomButton')
        
        for (let i = 0; i < zoomButton.length; i++) {
            // let userName = dataGif.data[i].username
            let title = dataGif.data[i].title
            let imgPath = dataGif.data[i].images.fixed_width.url;
            let objectGif = 
        
            {
                // Name: userName,
                Title: title,
                url: imgPath
            };
            zoomButton[i].addEventListener('click',()=> maximizar(objectGif,i))
            
        }
        return
    }
    executeZoom();

    
    descargar();

}()

let localFav 


if ( JSON.parse(localStorage.getItem('favUrl')) ){
    localFav = JSON.parse(localStorage.getItem('favUrl')) 
    console.log('habia algo en el local')
    console.log(localFav)
} else {
    console.log('no habia nada en el local')
    localFav = []
    
}


const saveFav = (objectGif,i) => {


 
    let allGif= objectGif

    console.log(localFav)
        localFav.push(allGif)
        localStorage.setItem('favUrl',JSON.stringify(localFav))
        const gifInfo = JSON.parse(localStorage.getItem('favUrl')) 
        const gifTitle = gifInfo.map(gifInfo => gifInfo.Title);
        const gifUrl = gifInfo.map(gifInfo => gifInfo.url);
        const gifname = gifInfo.map(gifInfo => gifInfo.Name);




        console.log(gifTitle[i])
        console.log(gifUrl[i])
        console.log(gifname[i])
       
        // console.log(gifInfo.Title)
        console.log('%cyou pressed heart','color:green;')
        console.log(localFav)
        console.log('this is the local ' ,JSON.parse(localStorage.getItem('favUrl')) )
}

const maximizar = (objectGif)=>{

    let allGif= objectGif
    

    let body = document.getElementById("max-id")
    body.insertAdjacentHTML('afterbegin', 
    `
    
    <div class="max-container" id="max-container"  onclick="borrar()">
        <div class="close" id="close" >
            <i class="fas fa-times"></i>
        </div>
        <div id="gif-container"></div>
        <div class="max-box">
            <div class="icon-box  downloadButton" id="download" " style="width: 50px; height: 32px;">
                <i class="fas fa-download"></i>
            </div>
            <div class= "gifid" style="display:none;">${objectGif.url}</div>
            <div class="icon-box heart  favbutton" style="width: 50px; height: 32px;">
                <i class="far fa-heart  "></i>
            </div>
            <div class= "gifid" style="display:none;">${objectGif.url}</div>
            <div class="adaptive-text">
                <P class="gif-title">${objectGif.Title}</P>
            </div>
        </div>
    </div>
        
    
    `)
    let container = document.getElementById("gif-container")
    let gif = document.createElement("img");
    gif.id = `max`

    gif.src = objectGif.url
    gif.style.width = "360px"
    gif.style.height = "360px"
    gif.style.display = "block"
    container.appendChild(gif)

    let heartButton = document.getElementsByClassName('favbutton')
    
    for (let i = 0; i < heartButton.length; i++) {
      
        allGif
        heartButton[i].addEventListener('click',()=> saveFav(objectGif,i))
    
    }
    descargar();
   
}
function borrar() {
    
    
    let main = document.getElementById("max-id")
    let zoom = document.getElementById("max-container")
    
    for (let i = 0; i < closeButton.length; i++) {
        
        
        if (zoom.parentElement==main) {
                main.removeChild(zoom);
        }
            
    }
}
    let closeButton = document.getElementsByClassName("close")
    // closeButton[0].addEventListener("click", borrar())
const maximizarFav = (gifInfo, i)=>{

  

    const gifTitle = gifInfo.map(gifInfo => gifInfo.Title);
    const gifUrl = gifInfo.map(gifInfo => gifInfo.url);
    // const gifname = gifInfo.map(gifInfo => gifInfo.Name); 
    let body = document.getElementById("max-id")
    body.insertAdjacentHTML('afterbegin', 
    `
    
    <div class="max-container" id="max-container" onclick="borrar()">
        <div class="close" >
            <i class="fas fa-times"></i>
        </div>
        <div id="gif-container"></div>
        <div class="max-box">
            <div class="icon-box  downloadButton" id="download" " style="width: 50px; height: 32px;">
                <i class="fas fa-download"></i>
            </div>
            <div class= "gifid" style="display:none;">${gifUrl[i]}</div>
            <div class="adaptive-text">
                <P class="gif-title">${gifTitle[i]}</P>
            </div>
        </div>
    </div>
        
    
    `)

    let container = document.getElementById("gif-container")
    let gif = document.createElement("img");
    gif.id = `max`

    gif.src = gifUrl
    
    console.log(gif.src=gifUrl[i])
    gif.style.width = "360px"
    gif.style.height = "360px"
    gif.style.display = "block"
    container.appendChild(gif)

    
    let heartButton = document.getElementsByClassName('favbutton')
    
    for (let i = 0; i < heartButton.length; i++) {
      
        heartButton[i].addEventListener('click',()=> saveFav(objectGif,i))
    
    }
    descargar();
   
}
const maximizarMio = (gifInfo, i)=>{

  
    const url = `https://media.giphy.com/media/${gifInfo[i]}/giphy.gif`;

    // const gifTitle = gifInfo.map(gifInfo => gifInfo.Title);
    // const gifUrl = gifInfo.map(gifInfo => gifInfo.url);
    // const gifname = gifInfo.map(gifInfo => gifInfo.Name); 
    let body = document.getElementById("max-id")
    body.insertAdjacentHTML('afterbegin', 
    `
    
    <div class="max-container" id="max-container" onclick="borrar()">
        <div class="close" >
            <i class="fas fa-times"></i>
        </div>
        <div id="gif-container"></div>
        <div class="max-box">
            <div class="icon-box  downloadButton" id="download" " style="width: 50px; height: 32px;">
                <i class="fas fa-download"></i>
            </div>
            <div class= "gifid" style="display:none;">${url}</div>
            <div class="adaptive-text">
                <P class="gif-title"></P>
            </div>
        </div>
    </div>
        
    
    `)

    let container = document.getElementById("gif-container")
    let gif = document.createElement("img");
    gif.id = `max`

    gif.src = url
    
    console.log(gif.src= url)
    gif.style.width = "360px"
    gif.style.height = "360px"
    gif.style.display = "block"
    container.appendChild(gif)

    
    descargar();
   
}

let searchTerm = document.getElementById("search");

searchTerm.addEventListener("keyup", function (event) {
    if (event.key === 13 || event.key == "Enter") {
        event.preventDefault();
        gifCall();
        deleteGifs();

    }
});


//seguerencias texto

let elementosPsuggest = document.querySelectorAll(".suggest .suggest-text p");

elementosPsuggest.forEach(p => {



    p.onclick = function () {
        document.getElementsByTagName("p").value = this.innerHTML;
        //document.getElementsByTagName("p")[5].alt = this.alt;
        document.getElementById("search").value = this.innerHTML;

        //console.log(this.innerHTML)

    }

})


let elementosP = document.querySelectorAll("#suggest #suggest-text p");


elementosP.forEach(p => {


    p.onclick = function () {
        document.getElementsByTagName("p").value = this.innerHTML;
        //document.getElementsByTagName("p")[5].alt = this.alt;
        document.getElementById("search").value = this.innerHTML;

        //console.log(this.innerHTML)

    }

})





