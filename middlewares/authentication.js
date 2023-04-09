const { verifyToken } = require("../helpers/");
const { User } = require("../models/");

const authentication = async (req, res, next) => {
  try {

    // console.log('MASUK AUTH INI');
    let { access_token } = req.headers;
    // console.log(access_token);

    // CHECK ACCESS_TOKEN
    if (!access_token) {
      throw { name: 'UNAUTHORIZED' };
    } else {

      // VERIFY TOKEN USING JWT
      let payload = verifyToken(access_token);
      // console.log(payload);

      // FIND THE USER by ID
      let user = await User.findByPk(payload.id);

      // CHECK User
      if (!user) {
        throw { name: 'UNAUTHORIZED' };
      } else {

        req.user = {
          id : payload.id,
          email: user.email,
          role: user.role
      }

      next();

      }
    }
  } catch (err) {
    next(err);
  }


} //


module.exports = { authentication };