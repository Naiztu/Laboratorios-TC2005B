const bcrypt = require("bcryptjs");
import { pool } from "../../config/db";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { username, password, id_rol } = req.body;

        const salt = await bcrypt.genSalt(parseInt(process.env.SALT));
        const newPassword = await bcrypt.hash(password, salt);

        const [rows, fields] = await pool.query(` INSERT INTO login (username, password, id_rol) VALUES ('${username + "' , '" + newPassword + "' , " + id_rol})`);

        res.status(200).json({ message: " post correct" })
    } else if (req.method === "GET") {
        const [rows, fields] = await pool.query(` SELECT username, id_rol FROM login;`);
        res.status(200).json({ data: rows })
    } else {
        res.status(404).json({ Hi: "What are you looking for here?" });
    }
}
