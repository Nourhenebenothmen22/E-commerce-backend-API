const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // Vérifier la présence du header Authorization
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ 
      message: 'Access denied. No token provided or invalid format.' 
    });
  }

  // Extraire le token
  const token = authHeader.split(' ')[1];
  
  // Vérifier le token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error("JWT Verification Error:", err.message);
      return res.status(403).json({ message: 'Invalid or expired token.' });
    }
    
    // Ajouter les infos utilisateur à la requête
    req.user = { id: decoded.id };
    next();
  });
};