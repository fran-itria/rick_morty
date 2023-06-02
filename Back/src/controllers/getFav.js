const { Favorite, User } = require("../DB_connection");

const getFav = async (req, res) => {
  try {
    const allFavorites = await Favorite.findAll({
      include: [
        {
          model: User,
          attributes: ["id", "email"],
          through: { attributes: [] },
        },
      ],
    });
    return res.status(200).json(allFavorites);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getFav;
