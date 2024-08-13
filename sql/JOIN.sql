-- with JOIN

-- SELECT FirstName, LastName, City, employees.EmployeeID,OrderID,OrderDate
-- from Employees join Orders
-- on Employees.EmployeeID = Orders.EmployeeID
-- where Employees.EmployeeID in (3 , 5 ,6)


-- 1.
SELECT ProductName,
Categories.CategoryName
from Products join Categories
on Products.CategoryID = Categories.CategoryID

-- 2.
SELECT ProductName,
Suppliers.CompanyName
from Products join Suppliers
on Products.SupplierID = Suppliers.SupplierID

-- 3.
SELECT o.OrderID , c.CompanyName 
from Orders o join Customers c
on o.CustomerID = c.CustomerID
where c.CompanyName like 'a%'

-- 4.
SELECT r.RegionDescription ,
t.TerritoryDescription
from Region r join Territories t
on t 
where 

-- 5. 
SELECT
from 
on 
where 

-- 6.
SELECT
from 
on 
where 

-- 7.
SELECT
from 
on 
where 


SELECT
from 
on 
where 



SELECT
from 
on 
where 


SELECT
from 
on 
where 