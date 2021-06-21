import dotenv from 'dotenv'
dotenv.config()


export default {
  "type": "postgres",
  "host": "db-letter",
  "port": 5432,
  "username": process.env.POSTEGRESS_USER,
  "password": process.env.POSTEGRESS_PASSWORD,
  "database": process.env.POSTEGRES_BD,
  "syncronize": true,
  "logging": false,
  "migrations": [
    "./src/database/migrations/*.ts"
  ],
  "entities": [
    "./src/models/*.ts"
  ],
  "cli": {
      "migrationsDir": "./src/database/migrations",
      "entitiesDir": "./src/models"
  }
}