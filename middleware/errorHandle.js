const { CustomAPIError } = require("../errors/CustomAPIError")

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }

  return res.status(500).json({ msg: "Server Error!!!!" })
}

module.exports = { errorHandler }