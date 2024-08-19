CREATE PROCEDURE getAllItems
as 
SELECT *
from Items

SELECT *
from Invoices
GO

-- /////////////////////////////////

CREATE PROCEDURE checkOrder
as 
SELECT OrderDate, 
Quantity,
Code,
TotAmount,
Status
from ExOrders o join Invoices i 
on o.OrderNo = i.OrderNo

-- where o.OrderNo = 1001
order by OrderDate
GO

-- /////////////////////////////////

CREATE PROCEDURE checkSubClients
as 
SELECT Customers.CustID,
CustName,
CustStatus,
ExOrders.OrderNo,
ExOrders.Status,
ExOrders.Quantity
from Customers join ExOrders
on Customers.CustID = ExOrders.CustID
join items
on items.Code = ExOrders.Code
join Subscription
on Subscription.OrderNo = ExOrders.OrderNo
GO

-- /////////////////////////////////

CREATE PROCEDURE checkCrdtDebt
as 
select r.PaidAmt,
 r.OrderNo,
 r.ReceiptID,
 Date,
 case when PaidAmt< a.amount then 'credid' else 'debit'  end as 'creditdebit',
 sum(a.Amount-r.PaidAmt) as amount
from Accounting a join Receipt r
on a.ReceiptID = r.ReceiptID
where date = '2024-08-06'
group by r.PaidAmt,r.OrderNo,r.ReceiptID,a.Date,a.CrdtDebt, amount
GO
-- //////////////////////////////////////////////////

CREATE PROCEDURE getPendingOrders
as 
select OrderDate,
SuppDate,
Status,
TotAmount
from ExOrders e join Invoices i 
on e.OrderNo = i.OrderNo
where Status in ('pending')
ORDER by SuppDate
GO