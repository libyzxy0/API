const express = require('express')
const router = express.Router()

const {
	shoti, 
	simsimi, 
	quotes, 
	tiktokdl, 
	fbImage, 
	textToSpeech
} = require('../controllers/api')

router.get('/', (req, res, next) => {
	res.redirect('/');
})

router.route('/shoti').get(shoti)
router.route('/simsimi').get(simsimi)
router.route('/tiktok-dl').get(tiktokdl)
router.route('/quotes').get(quotes)
router.route('/fbImage').get(fbImage)
router.route('/text-to-speech').get(textToSpeech)

module.exports = router
