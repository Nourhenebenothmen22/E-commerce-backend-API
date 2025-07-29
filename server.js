// 📦 Importation des modules
const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

// 🔧 Configuration de l'environnement
dotenv.config();

// 🚀 Initialisation de l'application
const app = express();

// 🛡️ Middlewares globaux
app.use(helmet());               // Sécurise les headers HTTP
app.use(cors());                 // Autorise les requêtes CORS
app.use(morgan('dev'));          // Log des requêtes HTTP
app.use(express.json());         // Parse les requêtes JSON

// ✅ Routes ici (à ajouter plus tard)

// 📍 Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur le port ${PORT}`);
});
