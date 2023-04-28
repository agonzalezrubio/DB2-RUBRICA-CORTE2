import { pool } from "../db.js";

export const getRooms = async (req, res) => {
    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.query('SELECT * FROM habitaciones');
        connection.release();
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al consultar las habitaciones.');
    }
}

export const getRoom = async (req, res) => {
    const id = req.params.id;
    try {
      const connection = await pool.getConnection();
      const [rows] = await connection.query('SELECT * FROM habitaciones WHERE id = ?', [id]);
      connection.release();
      if (rows.length === 0) {
        res.status(404).send(`No se encontró la habitación con código ${id}.`);
      } else {
        res.json(rows[0]);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send(`Error al consultar la habitación con código ${id}.`);
    }
  }