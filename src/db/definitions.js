import { Sequelize, DataTypes, Model } from "sequelize";
import 'dotenv/config'

const sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASS ?? null, {
    host: 'localhost',
    dialect: 'mysql'
})

class Professor extends Model {}
class Palavras extends Model {}
class Grupos extends Model {}
class Disciplinas extends Model {}
class Palavras_Grupos extends Model {}
class Grupos_Disciplinas extends Model {}

Professor.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING(32),
        allowNull: false,
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
}, { sequelize, modelName: 'professor', tableName: 'professor', createdAt: false, updatedAt: false });

Palavras.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    palavra: {
        type: DataTypes.STRING(32),
        allowNull: false,
    }
}, { sequelize, modelName: 'palavras' });

Grupos.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(128),
        allowNull: false,
    }
}, { sequelize, modelName: 'grupos' });

Disciplinas.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING(255),
        allowNull: false,
    }
}, { sequelize, modelName: 'disciplinas' });

Palavras_Grupos.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    palavraId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Palavras,
            key: 'id'
        }
    },
    grupoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Grupos,
            key: 'id'
        }
    }
}, { sequelize, modelName: 'palavras_grupos' });

Grupos_Disciplinas.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    grupoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Grupos,
            key: 'id'
        }
    },
    disciplinaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Disciplinas,
            key: 'id'
        }
    }
}, { sequelize, modelName: 'grupos_disciplinas' });

// Define associations
Palavras.belongsToMany(Grupos, { through: Palavras_Grupos, foreignKey: 'palavraId' });
Grupos.belongsToMany(Palavras, { through: Palavras_Grupos, foreignKey: 'grupoId' });

Grupos.belongsToMany(Disciplinas, { through: Grupos_Disciplinas, foreignKey: 'grupoId' });
Disciplinas.belongsToMany(Grupos, { through: Grupos_Disciplinas, foreignKey: 'disciplinaId' });

// const syncDB = (async () => {
//     await sequelize.sync({force: true}); // Sync all models with the database
//     console.log("Database synced!");
// })();

export default sequelize;
export {
    // syncDB,
    Professor,
    Palavras,
    Grupos,
    Disciplinas,
    Palavras_Grupos,
    Grupos_Disciplinas,
};