const request = require("request");
const tts = (config, callback) => {
  let url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${config.prompt}&tl=${config.lang}&client=tw-ob`;
  request({
    url: url,
    encoding: null
  }, 
  (err, resp, buffer) => {
    callback(err, resp);
  })
}
module.exports = { tts };