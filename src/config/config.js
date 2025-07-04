module.exports = {
  "development": {
    "username": process.env.DB_LOCAL_USERNAME,
    "password": process.env.DB_LOCAL_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_LOCAL_HOSTNAME,
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "postgres"
  }
}
