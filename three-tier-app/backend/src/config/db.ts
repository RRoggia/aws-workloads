export default () => ({
  dbHost: process.env.dbHost || "localhost",
  dbPort: process.env.dbPort || "5432",
  dbUsername: process.env.dbUsername || "postgres",
  dbPassword: process.env.dbPassword || "three-tier-app-demo",
  dbDatabase: process.env.dbDatabase || "three-tier-app-db"
})