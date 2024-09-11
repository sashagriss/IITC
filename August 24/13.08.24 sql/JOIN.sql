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
on R.RegionID = T.RegionID


-- 5. 
SELECT p.ProductName,
p.UnitPrice
from Products P join Categories C
on P.CategoryID = C.CategoryID
where p.UnitPrice >50

-- 6.
SELECT p.ProductID,
p.UnitPrice,
p.SupplierID
from Products P join Categories C
on P.CategoryID = C.CategoryID
where p.SupplierID = 3


-- 7.
SELECT p.ProductID,
p.UnitPrice,
p.SupplierID
from Products P join Categories C
on P.CategoryID = C.CategoryID
where c.CategoryName like '%a%'

-- 8.
SELECT s.CompanyName,
p.ProductName,
p.UnitPrice,
c.CategoryName
from Products P join Categories C
on  P.CategoryID = C.CategoryID
join Suppliers s
on p.SupplierID = s.SupplierID


-- 9. 
SELECT p.ProductName,
c.[Description],
s.City
from Products p JOIN Categories c 
on p.CategoryID = c.CategoryID
JOIN Suppliers s
on p.SupplierID = s.SupplierID
where s.City in ('Tokyo','London')


-- 10. 
SELECT p.ProductID,
c.Description,
s.Country
from Products p JOIN Categories c 
on p.CategoryID = c.CategoryID
JOIN Suppliers s
on p.SupplierID = s.SupplierID
where s.Country like 'a%'

-- 11.
SELECT CompanyName,
OrderID
from Customers left JOIN Orders
on Customers.CustomerID = Orders.CustomerID 



SELECT OrderID,
OrderDate,
ShipAddress,
c.CustomerID,
CompanyName,
Phone
from Orders o join Customers c
on o.CustomerID = c.CustomerID
where Year (o.OrderDate ) = '1996'
and (c.CustomerID like 'a%' or c.CustomerID like 'c%')


-- 13.
SELECT OrderID,
OrderDate,
ShipAddress,
c.CustomerID,
CompanyName,
Phone,
FirstName,
LastName
from Orders o join Customers c
on o.CustomerID = c.CustomerID
join Employees E
on e.EmployeeID = o.EmployeeID
where Year (o.OrderDate ) = '1996'
and (c.CustomerID like 'a%' or c.CustomerID like 'c%')
order by OrderDate DESC