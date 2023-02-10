//Mark agero api
const request = require("request");
const axios = require("axios");
const tiktokdl = (url, callback) => {
	let a = axios.get('https://ttdl.markkevin5.repl.co/?link=' + url);
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