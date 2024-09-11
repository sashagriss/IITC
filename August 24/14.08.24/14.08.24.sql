-- subsquries
-- 1. 
select ProductName,UnitPrice
from Products
where ProductID <(select UnitPrice
from Products
where ProductID = 8
)

-- 2.
SELECT ProductName, UnitPrice
from Products
where UnitPrice > 
(select UnitPrice
from Products
where ProductName = 'Tofu' )

-- 3.
SELECT FirstName + ' ' + LastName  'Fullname' ,HireDate
from Employees
where HireDate > (
    select HireDate
    from Employees
    where EmployeeID = 6
)

-- 4.
SELECT ProductID, ProductName, UnitPrice
from Products
where UnitPrice >(
    select AVG(unitprice)
    From Products
     )
     
    --  5.
    SELECT ProductName, UnitsInStock
    from Products
    where UnitsInStock < (
        select MIN(UnitsInStock)
        from Products
        where CategoryID = 5
    )

    -- 6. 
    SELECT *
    from Products
    where CategoryID = (
        select CategoryID
        from Products
        where ProductName = 'Chai'
    )
-- 7. 
SELECT ProductName, UnitPrice, CategoryID
    from Products
    where UnitPrice in (
        select UnitPrice
        from Products
        where CategoryID = 5)


  -- 8.
SELECT ProductName, UnitPrice 
    from Products
    where UnitPrice > ANY (
        select UnitPrice
        from Products
        where CategoryID = 5)

-- 9.
SELECT ProductName, UnitPrice, CategoryID
    from Products
    where UnitPrice > all (
        select UnitPrice
        from Products
        where CategoryID = 5)


 -- 10.
SELECT OrderID,OrderDate
    from Orders
    where year(orderDate) = 1997
    and CustomerID in (
        select CustomerID
        from Customers
        where Country in ('Sweden', 'France', 'Germany') 
         )

-- 11.
SELECT ProductName, ProductID
    from Products
    where UnitPrice >(
        select avg (UnitPrice)
        from Products
        where UnitsInStock > 50)

-- 12.
SELECT ProductName 
    from Products
    where CategoryID in (
        select CategoryID
        from Categories
        where CategoryName in ('Condiment' ,'Beverages' )
        and SupplierID in 
        (select SupplierID
        from Suppliers
        where Region is null
        ))

 -- 13.
 select CompanyName
 from Suppliers
 where SupplierID in  (
    select SupplierID
    from Products
    where CategoryID IN (
        select CategoryID
        from Categories
        where CategoryName = 'Beverages'
    )
 )

        