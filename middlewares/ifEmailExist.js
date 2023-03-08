const { User } = require('../models');

const ifEmailExist = async (req, res, next) => {
  const { email } = req.body;
  const userEmail = await User.findOnde({ where: { email } });

  if (userEmail) {
    return res.status(409).json({
      message: 'User already registered',
    });
  }
  next();
};
module.exports = ifEmailExist;