const jwt = require("jsonwebtoken");
function LoginWithJwt(req, res, next) {
  const body = req.body;
  let token = jwt.sign(body, process.env.SECRET);
  res.cookie("token", token);
  next();
}

module.exports = {
  LoginWithJwt,
};
