
const { User } = require('../DB_connection')

const login = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) return res.status(404).json({ mensaje: "Faltan datos" })
    try {
        const user = await User.findOne({ where: email })
        if (!user) return res.status(404).json({ error: 'Usuario no encontrado' })
        if (!(user.password == password)) return res.status(403).json({ error: 'Contraseña incorrecta' })
        return { acces: true }
    } catch (error) {
        res.status(500).json({ error })
    }
}

module.exports = login 