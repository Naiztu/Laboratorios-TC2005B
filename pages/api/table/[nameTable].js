import { pool } from "../../../config/db";

export default async function handler(req, res) {
  const { nameTable } = req.query;
  if (req.method === "GET") {
    try {
      const [rows, fields] = await pool.execute(`SELECT * FROM ${nameTable}`);
      let campos = [];
      fields.map((i) => (campos = campos.concat(i.name)));
      res.status(200).json({ rows, fields: campos });
    } catch (error) {
      res.status(500).json({ error });
    }
  } else req.status(404).json({ error: "Undefined route" });
}
