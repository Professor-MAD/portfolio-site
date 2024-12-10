import { Pool } from "pg";

// PostgreSQL connection pool setup
const pool = new Pool({
    user: process.env.PG_USER || "postgres",
    host: process.env.PG_HOST || "localhost", // Ensure correct host in production
    database: process.env.PG_DATABASE || "portfolio_messages",
    password: process.env.PG_PASSWORD || "new_password",
    port: process.env.PG_PORT || 5432,
});

// Helper function to set CORS headers
const setCorsHeaders = (req, res) => {
    const allowedOrigins = ["https://portfolio-site-c4rd.vercel.app"];
    const origin = req.headers.origin;

    if (allowedOrigins.includes(origin)) {
        res.setHeader("Access-Control-Allow-Origin", origin);
    } else {
        console.warn("Disallowed origin:", origin);
        res.setHeader("Access-Control-Allow-Origin", "null"); // Block disallowed origins
    }

    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Max-Age", "86400");
};

export default async function handler(req, res) {
    console.log("Incoming Request:", req.method, req.headers.origin);

    // Apply CORS headers
    setCorsHeaders(req, res);

    // Handle preflight requests
    if (req.method === "OPTIONS") {
        console.log("Handling preflight (OPTIONS)");
        return res.status(200).end();
    }

    // Handle POST requests
    if (req.method === "POST") {
        const { name, email, message } = req.body;

        // Debugging logs for request body
        console.log("POST Body:", req.body);

        // Validate request body
        if (!name || !email || !message) {
            console.error("Validation Error: Missing required fields");
            return res.status(400).json({ error: "Missing required fields" });
        }

        try {
            const query = `
                INSERT INTO messages (name, email, message)
                VALUES ($1, $2, $3) RETURNING *;
            `;
            const values = [name, email, message];
            const result = await pool.query(query, values);

            console.log("Database Insert Result:", result.rows[0]);
            res.status(200).json({ message: "Message submitted successfully", data: result.rows[0] });
        } catch (error) {
            console.error("Database Error:", error.message);
            res.status(500).json({ error: "Internal Server Error", details: error.message });
        }
    } else {
        console.log("Method Not Allowed");
        res.setHeader("Allow", "POST, OPTIONS");
        res.status(405).json({ error: "Method Not Allowed" });
    }
}
