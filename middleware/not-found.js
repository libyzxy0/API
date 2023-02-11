const notFound = (req, res) => res.status(404).send({ code: 404, msg: "Endpoint not found!" })

module.exports = notFound
