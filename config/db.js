const mongoose = require('mongoose');
exports.connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('✅ MongoDB connecté avec succès');
    }
    catch (error) {
        console.error('❌ Échec de la connexion à MongoDB:', error.message);
        process.exit(1); // Arrête le processus en cas d'erreur
    }
}