CREATE DATABASE IF NOT EXISTS unicostadb;

use unicostadb;
CREATE TABLE habitaciones(
    id INT NOT NULL AUTO_INCREMENT,
    numero VARCHAR(10) NOT NULL,
    tipo VARCHAR(30) DEFAULT NULL,
    valor DECIMAL(10,2),
    PRIMARY KEY (id),
    UNIQUE(numero));

CREATE TABLE reservas(
    id INT NOT NULL AUTO_INCREMENT,
    id_habitacion int,
    nombre_cliente VARCHAR(100) NOT NULL,
    telefono_cliente VARCHAR(20) NOT NULL,
    fecha_reservacion DATE NOT NULL,
    fecha_entrada DATE NOT NULL,
    fecha_salida DATE NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_habitacion) REFERENCES habitaciones(id)
);

