import { Pool } from "pg";
import Cors from "cors";

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "portfolio_messages",
    password: "new_password",
    port: 5432,
});

// Update the CORS configuration
const cors = Cors({
    origin: [
        "https://portfolio-site-c4rd.vercel.app", // Primary frontend URL
        "https://portfolio-site-c4rd-7mpgh1cqs-professor-mads-projects.vercel.app", // New frontend URL
    ],
    methods: ["POST", "GET", "HEAD"],
});

// Middleware runner
function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}

export default async function handler(req, res) {
    try {
        await runMiddleware(req, res, cors);
    } catch (error) {
        console.error("CORS Error:", error.message);
        return res.status(500).json({ error: "Failed to run CORS middleware" });
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
            console.error("Database Error:", error.message); // Log error details
            res.status(500).json({ error: "Internal Server Error" });
        }
    } else {
        res.status(405).json({ error: "Method Not Allowed" });
    }
}
