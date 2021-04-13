
      
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

        
        
    } 
      
      
      
      //gifs

      let counter = 0;
      
      let insert = [];
        
        function capture() {
            let uInput= document.getElementById("search").value;
            
            insert.push(uInput)
            console.log(insert);
            console.log(`User input ${counter}`);

            if (insert.length>=2) {

                if (insert.shift != insert.pop) {

                    counter = 0;
                    delete gifCall();
                    return gifCall();
                }
                
                
            }

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
         
        let element = document.createElement("div");
        
        element.className = "gif-card";
  
        element.innerHTML = `
        <div id="gif-${i}"></div>
        <div class="gif-box" style="width: 260px; height: 200px;">
            <div class="gif-icons">
                <div class="icon-box heart">
                    <i class='fas fa-search-plus'></i>
                </div>
                <div class="icon-box download">
                    <i class="fas fa-download"></i>
                </div>
                <div class="icon-box zoom">
                    <i class="far fa-heart"></i>
                </div>
            </div>
            <div class="adaptive-text">
                <P class="gif-title"></P>
            </div>
        </div>
        `;
        
        if (counter>1) {
            
            delete element;
            delete recomend;
            
            break;
            
        }
        if (uInput == "") {
            
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
      
        console.log(dataGif);
        console.log(dataGif.data[i].images.fixed_height.url);
        let imgPath = dataGif.data[i].images.fixed_width.url;

        
        
        let gif = document.createElement("img");
        gif.setAttribute("src", imgPath);
        gif.style.width = "260px";
        gif.style.height = "200px";
        gif.style.display = "block";
        container.appendChild(gif);
        
        
        

       }
      
       
    }

    async function trending(){
            let apiKey = "VZ4N6ebz6BSdgrhUNiKAAU0dNYws5GSn";
            const apiTrendfetch = await fetch(`https://api.giphy.com/v1/gifs/trending?&api_key=${apiKey}`)
            let dataGif= await apiTrendfetch.json();
            let limit = 3;

            let recomend = document.getElementsByClassName("community");

            for (let i = 1; i<=limit; i++){
         
                let element = document.createElement("div");
                
                element.className = "gif-card"+" trends";
          
                element.innerHTML = `
               
                <div id="gif-${i}"></div>
                        <div class="gif-box ">
                            <div class="gif-icons">
                                <div class="icon-box heart">
                                    <i class='fas fa-search-plus'></i>
                                </div>
                                <div class="icon-box download">
                                    <i class="fas fa-download"></i>
                                </div>
                                <div class="icon-box zoom">
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
              
                console.log(dataGif);
                console.log(dataGif.data[i].images.fixed_height.url);
                let imgPath = dataGif.data[i].images.fixed_width.url;
        
                
                
                let gif = document.createElement("img");
                gif.setAttribute("src", imgPath);
                gif.style.width = "360px";
                gif.style.height = "275px";
                gif.style.display = "block";
                container.appendChild(gif);
                
                
                
        
            }

    }
    trending();
             

      

      
   



      


     
      














