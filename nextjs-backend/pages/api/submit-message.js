import { Pool } from "pg";

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "portfolio_messages",
    password: "new_password", // Replace with your actual password
    port: 5432,
});

export default async function handler(req, res) {
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
            console.error("Database Error:", error.message); // Log error details
            res.status(500).json({ error: "Internal Server Error" });
        }
    } else {
        res.status(405).json({ error: "Method Not Allowed" });
    }
}
