CREATE DATABASE moneybox;
USE moneybox;

CREATE TABLE usuarios (
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(45) NOT NULL,
    telefono VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    usuario VARCHAR(45) NOT NULL,
    clave VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE clasificacion (
    id INT NOT NULL AUTO_INCREMENT,
    tipo VARCHAR(45) NOT NULL,
    periodo VARCHAR(45) NOT NULL,
    valor VARCHAR(45) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE ingresos (
    id INT NOT NULL AUTO_INCREMENT,
    ingreso VARCHAR(100) NOT NULL,
    valor DOUBLE NOT NULL,
    usuario INT NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_ingresos_usuarios
        FOREIGN KEY (usuario) REFERENCES usuarios (id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);

CREATE TABLE gastos (
    id INT NOT NULL AUTO_INCREMENT,
    gasto VARCHAR(100) NOT NULL,
    tipo VARCHAR(20) NULL,
    fecha VARCHAR(45) NOT NULL,
    valor DOUBLE NOT NULL,
    usuario INT NOT NULL,
    origen INT NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_gastos_usuarios
        FOREIGN KEY (usuario) REFERENCES usuarios (id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT,
    CONSTRAINT kf_gastos_clasificacion
        FOREIGN KEY (origen) REFERENCES clasificacion (id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);

INSERT INTO usuarios(nombre, telefono, email, usuario, clave) VALUES 
    ('Michael', '123456', 'mikle@email.com', 'miklegonza', 'miklegonza'),
    ('Daniela', '789123', 'dani@email.com', 'Dan123', 'Dan123'),
    ('María', '456789', 'mari@email.com', 'Lolita', 'Lolita'),
    ('Julliete', '987654', 'juli@email.com', 'Contraseña', 'Contraseña'),
    ('José', '321987', 'jose@email.com', 'Josepass', 'Josepass');

INSERT INTO clasificacion(tipo, periodo, valor) VALUES
    ('ocio', 'marzo', '50000'),
    ('fijo', 'marzo', '600000'),
    ('fijo', 'abril', '200000'),
    ('variable', 'mayo', '120000'),
    ('ocio', 'mayo', '12000');

INSERT INTO ingresos(ingreso, valor, usuario) VALUES
    ('Salario', 2000000, 1),
    ('Salario', 1500000, 2),
    ('Salario', 5000000, 3),
    ('Arriendo', 800000, 4),
    ('Trabajo independiente', 20000, 5),
    ('lo que sea', 100, 1),
    ('lo que sea', 200, 1),
    ('lo que sea', 300, 1);

INSERT INTO gastos(gasto, fecha, valor, usuario, origen) VALUES
    ('Arriendo', '01/03/2022', 600000, 1, 1),
    ('Gas', '03/03/2022', 25000, 1, 1),
    ('Internet', '11/03/2022', 150000, 1, 1),
    ('Juguete del chino', '15/04/2022', 23000, 1, 1),
    ('Matrícula del chino', '30/06/2022', 550000, 1, 1);
