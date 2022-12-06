const { User, Post } = require("../db");

const getUsers = async (req, res) => {
  try {
    const data = await User.findAll();
    if (!data.length) throw new Error("There are no users in the database");
    res.status(200).json(data);
  } catch (err) {
    res.status(500).send({ msg: "Erorr on the server: ", err: err.message });
  }
};
const findOrCreateUser = async (req, res) => {
  try {
    let { user, email, main_photo, cover_photo } = req.body;
    const [usuario, created] = await User.findOrCreate({
      where: {
        email,
      },
      defaults: {
        user,
        main_photo:
          main_photo ||
          "https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255588-stock-illustration-empty-photo-of-male-profile.jpg",
        cover_photo:
          cover_photo ||
          "https://pits-agroforestal.net/wp-content/themes/merlin/images/default-slider-image.png",
      },
    });
    if (!created) {
      return res.status(200).send({ msg: "It's you", user: usuario });
    }
    res.status(200).send({
      msg: "Successfully Created User",
      user: usuario,
    });
  } catch (err) {
    res.status(500).send({ msg: "Erorr on the server: ", err: err.message });
  }
};

module.exports = {
  getUsers,
  findOrCreateUser,
};
