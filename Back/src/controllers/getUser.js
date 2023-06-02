const { User, Favorite } = require("../DB_connection");

const getUser = async (req, res) => {
  try {
    const { email } = req.query;
    const user = await User.findOne({
      where: {
        email,
      },
      include: {
        model: Favorite,
        attributes: ["id", "name", "gender", "status", "origin", "species"],
        through: { attributes: [] },
      },
    });
    res.status(200).json(user);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error });
  }
};

module.exports = getUser;
