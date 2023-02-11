const axios = require("axios");
const quotesToday = (callback) => {
	let a = axios.get('https://zenquotes.io/api/today');
	a.then((response) => {
    console.log(response.data)
		if(response.data[0].q == null && response.data[0].a == null) {
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
			  quote: response.data[0].q,
		      author: response.data[0].a
		   }
		}
		callback(data);
		}
	})
}

const quotes = (callback) => {
	let a = axios.get('https://zenquotes.io/api/random');
	a.then((response) => {
    console.log(response.data)
		if(response.data[0].q == null && response.data[0].a == null) {
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
			  quote: response.data[0].q,
		      author: response.data[0].a
		   }
		}
		callback(data);
		}
	})
}


module.exports = { quotesToday, quotes };