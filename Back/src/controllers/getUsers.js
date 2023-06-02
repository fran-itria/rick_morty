const { User, Favorite } = require("../DB_connection");

const getUsers = async (req, res) => {
  try {
    const allUsers = await User.findAll({
      include: {
        model: Favorite,
        attributes: ["id", "name", "gender", "status", "origin", "species"],
        through: { attributes: [] },
      },
    });
    return res.status(200).json(allUsers);
  } catch (error) {
    console.log(error);
  }
};

module.exports = getUsers;
