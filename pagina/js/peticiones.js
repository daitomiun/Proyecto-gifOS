
// let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//  const fetchData = (url_api) => {
//   return new Promise((resolve, reject) => {
//     if (true) {
//       let xhttp = new XMLHttpRequest();
//       xhttp.open("GET", url_api, true);
//       xhttp.onreadystatechange = () => {
//         if (xhttp.readyState === 4) {
//           xhttp.status === 200
//             ? resolve(JSON.parse(xhttp.responseText))
//             : reject(new Error("Error " + url_api));
//         }
//       };
//       xhttp.send();
//     }
//   });
// };

//  module.exports = fetchData;





// // /* https://developers.giphy.com/explorer/ */



// const fetchData = require("./fetchData.js");
// let limit = 2;
// const API = `https://api.giphy.com/v1/gifs/trending?api_key=${apikey}&limit=${limit}`;

// const prueba = async (url_api) => {
  //   try {
    //     const info = await fetchData(url_api);
    //     console.log(info.pagination.total_count);
    //   } catch (Error) {
      //     console.error(Error);
      //   }
      // };
      
      // prueba(API);
      //APIMALA
      //j2lEFfMiqpn38YVWrgdRb3YmJjuJUPnt
      
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
      //callApi();
      
      
      //gifs
      
      async function gifCall(json){


        var uInput= document.getElementById("search").value;
        var apiKey = "VZ4N6ebz6BSdgrhUNiKAAU0dNYws5GSn";
        let container = document.getElementById("gif-1");

        
        // const fetchGif = await fetch(`https://api.giphy.com/v1/gifs/search?q=${uInput}&api_key=${apiKey}&limit=12`)
        

        const fetchGif = await fetch(`https://api.giphy.com/v1/gifs/search?q=${uInput}&api_key=${apiKey}&limit=12`)
        let dataGif= await fetchGif.json();
        console.log(dataGif)
        console.log(dataGif.data[0].images.fixed_height.url)
        let imgPath = dataGif.data[0].images.fixed_width.url;
        let gif = document.createElement("img");
        gif.setAttribute("src", imgPath);
        container.appendChild(gif);

      
      }
      //gifCall();
      
      
      // let output = document.querySelector("btn");
      // let gifCard = document.getElementsByClassName("gif-card");
      
      // output.addEventListener("click", (e)=>
      // {
      //   gifCard.style.display = "block";
      // }
      // );




      


     
      











































//search

// class giphy{

//   constructor(keyword){
//     this.keyword = keyword;
//     this.endpoint = "api.giphy.com/v1/gifs/search";
//     this.api_key = "j2lEFfMiqpn38YVWrgdRb3YmJjuJUPnt";
//   }

//   getGifUrl(callback){
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", this.endpoint + "/translate?api_key="+this.api_key+"&s="+this.keyword);
//     xhr.responseType = "json";
//     xhr.onload = function(){
//       callback(this.response.data.images.original.mp4);
//     }
//     xhr.send();
//   }
  
//   static getUrlAsync(keyword, callback){
//     return new giphy(keyword).getGifUrl(callback);
//   }
// }

// document.getElementById('btn').addEventListener('click', function(
//   {
//     var keyword = document.getElementById('search').value;
//     giphy.getUrlAsync(keyword, function(videoURL){
//       ducument.getElementById('gif').src = videoURL;
//     }
//   })

//   );
      
// document.getElementById('btn').addEventListener('click', function(){

//   var keyword = document.getElementById('search').value;

//   giphy.getUrlAsync(keyword, function(videoURL){
//     document.getElementById('gif').src = videoURL;
//   }
//   )

// }
// ) 

