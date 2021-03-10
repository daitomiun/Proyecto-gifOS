
// let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    if (true) {
      let xhttp = new XMLHttpRequest();
      xhttp.open("GET", url_api, true);
      xhttp.onreadystatechange = () => {
        if (xhttp.readyState === 4) {
          xhttp.status === 200
            ? resolve(JSON.parse(xhttp.responseText))
            : reject(new Error("Error " + url_api));
        }
      };
      xhttp.send();
    }
  });
};

// module.exports = fetchData;





// /* https://developers.giphy.com/explorer/ */



// const fetchData = require("./fetchData.js");
let apikey = "j2lEFfMiqpn38YVWrgdRb3YmJjuJUPnt";
let limit = 2;
const API = `https://api.giphy.com/v1/gifs/trending?api_key=${apikey}&limit=${limit}`;

const prueba = async (url_api) => {
  try {
    const info = await fetchData(url_api);
    console.log(info.pagination.total_count);
  } catch (Error) {
    console.error(Error);
  }
};

prueba(API);