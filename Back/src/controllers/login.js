const { User } = require("../DB_connection");

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) throw new Error("Faltan datos");
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error("Usuario no encontrado");
    if (!(user.password == password)) throw new Error("Contraseña incorrecta");
    res.status(200).json({acces: true})
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = login;
