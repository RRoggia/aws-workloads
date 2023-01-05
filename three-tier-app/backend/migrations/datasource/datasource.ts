import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "postgres",
  "password": "three-tier-app-demo",
  "database": "three-tier-app-db",
  "migrations": ["./migrations/*"]
})

export default AppDataSource
