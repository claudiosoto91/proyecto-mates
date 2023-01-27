
import mysql from 'mysql2';
import { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } from './config.js';

// create the connection to database
export const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE
});

/**
 * 
 * 
CREATE TABLE `db-mates`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `price` VARCHAR(45) NOT NULL,
  `info` VARCHAR(255) NOT NULL,
  `img` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));

INSERT INTO `db-mates`.`products` (`id`, `name`, `price`, `info`, `img`) VALUES ('1', 'set mate boca', '2500', 'Juego de mates de 3 piezas de tu equipo favorito. Ideal para regalo.', 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/231/406/products/set-mate-boca-deluxe1-1433626f968f27846315937962143099-480-0.jpg');
INSERT INTO `db-mates`.`products` (`id`, `name`, `price`, `info`, `img`) VALUES ('2', 'set completo', '8900', 'Set completo con bolso para llevar todo tu equipo de mate junto sin problemas. Incluye mate con boca ancha ideal para viajes, termo de un litro y todo forrado de cuero.', 'https://www.mundosetmatero.com/wp-content/uploads/2020/08/Set-matero-rigido-con-mate-camionero.jpg');
INSERT INTO `db-mates`.`products` (`id`, `name`, `price`, `info`, `img`) VALUES ('3', 'set mate pastel', '2000', 'Set de mate 3 piezas, podes elegir tu color favorito.', 'https://d28hi93gr697ol.cloudfront.net/26de409c-8fb6-9351/img/Producto/914/Set-Matero-Pastel-amarillo-630e7e4633528.jpg');
INSERT INTO `db-mates`.`products` (`id`, `name`, `price`, `info`, `img`) VALUES ('4', 'vaso térmico plastico', '900', 'Vaso térmico de plástico autocebante, con una capacidad de medio litro. Diferentes colores', 'https://regionalesrenacer.com/wp-content/uploads/2020/07/vasos-termicos-plasticos.png');
INSERT INTO `db-mates`.`products` (`id`, `name`, `price`, `info`, `img`) VALUES ('5', 'mate y bombilla de alpaca', '1500', 'Mate y bombilla de alpaca, con diferentes motivos', 'https://sanbenitosanteria.com/wp-content/uploads/2020/06/3RD3.png');
INSERT INTO `db-mates`.`products` (`id`, `name`, `price`, `info`, `img`) VALUES ('6', 'mate + bombilla', '3000', 'Mate de acero inoxidable, además de bombilla  a elección.', 'https://www.farmaciassanchezantoniolli.com.ar/6452-large_default/keep-3015-mate-set-.jpg');
INSERT INTO `db-mates`.`products` (`id`, `name`, `price`, `info`, `img`) VALUES ('7', 'mate mágico', '2300', 'Mate mágico con bombilla, diferentes colores.', 'https://d2r9epyceweg5n.cloudfront.net/stores/001/386/816/products/mate-magico-21-2eacc241dd877cf2fe16127891410920-1024-1024.png');
INSERT INTO `db-mates`.`products` (`id`, `name`, `price`, `info`, `img`) VALUES ('8', 'mate camionero', '3200', 'Mate camionero, calidad premium. Incluye bombilla', 'https://apolomates.com.ar/wp-content/uploads/2021/12/Imperial-personalizado-y-bombilla.png');
INSERT INTO `db-mates`.`products` (`id`, `name`, `price`, `info`, `img`) VALUES ('9', 'mate madera', '1900', 'Mate de madera. Incluye bombilla', 'https://grinssurf.com/wp-content/uploads/2020/09/Mate-3.png');
INSERT INTO `db-mates`.`products` (`id`, `name`, `price`, `info`, `img`) VALUES ('10', 'bombilla', '200', 'Bombilla por unidad o por mayor. Consultar precios por mayor', 'https://casaguma.com.ar/wp-content/uploads/2021/06/Bombillas.png');
 * 
 * 
 * 
 * 
 */