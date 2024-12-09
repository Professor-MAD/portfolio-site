import { Pool } from "pg";

// PostgreSQL connection pool setup
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "portfolio_messages",
    password: "new_password",
    port: 5432,
});

// Helper function to set CORS headers
const setCorsHeaders = (res) => {
    res.setHeader("Access-Control-Allow-Origin", "https://portfolio-site-c4rd.vercel.app"); // Update this to match your frontend URL
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
    res.setHeader("Access-Control-Max-Age", "86400"); // Cache preflight response for 24 hours
};

export default async function handler(req, res) {
    // Add CORS headers to all responses
    setCorsHeaders(res);

    if (req.method === "OPTIONS") {
        // Handle preflight requests
        res.status(200).end();
        return;
    }

    if (req.method === "POST") {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        try {
            const query = `
                INSERT INTO messages (name, email, message)
                VALUES ($1, $2, $3) RETURNING *;
            `;
            const values = [name, email, message];
            const result = await pool.query(query, values);

            res.status(200).json({ message: "Message submitted successfully", data: result.rows[0] });
        } catch (error) {
            console.error("Database Error:", error.message);
            res.status(500).json({ error: "Internal Server Error" });
        }
    } else {
        res.status(405).json({ error: "Method Not Allowed" });
    }
}
