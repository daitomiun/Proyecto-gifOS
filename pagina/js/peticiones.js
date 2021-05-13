
      
      /*-----------------
      | Calls de gifs |
      ----------------- */
      



      //search

    async function callApi(){
        var uInput= document.getElementById("search").value;
        var apiKey = "VZ4N6ebz6BSdgrhUNiKAAU0dNYws5GSn";
    
        const elFetch =await fetch(`https://api.giphy.com/v1/gifs/search/tags?q=${uInput}&api_key=${apiKey}&limit=1`);
        // const elFecth = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apikey}&limit=${limit}`);
        laData =await  elFetch.json();
        console.log(laData);


        
        
    } 
      
      
      
      //gifs

      let counter = 0;
      
      let insert = [];
        
    function capture() {
            let uInput= document.getElementById("search").value;
            
            insert.push(uInput)
            console.log(insert);
            console.log(`User input ${counter}`);
            
            deleteGifs();
            // if (counter>=2 ) {
                
            //     counter = 0;
            //     console.log("son diferentes")
            //     delete gifCall();
            //     return gifCall();
                
             
            // }

    }

     

    //quitar gifs

    function deleteGifs(){

        let requested = document.getElementById("show-requested")
        let quitAllWrittenText = document.getElementById( "reflected-input")
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


    let button = document.getElementById("btn");

    button.addEventListener("click" , capture)
    button.addEventListener("keyup", function(event) {
        if (event.key === 13 || event.key == "Enter") {
         event.preventDefault();
         capture();
         //deleteGifs();
         
        }
      });





      async function gifCall(){
          
        ++counter;
        let requested = document.getElementById("show-requested")
        console.log(`gif call ${counter}`);
        let apiKey = "VZ4N6ebz6BSdgrhUNiKAAU0dNYws5GSn";
        let uInput= document.getElementById("search").value;
        let tRecomend = document.getElementById("trend-recomend")
        //console.log(tRecomend)
       

        

    
               
        
        let maxLimit = 48
        let limit = 12;
        const fetchGif = await fetch(`https://api.giphy.com/v1/gifs/search?q=${uInput}&api_key=${apiKey}&limit=${maxLimit}`)
        let dataGif= await fetchGif.json();
        console.log("inst working:  "+dataGif)
        // let tRecomend = document.getElementsByClassName("trend-recomend")
        let recomend = document.getElementsByClassName("written-recomend");
        // tRecomend.appendChild(createReflected)
        
        for (let i = 1; i<=limit; i++){
         
            var element = document.createElement("div");
        
            
            element.className = "gif-card";
            element.id = "delete";
  
            element.innerHTML = `
            <div id="gif-${i}" class="heart" ></div>
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
        

        
          
            console.log(dataGif);
            element.style.width = "260px";
            element.style.height = "200px";
            recomend[0].appendChild(element)[0];
            
            let container = document.getElementById(`gif-${i}`);

            container.style.width = "260px";
            container.style.height = "200px";
            container.style.position = "absolute";
            container.style.display = "block";
        
            // console.log(dataGif);
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
                //console.log("data gif  "+  trendData[i])

                
                setTimeout(() => {
                    console.log("==================================================")
                    console.log("==================================================")
                    console.log("data gifSearch  "+  trendData[i])
                
                    //console.log(trendData)

                }, 3000);
       }
       let getMore = document.getElementById("more-button");
       getMore.style.display = "flex";
      


       
       
       let createReflected = document.createElement("div")
       createReflected.className = "title-align"
       createReflected.id = "reflected-input"
       createReflected.innerHTML = `<p>${uInput}</p>`;
        // console.log("cambio:  "+createReflected);
       tRecomend.insertBefore(createReflected, requested)  
       
       
    //    let createMore = document.createElement("div");
    //    createMore.className= "more-button";
    //    createMore.id = "more-button";
    //    createMore.innerHTML =`<p style="font-size: 1rem;" >buscar mas</p>`;
    //    requested.appendChild(createMore)
    //    createMore.after(recomend)
    //    createMore.style.display = "flex";
    }
    
    async function recomendations(){
        let apiKey = "VZ4N6ebz6BSdgrhUNiKAAU0dNYws5GSn";
        let uInput= document.getElementById("search").value;
        
        //llamar a los estilos
        let change = document.getElementById("search-bar");
        let suggest = document.querySelector(".suggest");
        let show = document.querySelector(".suggest .suggest-text .show");
        console.log(show)

        if(uInput == null || uInput.length == 0){
            console.log("no hay nada")
            change.style.height = "50px";
            suggest.style.display = "none"
            return false;

        }else{
            
            console.log("se esta cambiando algo")
            const fetchSugest =await fetch(`https://api.giphy.com/v1/gifs/search/tags?q=${uInput}?&api_key=${apiKey}`);
            let laData =await  fetchSugest.json();
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
               
                <div id="gif-${i}" class="heart"></div>
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
                //console.log("data gif  "+  trendData[i])

                setTimeout(() => {
                    console.log("==================================================")
                    console.log("==================================================")
                    //console.log("data gif  "+  trendData[i])
                
                    //console.log(trendData)

                }, 3000);
             //     trendData.forEach(dataGif => {

                   
             //    });
                
                
                
        
            }
            
    }
    trending();
             

      

      
   
  
    async function favoritos(){
        //let heart = document.querySelector(".gif-icons #heart");
        //let fav = document.querySelector(".gif-card div img").attributes.src.value;
        let fav = document.querySelectorAll(".gif-card div img")

        for (let i = 0; i < fav.length; i++) {
            const element = fav[i].attributes.src.value;
            console.log(element)
            
        }
        console.log(fav)
        
    
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

     let searchTerm = document.getElementById("search");
    
     searchTerm.addEventListener("keyup", function(event) {
        if (event.key === 13 || event.key == "Enter") {
         event.preventDefault();
         gifCall();
         //deleteGifs();
         
        }
      });


      //seguerencias texto

      let elementosPsuggest = document.querySelectorAll(".suggest .suggest-text p");
      
    elementosPsuggest.forEach(p=>{
       

     
        p.onclick = function(){
            document.getElementsByTagName("p").value = this.innerHTML;
             //document.getElementsByTagName("p")[5].alt = this.alt;
			document.getElementById("search").value = this.innerHTML; 

            //console.log(this.innerHTML)
            
        }
     
    }) 


      let elementosP = document.querySelectorAll("#suggest #suggest-text p");

  
    elementosP.forEach(p=>{
       
     
        p.onclick = function(){
            document.getElementsByTagName("p").value = this.innerHTML;
             //document.getElementsByTagName("p")[5].alt = this.alt;
			document.getElementById("search").value = this.innerHTML; 

            //console.log(this.innerHTML)
            
        }
     
    }) 


      


   
      














