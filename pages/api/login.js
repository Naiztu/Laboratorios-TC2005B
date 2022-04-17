const bcrypt = require("bcryptjs");
import { pool } from "../../config/db";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { username, password } = req.body;

        let user = null;
        try {
            const [rows, fields] = await pool.query(` SELECT * FROM login WHERE username = '${username}'`);
            user = rows[0];
        } catch (error) {
            res.status(401).json({ message: "Usuario y/o contraseña incorrectas" });
        }
        const passwordCorrect =
            user === null || user === undefined ? false : await bcrypt.compare(password, user.password);


        if (!(user && passwordCorrect)) {
            res.status(401).json({
                message: "invalid user or password"
            });
        } else {

            res.status(200).json({
                username: user.username,
                id_rol: user.id_rol,
                auth: true
            })
        }

    } else {
        res.status(404).json({ Hi: "What are you looking for here?" });
    }
}