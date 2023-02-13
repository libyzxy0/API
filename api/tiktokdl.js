const request = require("request");
const axios = require("axios");
const tiktokdl = (url, callback) => {
	let a = axios.get('https://tiktok-dl-api.libyzxy0.repl.co/?url=' + url);
	a.then((response) => {
    console.log(response.data)
    let video = response.data.link;
    request({
    url: video,
    encoding: null
    },
    (err, resp, buffer) => {
    	callback(err, resp);
    })
	}) 
}
module.exports = { tiktokdl };
