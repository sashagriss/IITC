 use sasha;

 CREATE TABLE items (
    Code NVARCHAR(20) not NULL PRIMARY KEY,
    ItemDesc VARCHAR (300),
    UnitPrice DECIMAL(10,2),
    Available INT,
    Saved INT,
    Waiting INT,
    Subscript INT,
    Frequency INT,
    SuppDate DATE,
    OrderPercent DECIMAL(10,2)

 );

INSERT INTO items (Code, ItemDesc, UnitPrice, Available, Saved, Waiting, Subscript, Frequency, SuppDate, OrderPercent)
VALUES 
('A1001', 'Item A Description', 49.99, 100, 10, 5, 0, 7, '2024-08-01', 25.50),
('B1002', 'Item B Description', 29.99, 200, 20, 10, 1, 14, '2024-08-02', 15.00),
('C1003', 'Item C Description', 19.99, 150, 15, 7, 0, 30, '2024-08-03', 10.75);

SELECT * from items
SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'items';
