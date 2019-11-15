const { Pool } = require("pg");

const pool = new Pool({
  user: "pat",
  host: "127.0.0.1",
  database: "fullstack_blog",
  password: "secretpassword",
  post: 5432
});

module.exports = pool;
