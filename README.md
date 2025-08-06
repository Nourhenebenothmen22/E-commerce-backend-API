🛍️✨ API Backend E-Commerce – Robuste & Sécurisée
🔧 Description du projet :
Développement d'une API backend robuste destinée à une plateforme e-commerce complète, conçue pour répondre aux besoins des applications modernes avec une architecture modulaire et sécurisée.
Fonctionnalités Principales
🎯 Fonctionnalités principales :
🔐 Authentification JWT pour la sécurisation des accès

📦 CRUD complet des produits

👥 Gestion des utilisateurs & clients

🧑‍💼 Administration des comptes administrateurs

🏢 Gestion des fournisseurs

📊 Comptage & statistiques des entités (produits, utilisateurs...)

📁 Architecture modulaire avec MVC (Models, Controllers, Routes)

⚙️ Technologies Utilisées

| Catégorie             | Technologies / Outils                          |
| --------------------- | ---------------------------------------------- |
| **Backend**           | Node.js, Express.js                            |
| **Base de données**   | MongoDB (hébergée sur MongoDB Atlas)           |
| **Authentification**  | JWT (JSON Web Tokens)                          |
| **Sécurité**          | Helmet, CORS                                   |
| **Logs / Monitoring** | Morgan                                         |
| **Environnement**     | Dotenv (gestion des variables d'environnement) |


📁 Structure du projet e-commerce-api

| Dossier/Fichier              | Description                                          |
| ---------------------------- | ---------------------------------------------------- |
| **`/config/`**               | Configuration générale du projet                     |
| └── `db.js`                  | Configuration de la connexion à MongoDB              |
| **`/controllers/`**          | Logique métier (CRUD, traitements...)                |
| ├── `adminControllers.js`    | Contrôleur des administrateurs                       |
| ├── `customerControllers.js` | Contrôleur des clients                               |
| ├── `productControllers.js`  | Contrôleur des produits                              |
| ├── `providerControllers.js` | Contrôleur des fournisseurs                          |
| └── `userControllers.js`     | Contrôleur des utilisateurs                          |
| **`/middleware/`**           | Middlewares personnalisés                            |
| └── `authMiddleware.js`      | Middleware d’authentification JWT                    |
| **`/models/`**               | Schémas et modèles Mongoose                          |
| ├── `Admin.js`               | Modèle Admin                                         |
| ├── `Customer.js`            | Modèle Client                                        |
| ├── `Product.js`             | Modèle Produit                                       |
| ├── `Provider.js`            | Modèle Fournisseur                                   |
| └── `User.js`                | Modèle Utilisateur                                   |
| **`/routes/`**               | Définition des endpoints de l’API                    |
| ├── `adminRoutes.js`         | Routes des administrateurs                           |
| ├── `customerRoutes.js`      | Routes des clients                                   |
| ├── `productRoutes.js`       | Routes des produits                                  |
| ├── `providerRoutes.js`      | Routes des fournisseurs                              |
| └── `userRoutes.js`          | Routes des utilisateurs                              |
| `.env`                       | Variables d’environnement (secrets, URL DB, etc.)    |
| `.gitignore`                 | Fichiers/dossiers ignorés par Git                    |
| `package.json`               | Liste des dépendances et scripts npm                 |
| `package-lock.json`          | Verrouillage des versions des paquets                |
| `server.js`                  | Fichier principal, point d’entrée du backend Express |


Démarrage du Serveur
# Mode développement
npm run dev

# Mode production
npm start

🔐 Authentification
| Méthode | Endpoint            | Description           |
| ------- | ------------------- | --------------------- |
| POST    | `/api/users/login`  | Connexion utilisateur |
| POST    | `/api/users/logout` | Déconnexion           |


👤 Utilisateurs (Users)
| Méthode | Endpoint                | Description                   |
| ------- | ----------------------- | ----------------------------- |
| POST    | `/api/users/register`   | Inscription d’un utilisateur  |
| POST    | `/api/users/login`      | Connexion utilisateur         |
| GET     | `/api/users/`           | Lister tous les utilisateurs  |
| GET     | `/api/users/:id`        | Obtenir un utilisateur par ID |
| PUT     | `/api/users/update/:id` | Mettre à jour un utilisateur  |
| DELETE  | `/api/users/delete/:id` | Supprimer un utilisateur      |
| GET     | `/api/users/count`      | Compter les utilisateurs      |



👨‍💼 Administrateurs (Admins)
| Méthode | Endpoint                | Description                      |
| ------- | ----------------------- | -------------------------------- |
| POST    | `/api/admin/add`        | Ajouter un administrateur        |
| GET     | `/api/admin/list`       | Lister tous les administrateurs  |
| GET     | `/api/admin/:id`        | Obtenir un administrateur par ID |
| PUT     | `/api/admin/update/:id` | Mettre à jour un administrateur  |
| DELETE  | `/api/admin/delete/:id` | Supprimer un administrateur      |
| GET     | `/api/admin/count`      | Compter les administrateurs      |


🛍️ Produits
| Méthode | Endpoint                                 | Description                            |
| ------- | ---------------------------------------- | -------------------------------------- |
| POST    | `/api/products`                          | Créer un produit                       |
| GET     | `/api/products`                          | Lister tous les produits               |
| GET     | `/api/products/:id`                      | Obtenir un produit par ID              |
| PUT     | `/api/products/:id`                      | Mettre à jour un produit               |
| DELETE  | `/api/products/:id`                      | Supprimer un produit                   |
| GET     | `/api/products/count`      *(optionnel)* | Compter les produits *(si implémenté)* |

📦 Commandes (Orders)
| Méthode | Endpoint            | Description                 |
| ------- | ------------------- | --------------------------- |
| POST    | `/api/orders`       | Créer une commande          |
| GET     | `/api/orders`       | Lister toutes les commandes |
| GET     | `/api/orders/:id`   | Obtenir une commande par ID |
| PUT     | `/api/orders/:id`   | Mettre à jour une commande  |
| DELETE  | `/api/orders/:id`   | Supprimer une commande      |
| GET     | `/api/orders/count` | Compter les commandes       |

👥 Clients (Customers)
| Méthode | Endpoint               | Description              |
| ------- | ---------------------- | ------------------------ |
| POST    | `/api/customers`       | Créer un client          |
| GET     | `/api/customers`       | Lister tous les clients  |
| GET     | `/api/customers/:id`   | Obtenir un client par ID |
| PUT     | `/api/customers/:id`   | Mettre à jour un client  |
| DELETE  | `/api/customers/:id`   | Supprimer un client      |
| GET     | `/api/customers/count` | Compter les clients      |




