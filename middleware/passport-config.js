const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  let authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Access denied. No token provided or invalid format.' });
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token.' });
    }

    req.user = decoded; // decoded contient l'id ou les infos du user
    next();
  });
};

module.exports = verifyToken;
