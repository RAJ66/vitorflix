import config from "../config/index.js"


const URL_CATEGORY = `${config.URL}/category`;

function getAllWithVideo() {
  return fetch(`${URL_CATEGORY}?_embed=videos`)
    .then(async (res) => {
      if (res.ok) {
        return await res.json();
      }
      throw new Error('Not data');
    })
}

function getAll() {
  return fetch(URL_CATEGORY)
    .then(async (res) => {
      if (res.ok) {
        return await res.json();
      }
      throw new Error('Not data');
    })
}


export default {
  getAllWithVideo,
  getAll
}