
      
      /*-----------------
      | Calls de gifs |
      ----------------- */
      



      //search

    async function callApi(){
        var uInput= document.getElementById("search").value;
        var apiKey = "VZ4N6ebz6BSdgrhUNiKAAU0dNYws5GSn";
        //0m6p9UIK0QqEfA8GmlLnGoKcW873s8Ld
        const elFetch =await fetch(`https://api.giphy.com/v1/gifs/search/tags?q=${uInput}&api_key=${apiKey}&limit=1`);
        // const elFecth = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apikey}&limit=${limit}`);
        laData =await  elFetch.json();
        console.log(laData);

        // var empty = document.getElementById("empty-search");


        // if (uInput === "" || uInput == null) {
        //     empty.style.display = "block" 
        //     delete gifCall;
        // }

        
        
    } 
      
      
      
      //gifs

      let counter = 0;
      
      let insert = [];
        
    function capture() {
            let uInput= document.getElementById("search").value;
            
            insert.push(uInput)
            console.log(insert);
            console.log(`User input ${counter}`);
            
            if (counter>=2 ) {
                
                counter = 0;
                // console.log("son diferentes")
                // delete gifCall();
                return deleteGifs();
                // return gifCall();
                
             
            }

    }

    //&& ((insert[insert.lenght -1]) != (insert[insert.lenght -2]) ) 

    //quitar gifs

    function deleteGifs(){

        let requested = document.getElementById("show-requested")
        let recomend = document.getElementById("written-recomend");
        recomend.parentNode.removeChild(recomend);
        
        let createElement= document.createElement("div");

        createElement.className = "written-recomend";
        createElement.id = "written-recomend";

        let createMore = document.createElement("div");
        createMore.className= "more-button";
        createMore.innerHTML =`<p>buscar mas</p>`;
        

       


        requested.appendChild(createElement)
        requested.appendChild(createMore)
        
        // let deleteGif = document.querySelector("#delete");
        // for(let i= 12; i>0; i--){
        //     console.log(`quitando gif: ${i}`);
        //     document.getElementById("written-recomend").removeChild(deleteGif);
           
        // }
        
    }


    let button = document.getElementById("btn");

    button.addEventListener("click" , capture)





      async function gifCall(){
          
        ++counter;
        console.log(`gif call ${counter}`);
        let apiKey = "VZ4N6ebz6BSdgrhUNiKAAU0dNYws5GSn";
        let uInput= document.getElementById("search").value;
        
        
        let maxLimit = 48
        let limit = 12;
        const fetchGif = await fetch(`https://api.giphy.com/v1/gifs/search?q=${uInput}&api_key=${apiKey}&limit=${maxLimit}`)
        let dataGif= await fetchGif.json();
        
        
        let recomend = document.getElementsByClassName("written-recomend");
        
        for (let i = 1; i<=limit; i++){
         
            var element = document.createElement("div");
        
            
            element.className = "gif-card";
            element.id = "delete";
  
            element.innerHTML = `
            <div id="gif-${i}" class="download"></div>
            <div class="gif-box" style="width: 260px; height: 200px;">
                <div class="gif-icons">
                    <div class="icon-box" id="zoom" onclick="maximizar()">
                        <i class='fas fa-search-plus'></i>
                    </div>
                    <div class="icon-box " id="download" onclick="descargar()">
                        <i class="fas fa-download"></i>
                    </div>
                    <div class="icon-box heart" id="heart" onclick="favoritos()">
                        <i class="far fa-heart"></i>
                    </div>
                </div>
                <div class="adaptive-text">
                    <P class="gif-title"></P>
                </div>
            </div>
            `;
        
            if (counter>1 || uInput === "") {
            
            counter = 0;
            delete element;
            delete recomend;
            
            break;
            
            }
            if (uInput == "" ) {
            
            
            delete element;
            delete recomend;
            break;
            
            }
            element.style.width = "260px";
            element.style.height = "200px";
            recomend[0].appendChild(element);
            
            let container = document.getElementById(`gif-${i}`);

            container.style.width = "260px";
            container.style.height = "200px";
            container.style.position = "absolute";
            container.style.display = "block";
        
            //console.log(dataGif);
            //console.log(dataGif.data[i].images.fixed_height.url);
            let imgPath = dataGif.data[i].images.fixed_width.url;

        
        
        
            let gif = document.createElement("img");
            gif.id = "hearting max-out download"
            gif.setAttribute("src", imgPath);
            gif.style.width = "260px";
            gif.style.height = "200px";
            gif.style.display = "block";
            container.appendChild(gif);

            trendData.push(dataGif.data[i].images.fixed_height.url)
                console.log("data gif  "+  trendData[i])

                
                setTimeout(() => {
                    console.log("==================================================")
                    console.log("==================================================")
                    console.log("data gifSearch  "+  trendData[i])
                
                    console.log(trendData)

                }, 3000);
       }
      
       
    }
    
    // async function recomendations(){
    //     let uInput= document.getElementById("search").value;
        
    //     const fetchSugest =await fetch(`api.giphy.com/v1/tags/related/{term}`);
    //     laData =await  fetchSugest.json();
    //     console.log(laData);
    // }



    //zoom, favoritos, descarga

    
    //quitar gifs

   
    
    var trendData = [];
    
    async function trending(){
            let apiKey = "VZ4N6ebz6BSdgrhUNiKAAU0dNYws5GSn";
            const apiTrendfetch = await fetch(`https://api.giphy.com/v1/gifs/trending?&api_key=${apiKey}`)
            let dataGif = await apiTrendfetch.json();
            let limit = 3;

            let recomend = document.getElementsByClassName("community");

            for (let i = 0; i<limit; i++){
         
                let element = document.createElement("div");
                
                element.className = "gif-card"+" trends";
          
                element.innerHTML = `
               
                <div id="gif-${i}" class="download"></div>
                        <div class="gif-box ">
                            <div class="gif-icons">
                                <div class="icon-box" id="zoom" onclick="maximizar()">
                                    <i class='fas fa-search-plus'></i>
                                </div>
                                <div class="icon-box" id="download" onclick="descargar()">
                                    <i class="fas fa-download"></i>
                                </div>
                                <div class="icon-box" id="heart" onclick="favoritos()">
                                    <i class="far fa-heart"></i>
                                </div>
                            </div>
                            <div class="adaptive-text">
                                <P class="gif-title">Nombre gifos</P>
                            </div>
                        </div>
                `;
                
               
                element.style.width = "360px";
                element.style.height = "275px";
                recomend[0].appendChild(element);
                
                let container = document.getElementById(`gif-${i}`);
                container.style.width = "360px";
                container.style.height = "275px";
                container.style.position = "absolute";
                container.style.display = "block";
              
                //console.log(dataGif);
                //console.log(dataGif.data[i].images.fixed_height.url);
                let imgPath = dataGif.data[i].images.fixed_width.url;

        
                
                
                let gif = document.createElement("img");
                gif.id = "hearting max-out download";
                
                gif.setAttribute("src", imgPath);
                gif.style.width = "360px";
                gif.style.height = "275px";
                gif.style.display = "block";
                container.appendChild(gif);
                
                trendData.push(dataGif.data[i].images.fixed_height.url)
                console.log("data gif  "+  trendData[i])

                setTimeout(() => {
                    console.log("==================================================")
                    console.log("==================================================")
                    console.log("data gif  "+  trendData[i])
                
                    console.log(trendData)

                }, 3000);
             //     trendData.forEach(dataGif => {

                   
             //    });
                
                
                
        
            }
            
    }
    trending();
             

      

      
   
  
    function favoritos(){
        //let heart = document.querySelector(".gif-icons #heart");
        
        console.log()
        console.log("funciona?")
        

    }
    function maximizar(){
        console.log("maximiza?")
        let max = document.querySelector(".gif-icons #zoom");
        console.log(max)
        
    }
     async function descargar(){
        // console.log("descarga?")
        let imgCatch = document.querySelector("#download img");
        
        console.log(imgCatch)
        
     }


      


     
      














