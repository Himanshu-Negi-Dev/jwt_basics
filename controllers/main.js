const jwt = require('jsonwebtoken');
const { CustomAPIError } = require("../errors/CustomAPIError");
const { asyncWrapper } = require("../middleware/async");

const login = asyncWrapper((req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new CustomAPIError('Invalid Credentials', 400);
  }
  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '1d' });

  return res.status(200).json({ msg: ' login success', token });

});

const dashboardController = asyncWrapper((req, res) => {
  res.status(200).json({ data: `hi ${req.user.username}` })
});

module.exports = { login, dashboardController }