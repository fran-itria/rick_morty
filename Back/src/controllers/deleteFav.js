const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteChar = await Favorite.findOne({ where: { name: id } });
    if (!deleteChar) throw new Error("Personaje no encontrado en favoritos");
    deleteChar.destroy();
    return res.status(200).json(deleteChar);
  } catch (error) {
    return res.status(400).json({ error: error.mesasge });
  }
};

module.exports = deleteFav;
