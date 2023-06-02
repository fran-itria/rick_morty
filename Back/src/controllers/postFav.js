const { Favorite, User } = require("../DB_connection");

const postFav = async (req, res) => {
  const { name, origin, status, species, gender, email } = req.body;
  if (!name || !origin || !status || !species || !gender)
    throw new Error("Faltan datos");
  try {
    const user = await User.findOne({ where: { email } });
    const favorite = await Favorite.create({
      name,
      origin,
      status,
      species,
      gender,
      userId: user.id,
    });
    await user.addFavorite(favorite);
    return res.status(200).json(favorite);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = postFav;
