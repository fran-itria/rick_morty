const { User } = require("../DB_connection");

const postUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) throw new Error("Faltan datos");
    const user = await User.findOne({ where: { email: username } });
    if (user) throw new Error("Usuario con ese mail ya registrado");
    const newUser = await User.create({
      email: username,
      password,
    });
    return res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = postUser;
