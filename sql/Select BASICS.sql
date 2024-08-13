-- 1.
-- SELECT *
-- from Orders

-- 2.
-- SELECT *
-- from Employees

-- 3.
-- SELECT Region, HireDate, FirstName, Country
-- from Employees

-- 4.
-- SELECT OrderDate, OrderID, CustomerID
-- from Orders

-- 5.
-- SELECT 
-- ProductID as ProID,
-- ProductName as ProNm,
-- UnitPrice as UntPr
-- from Products

-- 6.
-- SELECT 
-- [Address] as [add],
--   Region as reg,
-- City as ct
-- from Employees

-- 7.
-- SELECT PostalCode,
-- [Address] + ' , ' + City as FullAdress
-- from Customers

-- 8.
-- SELECT FirstName + ' '+ LastName as FullName,
-- BirthDate +8 as BirthDate,
-- ReportsTo as #Manager
-- from Employees


-- 9.
-- SELECT DISTINCT City
-- from Employees


-- -- 10.
-- SELECT DISTINCT Country
-- from Employees

-- 11.
-- SELECT DISTINCT Title
-- from Employees

-- -- 12.
-- SELECT City, country
-- from Customers


-- SELECT distinct City, country
-- from Customers

-- 13.
-- SELECT FirstName,
-- BirthDate,
-- BirthDate + 5 as BirthDate
-- from Employees

-- -- 14.
-- SELECT ProductName,
-- UnitPrice,
-- UnitPrice + 10 as newPrice
-- from Products

-- 15.
-- SELECT ProductID,
-- ProductName,
-- UnitPrice,
-- UnitPrice * 1.65 as newPrice,
-- UnitsInStock,
-- UnitsOnOrder,
-- UnitsInStock - UnitsOnOrder as 
-- from Products

-- 16.
-- SELECT ProductID,
-- ProductName,
-- (UnitsInStock - UnitsOnOrder) * UnitPrice as UnitPriceNotOnOrder
-- from Products

-- 17.
-- SELECT *
-- from Orders
-- where ShipCountry = 'usa'

-- 18 
-- SELECT ProductName,
-- UnitPrice + 9 as updatedPrice,
-- CategoryID
-- from Products
-- where ProductName like '%c%'

-- 19.
-- SELECT CategoryName,
-- [Description]
-- from Categories
-- where CategoryID > 3
-- ORDER BY  CategoryID  desc

-- SELECT sum(Freight) as 'SUM',
-- AVG(Freight) as 'AVG',
-- MAX(Freight) as 'MAX',
-- MIN(Freight) as 'MIN',
-- COUNT(*) as 'ALL'
-- from Orders

-- with JOIN

SELECT FirstName, LastName, City, employees.EmployeeID,OrderID,OrderDate
from Employees join Orders
on Employees.EmployeeID = Orders.EmployeeID
where Employees.EmployeeID in (3 , 5 ,6)

