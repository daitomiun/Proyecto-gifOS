// /* https://developers.giphy.com/explorer/ */

const fetchData = require("./fetchData.js");
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