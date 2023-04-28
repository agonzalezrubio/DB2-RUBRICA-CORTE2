import { pool } from "../db.js";

export const createBooking = async (req, res) => {
    const { id_habitacion, nombre_cliente, telefono_cliente, fecha_reservacion, fecha_entrada, fecha_salida } = req.body;
    try {
      const connection = await pool.getConnection();
      const [rows] = await connection.query('INSERT INTO reservas (id_habitacion, nombre_cliente, telefono_cliente, fecha_reservacion, fecha_entrada, fecha_salida) VALUES (?, ?, ?, STR_TO_DATE(?,"%m-%d-%Y"), STR_TO_DATE(?,"%m-%d-%Y"), STR_TO_DATE(?,"%m-%d-%Y"))', [id_habitacion, nombre_cliente, telefono_cliente, fecha_reservacion, fecha_entrada, fecha_salida]);
      connection.release();
      res.json({ id: rows.insertId, id_habitacion, nombre_cliente, telefono_cliente, fecha_reservacion, fecha_entrada, fecha_salida });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al crear la reserva.');
    }
}

export const updateBooking = async (req, res) => {
    const id = req.params.id;
    const { id_habitacion, nombre_cliente, telefono_cliente, fecha_reservacion, fecha_entrada, fecha_salida } = req.body;
    try {
      const connection = await pool.getConnection();
      const [rows] = await connection.query('UPDATE reservas SET id_habitacion = ?, nombre_cliente = ?, telefono_cliente = ?, fecha_reservacion = STR_TO_DATE(?,"%m-%d-%Y"), fecha_entrada = STR_TO_DATE(?,"%m-%d-%Y"), fecha_salida = STR_TO_DATE(?,"%m-%d-%Y") WHERE id = ?', [id_habitacion, nombre_cliente, telefono_cliente, fecha_reservacion, fecha_entrada, fecha_salida, id]);
      connection.release();
      if (rows.affectedRows === 0) {
        res.status(404).send(`No se encontró la reserva con código ${id}.`);
      } else {
        res.json({ id, id_habitacion, nombre_cliente, telefono_cliente, fecha_reservacion, fecha_entrada, fecha_salida });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send(`Error al actualizar la reserva con código ${id}.`);
    }
}

export const deleteBooking = async (req, res) => {
    const id = req.params.id;
    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.query('DELETE FROM reservas WHERE id = ?', [id]);
        connection.release();
        if (rows.affectedRows === 0) {
        res.status(404).send(`No se encontró la reserva con código ${id}.`);
        } else {
        res.sendStatus(204);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send(`Error al eliminar la reserva con código ${id}.`);
    }
}