import dotenv from 'dotenv'
import { Pool } from 'pg'

dotenv.config()

const {
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_TEST_DB,
  RDS_HOSTNAME,
  RDS_DB_NAME,
  RDS_USERNAME,
  RDS_PASSWORD,
  ENV,
} = process.env

// Documentation: https://node-postgres.com/api/pool
// Connecting to the database in case of Development
const poolDev = new Pool({
  host: POSTGRES_HOST,
  database: POSTGRES_DB,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  max: 20,
  idleTimeoutMillis: 30000,
})

// Connecting to the database in case of test
const poolTest = new Pool({
  host: POSTGRES_HOST,
  database: POSTGRES_TEST_DB,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  max: 20,
  idleTimeoutMillis: 30000,
})

// Connecting to the database in case of Production (RDS)
const poolProd = new Pool({
  host: RDS_HOSTNAME,
  database: RDS_DB_NAME,
  user: RDS_USERNAME,
  password: RDS_PASSWORD,
  max: 20,
  idleTimeoutMillis: 30000,
})

// Export the connection pool
const Client = ENV === 'dev' ? poolDev : ENV === 'test' ? poolTest : poolProd
console.log(`Connected to ${ENV} database`)
export default Client
