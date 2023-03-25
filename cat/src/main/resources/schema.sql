CREATE TABLE IF NOT EXISTS `cat` (
    `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` varchar(20),
    `color` varchar(50),
    `age` int
);
CREATE TABLE IF NOT EXISTS `dog` (
    `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` varchar(20),
    `breed` varchar(20),
    `color` varchar(50),
    `age` int
);