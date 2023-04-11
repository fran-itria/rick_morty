const { Favorite } = require('../DB_connection')

const postFav = async (req, res) => {
    const { name, origin, status, image, species, gender } = req.body
    if (!name || !origin || !status || !image || !species || !gender) return res.status(401).json({ error: 'Faltan datos' })
    try {
        await Favorite.findOrCreate({
            where: { name: name },
            defaults: {
                name: name,
                origin: origin,
                status: status,
                image: image,
                species: species,
                gender: gender
            }
        })
        const allFavorites = await Favorite.findAll()
        return res.status(200).json(allFavorites)
    } catch (error) {
        res.status(500).json({ error })
    }
}

module.exports = postFav