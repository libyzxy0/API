const fs = require("fs");
let active = true;

const errIDs = () => Math.random().toString(36).substr(2, 41);
const errID = errIDs();
const shoti = (callback) => {
if(!active) {
	callback({
	code: 400,
	info: "Endpoint unavailable.",
	message: "For more information please contact Jan Liby Dela Costa.", 
	errID
})
} else {
  let urls = require('./data/shoti.json');
  const video_url = urls[Math.floor(urls.length * Math.random())];
  if(video_url == null) {
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
          url: video_url
      }
  }
  callback(data);
 }
}
}
const shotiAdd = (url, callback) => {
if(!active) {
	callback({
	code: 400,
	info: "Endpoint unavailable.",
	message: "For more information please contact Jan Liby Dela Costa.", 
	errID
})
} else {
	if(url == 0 || url == undefined || url == null) {
		callback({ message: "Error undefined url!", code: 404 });
	} else {
		const path = __dirname + "/data/shoti.json";
	    let arr = JSON.parse(fs.readFileSync(path));
	    if(arr.includes(url)) {
		    callback({ message: "Url already exist!", code: 400 });
	    } else {
		    arr.push(url);
            fs.writeFileSync(path, JSON.stringify(arr, null, 2));
            callback({ message: "Successfully video added!", code: 200 });
	    }
	}
}
} 
module.exports = { shoti, shotiAdd };