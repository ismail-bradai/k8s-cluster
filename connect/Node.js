const { Pool } = require('pg');

const pool = new Pool({
  user: 'myuser',
  host: 'postgres-service',  // 👈 le nom du service Kubernetes
  database: 'mydb',
  password: 'mypassword',
  port: 5432,
});

pool.connect()
  .then(() => console.log("✅ Connected to PostgreSQL"))
  .catch((err) => console.error("❌ PostgreSQL connection error:", err));
