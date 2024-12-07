const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres", // Your PostgreSQL username
    host: "localhost", // Localhost
    database: "portfolio_messages", // Database name
    password: "new_password", // Replace with your actual password
    port: 5432, // Default PostgreSQL port
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};
