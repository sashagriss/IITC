
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

select *
from items 

-- /////////////////////////////////////////////////////////////////////////////////

CREATE TABLE ExOrders (
   OrderNo int not null PRIMARY KEY,
    OrderDate DATE,
    CustID NVARCHAR (255),
    Code NVARCHAR(20),
    FOREIGN key (Code) REFERENCES items(Code), 
    Quantity INT,
    DeliveryID NVARCHAR(100),
    FOREIGN KEY (DeliveryID) REFERENCES DeliveryFees(DeliveryID),
    Address VARCHAR(255),
    Status NVARCHAR(50),
    SuppDate DATE
);



ALTER TABLE ExOrders
ADD CONSTRAINT FK_ExOrders_Customers
FOREIGN KEY (CustID) REFERENCES Customers(CustID);


INSERT INTO ExOrders (OrderNo, OrderDate, CustID, Code, Quantity, DeliveryID, Address, Status, SuppDate)
VALUES
    (1001, '2024-08-17', 'CUST001', 'A1001', 10, 'Standard', '123 Example St', 'Pending', '2024-08-20'),
    (1002, '2024-08-18', 'CUST002', 'B1002', 5, 'Express', '456 Another St', 'Shipped', '2024-08-21'),
    (1003, '2024-08-19', 'CUST003', 'C1003', 20, 'Same Day', '789 Third St', 'Delivered', '2024-08-22');



select * from ExOrders

-- /////////////////////////////////////////////////////////////////////////////////

CREATE TABLE Subscription (
    OrderNo INT ,
    Status NVARCHAR(50),
    CustID NVARCHAR(255),
    Code NVARCHAR(20),
    FOREIGN key (Code) REFERENCES items(Code), 
    Quantity INT,
    Frequency INT,
    DeliveryID NVARCHAR(100),
    FOREIGN KEY (DeliveryID) REFERENCES DeliveryFees(DeliveryID),
    NextOrder DATE,
    Expiration DATE
);
ALTER TABLE Subscription
ADD CONSTRAINT FK_Subscription_Customers
FOREIGN KEY (CustID) REFERENCES Customers(CustID);


INSERT INTO Subscription (OrderNo, Status, CustID, Code, Quantity, Frequency, DeliveryId, NextOrder, Expiration)
VALUES
    (1, 'Active', 'CUST001', 'A1001', 10, 30, 'Standard', '2024-09-01', '2025-09-01'),
    (2, 'Pending', 'CUST002', 'B1002', 5, 14, 'Express', '2024-09-15', '2025-09-15'),
    (3, 'Cancelled', 'CUST003', 'C1003', 20, 7, 'Same Day', '2024-10-01', '2025-10-01');

UPDATE Subscription 
set OrderNo = 1001
where Quantity = 10
UPDATE Subscription
set OrderNo = 1002
where Quantity= 5
UPDATE Subscription
set OrderNo = 1003
where Quantity = 20

ALTER TABLE Subscription
ADD CONSTRAINT FK_Subscription_ExOrders
FOREIGN KEY (OrderNo) REFERENCES ExOrders(OrderNo);


SELECT * from Subscription
-- /////////////////////////////////////////////////////////////////////////////////

CREATE TABLE Invoices (
    Date DATE,
    OrderNo INT,
    FOREIGN KEY (OrderNo) REFERENCES ExOrders(OrderNo),
    UnitDesc NVARCHAR(255),
    NoUnits INT,
    UnitPrice DECIMAL(10, 2),
    InvNo INT NOT NULL PRIMARY KEY,
    TotAmount DECIMAL(10, 2)
);

INSERT INTO Invoices (Date, OrderNo, UnitDesc, NoUnits, UnitPrice, InvNo, TotAmount)
VALUES
    ('2024-08-01', 1001, 'Item A Description', 10, 49.99, 1, 499.90),
    ('2024-08-02', 1002, 'Item B Description', 5, 29.99, 2, 149.95),
    ('2024-08-03', 1003, 'Item C Description', 20, 19.99, 3, 399.80);

select * from Invoices
-- /////////////////////////////////////////////////////////////////////////////////

CREATE TABLE Customers (
    CustID NVARCHAR(255) NOT NULL PRIMARY KEY,
    CustType NVARCHAR(50),
    CustStatus NVARCHAR(50),
    FreezCode NVARCHAR(50),
    OverCount INT,
    CustName NVARCHAR(255),
    DelivAddrss NVARCHAR(255),
    MailAddrss NVARCHAR(255),
    CreditCard NVARCHAR(50)
);



INSERT INTO Customers (CustID, CustType, CustStatus, FreezCode, OverCount, CustName, DelivAddrss, MailAddrss, CreditCard)
VALUES
    ('CUST001', 'Regular', 'Active', 'FREEZ01', 5, 'John Doe', '123 Example St', 'john.doe@example.com', '1234-5678-9012-3456'),
    ('CUST002', 'Premium', 'Inactive', 'FREEZ02', 2, 'Jane Smith', '456 Another St', 'jane.smith@example.com', '2345-6789-0123-4567'),
    ('CUST003', 'Regular', 'Active', 'FREEZ03', 0, 'Alice Johnson', '789 Third St', 'alice.johnson@example.com', '3456-7890-1234-5678');

select * from Customers
-- /////////////////////////////////////////////////////////////////////////////////

CREATE TABLE Receipt (
    ReceiptID INT NOT NULL PRIMARY KEY,
    PymtDate DATE,
    OrderNo INT,
    InvNo int ,
    PaidAmt DECIMAL(10, 2)
);

ALTER TABLE Receipt
ADD CONSTRAINT FK_Receipt_Invoices
FOREIGN KEY (InvNo) REFERENCES Invoices(InvNo);

INSERT INTO Receipt (ReceiptID, PymtDate, OrderNo, InvNo, PaidAmt)
VALUES
    (1, '2024-08-05', 1001, 1, 499.90),
    (2, '2024-08-06', 1002, 2, 149.95),
    (3, '2024-08-07', 1003, 3, 399.80);



select * from Receipt
-- /////////////////////////////////////////////////////////////////////////////////

CREATE TABLE Accounting (
    InvNo INT ,
    OrderNo INT,
    ReceiptID INT,
    FOREIGN KEY (ReceiptID) REFERENCES Receipt(ReceiptID),
    Date DATE,
    Amount DECIMAL(10, 2),
    -- CrdtDebt DECIMAL(10, 2)
);
-- alter table Accounting
-- ALTER column crdtdebt BIT

select *
from Accounting

-- UPDATE Accounting
-- set CrdtDebt = 1
-- where ReceiptID =1

-- UPDATE Accounting
-- set CrdtDebt = 0
-- where ReceiptID =2

-- UPDATE Accounting
-- set CrdtDebt = 1
-- where ReceiptID =3


ALTER TABLE Accounting
ADD CONSTRAINT FK_Accounting_Invoices
FOREIGN KEY (InvNo) REFERENCES Invoices(InvNo);

INSERT INTO Accounting (InvNo, OrderNo, ReceiptID, Date, Amount, CrdtDebt)
VALUES
    (1, 1001, 1, '2024-08-05', 499.90, 0.00),
    (2, 1002, 2, '2024-08-06', 149.95, 0.00),
    (3, 1003, 3, '2024-08-07', 399.80, 0.00);



UPDATE Accounting
set Amount = 200
where ReceiptID =2

select * from Accounting
-- /////////////////////////////////////////////////////////////////////////////////

CREATE TABLE StockOrder (
    OrderNo INT ,
    StockDate DATE,
    Code NVARCHAR(20),
    Description NVARCHAR(255),
    Quantity INT
 FOREIGN key (Code) REFERENCES items(Code)
);


ALTER TABLE StockOrder
ADD CONSTRAINT FK_StockOrder_ExOrders
FOREIGN KEY (OrderNo) REFERENCES ExOrders(OrderNo);


INSERT INTO StockOrder (OrderNo, StockDate, Code, Description, Quantity)
VALUES
    (2001, '2024-08-10', 'A1001', 'Stock Order for Item A', 50),
    (2002, '2024-08-11', 'B1002', 'Stock Order for Item B', 30),
    (2003, '2024-08-12', 'C1003', 'Stock Order for Item C', 20);

SELECT * from StockOrder
-- /////////////////////////////////////////////////////////////////////////////////

CREATE TABLE DeliveryFees (
    DeliveryID NVARCHAR(100) NOT NULL PRIMARY KEY,
    DelFee DECIMAL(10, 2),
    Description NVARCHAR(255)
);
 INSERT INTO DeliveryFees (DeliveryID, DelFee, Description)
VALUES 
    ('Standard', 10.00, 'Standard delivery fee'),
    ('Express', 20.00, 'Express delivery fee'),
    ('Same Day', 30.00, 'Same day delivery fee');

 SELECT * from DeliveryFees

-- /////////////////////////////////////////////////////////////////////////////////

CREATE TABLE Discounts (
    CustType NVARCHAR(50) NOT NULL PRIMARY KEY,
    Discnt DECIMAL(5, 2)
);

INSERT INTO Discounts (CustType, Discnt)
VALUES 
    ('Regular', 5.00),  -- 5% discount for regular customers
    ('Premium', 10.00); -- 10% discount for premium customers


SELECT * from Discounts
-- /////////////////////////////////////////////////////////////////////////////////

CREATE TABLE Numbers (
    LastOrder INT,
    LastSubsc INT,
    LastStock INT,
    LastReciept INT,
    LastInvoice INT
);

INSERT INTO Numbers (LastOrder, LastSubsc, LastStock, LastReciept, LastInvoice)
VALUES 
    (1000, 200, 300, 400, 500);  -- Example values

SELECT * from Numbers
-- /////////////////////////////////////////////////////////////////////////////////
CREATE TABLE Profiles (
    Profile NVARCHAR(50) NOT NULL PRIMARY KEY,
    ProfileAct NVARCHAR(255)
);

INSERT INTO Profiles (Profile, ProfileAct)
VALUES 
    ('Administrator', 'Full access to all features'),
    ('User', 'Access to standard user features');

SELECT * from Profiles
-- /////////////////////////////////////////////////////////////////////////////////
CREATE TABLE Users (
    UserName NVARCHAR(255) NOT NULL PRIMARY KEY,
    Profile NVARCHAR(50)
);

ALTER TABLE Users
ADD CONSTRAINT FK_Users_Profiles
FOREIGN KEY (Profile) REFERENCES Profiles(Profile);

INSERT INTO Users (UserName, Profile)
VALUES 
    ('admin', 'Administrator'),
    ('john_doe', 'User'),
    ('jane_smith', 'User');

SELECT * from Users