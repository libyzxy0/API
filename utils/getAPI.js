function getAPI(dir, cb) {
	const api = require('../api/' + dir);
	cb(api);
}
module.exports = getAPI
