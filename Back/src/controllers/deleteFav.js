const { Favorite } = require('../DB_connection')

const deleteFav = async (req, res) => {
    const { id } = req.params
    const deleteChar = await Favorite.findByPk(id)
    deleteChar.destroy()
    const allFav = await Favorite.findAll()
    return res.status(200).json(allFav)
}

module.exports = deleteFav