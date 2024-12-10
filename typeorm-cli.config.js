const { DataSource } = require('typeorm');

const AppDataSource = new DataSource({
  type: 'mysql', 
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '617891aA',
  database: 'beekeeperdata',
  entities: ['dist/**/*.entity.js'], 
  migrations: ['dist/migrations/*.js'], 
  synchronize: false,
  logging: true,
});

module.exports = AppDataSource;