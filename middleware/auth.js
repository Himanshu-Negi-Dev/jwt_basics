const jwt = require('jsonwebtoken');
const { CustomAPIError } = require("../errors/CustomAPIError");

const authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new CustomAPIError('Access denied', 401)
  }

  const token = authorization.split(' ')[1];
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decode;
    req.user = { id, username };
    next();
  } catch (error) {
    throw new CustomAPIError('Invalid token', 401)
  }
};

module.exports = { authMiddleware }