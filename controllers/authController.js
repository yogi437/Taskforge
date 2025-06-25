const jwt = require('jsonwebtoken');
const User = require('../models/User');

const register = async (req, res) => {
    const user = await User.create(req.body);
    res.status(201).json(user);
};

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || user.password !== password) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ token });
};
module.exports = { register, login };