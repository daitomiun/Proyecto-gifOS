
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
      
      async function callApi(){
        let apiKey = "VZ4N6ebz6BSdgrhUNiKAAU0dNYws5GSn";
        let uInput= document.getElementById("search").value;
        //0m6p9UIK0QqEfA8GmlLnGoKcW873s8Ld
        const elFetch =await fetch(`https://api.giphy.com/v1/gifs/search/tags?q=${uInput}&api_key=${apiKey}`);
        // const elFecth = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apikey}&limit=${limit}`);
        laData =await  elFetch.json();
        console.log(laData);

        let gif = document.getElementById("gif");
        // console.log(laData.data[0].images.fixed_height.url)
        // let imgPath = laData.data[0].images.fixed_height.url;
        console.log(laData.data[0])
        let imgPath = laData.data[0];
        let img = document.createElement("img");
        img.setAttribute("src", imgPath);
        document.body.appendChild(img);

       
      } 
      callApi();


      //search


     
      











































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

