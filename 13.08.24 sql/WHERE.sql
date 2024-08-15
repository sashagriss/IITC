-- WHERE 

SELECT FirstName,
LastName
FROM Employees
WHERE EmployeeID = 3


SELECT ProductName,
UnitPrice
from Products
where ProductID = 4

SELECT ProductID,
ProductName,
UnitPrice
from Products
where UnitPrice > 20
order by UnitPrice asc


SELECT FirstName + ' '+ LastName 'FullName',
BirthDate,
ReportsTo
from Employees
where EmployeeID = 8

-- 5.
SELECT EmployeeID,
FirstName + ' '+ LastName 'FullName',
BirthDate
from Employees 
where City = 'London'

-- 6.
SELECT *
from Products
 WHERE UnitPrice not BETWEEN 50 and 100

--  7.
SELECT ProductName,
UnitPrice
from Products
 WHERE UnitPrice BETWEEN 21.39 and 43.9
 order by UnitPrice DESC 

--  8.
SELECT EmployeeID,
LastName,
HireDate
from Employees
where City ='london' or city =  'tacoma'

-- 9.
SELECT EmployeeID,
FirstName + ' '+ LastName 'FullName'
from Employees
where EmployeeID in (5,2,1)


-- 10.
SELECT FirstName,
LastName,
BirthDate
from Employees
where EmployeeID in (7,5,4)

-- 11.
SELECT ProductName,
ProductID, CategoryID,
UnitPrice
from Products
 where CategoryID not in (1 , 2 , 7)

-- 12.
SELECT FirstName,
Region
from Employees
where Region is null

-- 13.
SELECT top 3 ProductName,
UnitPrice
from Products
order by UnitPrice desc

-- 14.
SELECT OrderID,
OrderDate,
REQUIREDdate 
 from  Orders
where RequiredDate > '1996-10-31'

SELECT EmployeeID,
LastName,
ReportsTo
from Employees
where ReportsTo is not null



SELECT *
 from Categories
 WHERE CategoryName like '%o%'


SELECT CompanyName,
Country
 from Customers
 where CompanyName like '%a'


SELECT ProductName,
CategoryID
 from Products
 WHERE ProductName like '%a_'




SELECT OrderID,
customerid,
EmployeeID
 from Orders
 where OrderDate BETWEEN 1997-04-01 and 1997-05-31
 order by OrderDate ASC ,customerid desc

--  20.
 SELECT CustomerID,
 CompanyName,
 Country,
 Phone,
 Region
 From Customers
 where Country like '[F,M,G]%' and region is NULL




 SELECT EmployeeID,
 FirstName + ' '+ LastName 'FullName'
 From Employees
 where LastName like '%[dk]%' or Year (BirthDate) = '1963'




SELECT ProductName,
UnitPrice,
SupplierID
from Products
WHERE UnitPrice > 30 and SupplierID in (1,3)


-- 23.
SELECT OrderID,
EmployeeID,
OrderDate,
RequiredDate,
ShipName
from orders 
where EmployeeID = 7 
and ShipName in ('QUICK-Stop', 'Du mond entire', 'Eastern Connection')
 and RequiredDate - OrderDate > 20
--  OrderDate +20 < REQUIREDdate


-- 24.
SELECT ProductID,
ProductName
from Products
where (SupplierID in (8,16,21)
or UnitPrice < 10)
and UnitsInStock not BETWEEN 10 and 100
order by UnitPrice ASC