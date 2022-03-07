console.log('DATABASE_URL: ', process.env.DATABASE_URL);
module.exports = {
  type: process.env.DB_TYPE,
  url: process.env.DATABASE_URL,
  entities: ['./dist/**/*.entity.js'],
  migrations: ['./dist/migrations/*.js'],
  cli: {
    migrationsDir: './src/migrations',
  },
  syncronize: false,
};
