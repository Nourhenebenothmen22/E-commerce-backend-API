API backend robuste pour une plateforme e-commerce complète avec authentification, gestion de produits, clients, fournisseurs et administrateurs.

Fonctionnalités Principales
🔐 Authentification sécurisée avec JWT et middleware de protection des routes

👑 Gestion des administrateurs (CRUD complet)

👥 Gestion des utilisateurs (profils, commandes, etc.)

🛒 Gestion des produits avec suivi des stocks

🤝 Gestion des fournisseurs et relations produits

📊 Statistiques (nombre d'admins, etc.)

⚙️ Configuration centralisée via variables d'environnement

🔒 Sécurité renforcée avec Helmet et CORS

Technologies Utilisées
Backend: Node.js, Express.js

Base de données: MongoDB (Atlas)

Authentification: JWT (JSON Web Tokens)

Sécurité: Helmet, CORS

Logging: Morgan

Gestion d'environnement: Dotenv

Structure du Projet
e-commerce-api/
├── config/           # Configuration de la base de données
│   └── db.js
├── controllers/      # Contrôleurs métier
│   ├── adminControllers.js
│   ├── customerControllers.js
│   ├── productControllers.js
│   ├── providerControllers.js
│   └── userControllers.js
├── middleware/       # Middlewares personnalisés
│   └── authMiddleware.js
├── models/           # Modèles Mongoose
│   ├── Admin.js
│   ├── Customer.js
│   ├── Product.js
│   ├── Provider.js
│   └── User.js
├── routes/           # Définition des routes
│   ├── adminRoutes.js
│   ├── customerRoutes.js
│   ├── productRoutes.js
│   ├── providerRoutes.js
│   └── userRoutes.js
├── .env              # Variables d'environnement
├── .gitignore        # Fichiers ignorés par Git
├── package.json      # Dépendances et scripts
├── package-lock.json # Verrouillage des versions
└── server.js         # Point d'entrée de l'application

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




