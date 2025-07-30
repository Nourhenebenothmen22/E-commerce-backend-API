// 📦 Importation des modules nécessaires
const express = require('express');      // Framework web minimaliste pour Node.js
const dotenv = require('dotenv');        // Charge les variables d'environnement depuis un fichier .env
const helmet = require('helmet');        // Sécurise l'application en définissant divers en-têtes HTTP
const morgan = require('morgan');        // Middleware de logging HTTP
const cors = require('cors');            // Active le partage de ressources entre origines (Cross-Origin Resource Sharing)

// 🔧 Chargement des variables d'environnement depuis le fichier .env
dotenv.config();

// 🔌 Connexion à la base de données MongoDB
const { connectDB } = require('./config/db'); // Import de la fonction de connexion
connectDB(); // Exécution de la fonction pour établir la connexion

// 🚀 Initialisation de l'application Express
const app = express();

// 🛡️ Application des middlewares globaux

app.use(helmet());               // Protection contre certaines vulnérabilités web (XSS, clickjacking, etc.)
app.use(cors());                 // Autorise les requêtes venant de différents domaines (utile pour le frontend séparé du backend)
app.use(morgan('dev'));          // Affiche les logs HTTP dans la console (utile pour le développement)
app.use(express.json());         // Permet à Express de comprendre les corps de requêtes JSON (req.body)

// ✅ Définition des routes 

// 📍 Démarrage du serveur sur le port défini dans .env ou sur 5000 par défaut
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur le port ${PORT}`);
});
