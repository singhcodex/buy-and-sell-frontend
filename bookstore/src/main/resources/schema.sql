CREATE TABLE IF NOT EXISTS `book` (
    `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    `name` varchar(20),
    `author` varchar(50),
    `created` timestamp
);