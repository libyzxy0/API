const request = require("request");
const getFbImage = (uid, callback) => {
    let url = `https://graph.facebook.com/${uid}/picture?width=720&height=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;
    request({
    url: url,
    encoding: null
  }, 
  (err, resp, buffer) => {
    callback(err, resp);
  })
}
module.exports = { getFbImage };