const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.static('./public'));

app.use(express.urlencoded({ extended: true }));
function getApi(dir, cb) {
	const api = require(dir);
	cb(api);
}

app.get('/',(req, res) => {
	res.redirect('/api');
});

app.get('/api', (req, res) => {
	res.redirect('/');
});

app.get('/api/fbImage', (req, res) => {
	getApi('./api/getFbImage.js', (api) => {
		api.getFbImage(req.query.uid, (err, resp) => {
			if (!err && resp.statusCode === 200) {
                res.set("Content-Type", "image/png");
                res.send(resp.body);
            }
        })
    })
});

app.get('/api/shoti', (req, res) => {
	getApi('./api/shoti.js', (api) => {
		api.shoti((data) => {
			res.type('json').send(JSON.stringify(data, null, 2) + '\n');
        })
    })
});

app.get('/api/shoti/add', (req, res) => {
	getApi('./api/shoti.js', (api) => {
		api.shotiAdd(req.query.url, (data) => {
			res.type('json').send(JSON.stringify(data, null, 2) + '\n');
        })
    })
});


app.get('/api/frog-image', (req, res) => {
	getApi('./api/frog.js', (api) => {
		api.frogImg((data) => {
			res.type('json').send(JSON.stringify(data, null, 2) + '\n');
        })
    })
});

app.get('/api/tts', (req, res) => {
	getApi('./api/tts.js', (api) => {
		api.tts({ lang: req.query.lang, prompt: req.query.text }, (err, resp) => {
			if (!err && resp.statusCode === 200) {
                res.set("Content-Type", "audio/mp3");
                res.send(resp.body);
            }
        })
    })
});

app.get('/api/simsimi', (req, res) => {
	getApi('./api/simsimi.js', (api) => {
		api.simsimi(req.query.message, (message) => {
			res.type('json').send(JSON.stringify(message, null, 2) + '\n');
        })
    })
});
app.get('/api/simsimi/teach', (req, res) => {
	getApi('./api/simsimi.js', (api) => {
		api.simsimiTeach(req.query.message, req.query.reply, (message) => {
			res.type('json').send(JSON.stringify(message, null, 2) + '\n');
        })
    })
});

app.get('/api/qoutes/today', (req, res) => {
	getApi('./api/quotes.js', (api) => {
		api.quotesToday((data) => {
			res.type('json').send(JSON.stringify(data, null, 2) + '\n');
        })
    })
});

app.get('/api/tiktok-dl', (req, res) => {
	getApi('./api/tiktokdl.js', (api) => {
		api.tiktokdl(req.query.url, (err, resp) => {
			if (!err && resp.statusCode === 200) {
                res.set("Content-Type", "video/mp4");
                res.send(resp.body);
            }
        })
    })
});



app.get('/host/mcserver', (req, res) => {
	res.redirect('minecraft://?addExternalServer=§l§9libyzxy0|libyzxy0.aternos.me:32993');
});        


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Api is listening on port ${port}!`));
