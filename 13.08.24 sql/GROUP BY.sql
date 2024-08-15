-- GROUP BY


--BY Israel-
-- 1.

select AVG(Freight) AVG, MAX(Freight) MAX
from Orders
GROUP by ShipCountry


-- 2.
select  MAX(UnitPrice) MAX
from Products
GROUP by SupplierID
HAVING max (UnitPrice) >50


-- 1.
select  min (LastName) MIN
from Employees

-- 2. 
select  MAX(LastName) MAX
from Employees

-- 3. 
select  count(*) 
from Employees

-- 4. 
select  count(Region ) 
from Employees
where Region is not NULL


-- 5.
SELECT avg(UnitPrice)
From Products

-- 6.
SELECT max(UnitPrice) MaxPrice , avg(UnitPrice) AvgPrice
From Products

-- 7.
SELECT min (BirthDate), MAX (BirthDate)
from Employees

-- 8.
SELECT count(CustomerID) 'num of  cust'
from Customers

-- 9.
SELECT count(distinct CustomerID) 'num of  cust'
from Orders

-- 10.
SELECT  CategoryID, min (UnitPrice) min, avg(UnitPrice) avg, max(UnitPrice) max
from Products
GROUP by CategoryID

-- 11.
SELECT  max(UnitPrice) max,
SupplierID
from Products
GROUP by SupplierID
ORDER by SupplierID DESC

-- 12.
SELECT  avg(UnitsInStock) AVG,
SupplierID
from Products
GROUP by SupplierID
ORDER by avg(UnitsInStock) DESC

-- 13.
SELECT count(CustomerID),Country,City
from Customers
GROUP by Country, City

-- 14. 
SELECT  avg(UnitPrice) AVG,
CategoryID
from Products
where UnitPrice > 40
GROUP by CategoryID

SELECT count(FirstName)
from Employees

-- 15.
SELECT count(CustomerID),City
from Customers
WHERE City = 'london'
GROUP by City

-- 16.
SELECT  avg(UnitPrice) AVG, min(UnitPrice) min,max(UnitPrice) MAX,COUNT(UnitsInStock) 'all',
CategoryID, SupplierID
from Products 
GROUP by CategoryID,SupplierID

-- 17.
SELECT max(UnitPrice) MAX,
CategoryID 
from Products 
GROUP by CategoryID
HAVING max(UnitPrice) >50


SELECT avg(UnitPrice) AVG,
SupplierID
from Products 
GROUP by SupplierID
HAVING avg (UnitPrice) >40

-- 19.
SELECT SUM(UnitsOnOrder),
SUM(UnitsInStock),  
CategoryName
from Products join Categories
on Products.CategoryID = Categories.CategoryID
WHERE CategoryName like '%a%'
GROUP by CategoryName
having SUM(UnitsOnOrder) > 100 
order by CategoryName asc

-- 20.
SELECT Region, City, count(*)
from Customers
where (city like '%L%' or city like '%M%' )
and Region is not null
GROUP by Region, City
HAVING count(*)>= 2

-- 21.
SELECT LastName, count(OrderID),max (OrderDate)
from Employees JOIN Orders
on Employees.EmployeeID = Orders.EmployeeID
GROUP by OrderID
HAVING count(OrderID )>100