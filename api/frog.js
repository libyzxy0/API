const fs = require("fs");
const frogImg = (callback) => {
  let imgs = require('./data/frogImages.json');
  const image = imgs[Math.floor(imgs.length * Math.random())];
  if(image == null) {
  const data = {
  	status: "error", 
      code: 400, 
  	result: null
  }
  callback(data);	
  } else {
  const data = {
  	status: "success", 
      code: 200,
  	result: {
          url: image
      }
  }
  callback(data);
 }
}
module.exports = { frogImg };