const simsimiMessages = require("./data/simsimi-messages.json");
const fs = require("fs");
function getMessage(prompt, callback, message) {
	prompt = prompt.toLowerCase()
    function run(cb) {
        for(let i = 0;i < message.length;i++) {
        if (prompt.includes(message[i].message)) {
        return message[i].reply
       }
     }
    }
    if (run() == undefined) {
        callback("I don't know what you saying!")
    } else {
        callback(run())
    }
}

const simsimi = (input, callback) => {
	getMessage(input, (message) => {
		const data = {
			status: "success", 
			code: 200,
			result: {
				message: message
			}
		}
		callback(data);
    }, simsimiMessages);
}

const simsimiTeach = (message, reply, callback) => {
	const path = __dirname + "/data/simsimi-messages.json";
	let arr = JSON.parse(fs.readFileSync(path));
	const data = {
		message: message.toLowerCase(), 
		reply: reply
	}
	function push(array, item) {
		if (!array.find(({message}) => message === item.message)) {
        array.push(item);
        fs.writeFileSync(path, JSON.stringify(arr, null, 2));
        callback({ message: "success" });
        } else {
        	callback({ message: "error" });
        }
    }
	push(arr, data);
}

module.exports = { simsimi, simsimiTeach };