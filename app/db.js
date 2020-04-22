const Sequelize = require('sequelize')
const walk = require('walk-sync')
const databaseConfig = require("./config/config.json")
const path = require('path')


const database  = databaseConfig['development']['database']
const username  = databaseConfig['development']['username']
const password  = databaseConfig['development']['password']
const host      = databaseConfig['development']['host']
const port      = databaseConfig['development']['port']

const sequelize = new Sequelize( database, username, password,  {
        host: host,
        port: port,
        dialect: "mysql",
        define: { timestamps: false },
        logging: false
    })

async function create(){
        const pathModels = './models'

const paths = ['state.js', 'city.js', 'time.js', 'date.js','datetime.js' , 'text.js', 'user.js']

let models = [ ];

for (const fpath of paths) {
        const basename = path.basename(fpath);
        if ( basename.endsWith(".js") && basename != path.basename(__filename)) {
                const abspath  = path.join(pathModels, fpath);
                const model    = sequelize["import"](abspath);
                
                const { name } = model;

                console.log(`Loading Model: ${name}...`);

                models[name] = model;

                models.push(name);
        }
}

for (const model of models) {
        if ( models[model].associate ) {
                console.log(`Associating model ${model}...`);
                models[model].associate(models);
        }
}


try {
        await sequelize.authenticate();
        
        isConnected = true;

        console.log(`Successfully connected DataBase ${database}`);

        await sequelize.sync();

        for ( const name in models ) {
            const model = models[name];

            if ( model.beta ) {
                console.log(`Syncing model ${name}...`);
                        
                try {
                        await sequelize
                        .query('SET FOREIGN_KEY_CHECKS = 0', {raw: true})
                        .then(() => (model.sync({force:true})))
                        
                } catch (e) {
                    console.log(`Error syncing model ${name} ${e}.`)
                }
            }
        }
} catch (err) {
        console.log(`Unable to connect to DataBase ${database}: ${err}`);
        
        }
}

// create()

module.exports = sequelize