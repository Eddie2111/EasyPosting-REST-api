const User = require('../Model/userModal');
const bcryptjs = require('bcryptjs');


const register_user= async (req, res) => {
  try {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        passwordHash: bcryptjs.hashSync(req.body.passwordHash, 10),
        phone: req.body.phone,
        isAdmin: req.body.isAdmin,
        street: req.body.street,
        apartment: req.body.apartment,
        zip: req.body.zip,
        city: req.body.city,
        country: req.body.country,
      });

      const userData = await User.findOne({ email:req.body.email});
      if (userData) {
        res.send("Email Already Exisist");
      } else {
        const user_data = await user.save();
        res.status(200).send({sucess:true, data:user_data});
      }
  } catch (error) {
    console.log(error);
    res.send("somthing Wrong");
  }
};

module.exports = {
  register_user,
};
