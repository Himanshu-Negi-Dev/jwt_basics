const login = (req, res) =>{
  res.send('hello from controller')
}

const dashboardController = (req, res)=>{
  res.send('hello from dashboard')
}

module.exports = {login, dashboardController}