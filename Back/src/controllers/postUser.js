const { User } = require("../DB_connection");

const postUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(404).json({ mensaje: "Faltan datos" });
    const newUser = await User.findOrCreate({
      where: { email: email },
      defaults: { email: email, password: password },
    });
    return res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = postUser;
