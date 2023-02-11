const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')
const getAPI = require('../utils/getAPI')

const shoti = asyncWrapper(async (req, res) => {
	const url = req.query.url;
	if(url == 0 || url == undefined || url == null) {
		getAPI('shoti', (api) => {
			api.shoti((data) => {
				res.type('json').send(JSON.stringify(data, null, 2) + '\n');
            })
        })
    } else {
    	getAPI('shoti', (api) => {
			api.shotiAdd(url, (data) => {
				res.type('json').send(JSON.stringify(data, null, 2) + '\n');
            })
        })
    }
})
const simsimi = asyncWrapper(async (req, res) => {
	let reply = req.query.reply;
	let message = req.query.message;
	if(reply == 0 || reply == undefined || reply == null) {
		getAPI('simsimi', (api) => {
			api.simsimi(message, (data) => {
			res.type('json').send(JSON.stringify(data, null, 2) + '\n');
            })
        })
    } else {
    	getAPI('simsimi', (api) => {
		api.simsimiTeach(message, reply, (data) => {
			res.type('json').send(JSON.stringify(data, null, 2) + '\n');
        })
    })
    }
})
const quotes = asyncWrapper(async (req, res) => {
	getAPI('quotes', (api) => {
		api.quotes((data) => {
			res.type('json').send(JSON.stringify(data, null, 2) + '\n');
        })
    })
}) 
const tiktokdl = asyncWrapper(async (req, res) => {
	getAPI('tiktokdl', (api) => {
		api.tiktokdl(req.query.url, (err, resp) => {
			if (!err && resp.statusCode === 200) {
                res.set("Content-Type", "video/mp4");
                res.send(resp.body);
            }
        })
    })
})
const fbImage = asyncWrapper(async (req, res) => {
	getAPI('facebook-image', (api) => {
		api.getFbImage(req.query.uid, (err, resp) => {
			if (!err && resp.statusCode === 200) {
                res.set("Content-Type", "image/png");
                res.send(resp.body);
            }
        })
    })
})
const textToSpeech = asyncWrapper(async (req, res) => {
	getAPI('text-to-speech', (api) => {
		api.tts({ lang: req.query.lang, prompt: req.query.text }, (err, resp) => {
			if (!err && resp.statusCode === 200) {
                res.set("Content-Type", "audio/mp3");
                res.send(resp.body);
            }
        })
    })
}) 


module.exports = {
	shoti, 
	simsimi, 
	quotes, 
	tiktokdl, 
	fbImage, 
	textToSpeech
}
