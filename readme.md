# MySQL

# Select statement

- Fetch data from specific table
- Use `*` to spicfy all columns
```sql

SELECT field1, field2,...fieldN 
FROM table_name1, table_name2...

```

### Examples 

```sql

SELECT 
    customers.company, customers.first_name, customers.last_name
FROM
    northwind.customers



```


#### ex 1
- write a query that fetched all the first name  and job title.


### Concat
```sql
SELECT 
    customers.company as companyName , CONCAT(customers.first_name,"__",customers.last_name) as fullName
FROM
    northwind.customers
```

#### ex 2
- write a query that concat 2 columns:
company & job title under alias job_company
- write a query that concat 2 columns:
city & state under alias address
 
```sql

 SELECT CONCAT(customers.city, " " ,customers.state_province)  FROM northwind.customers;

```

# Count
- return the number of records


```sql

SELECT COUNT(*) as numberOfCustomers FROM northwind.customers;

```

### Distinct 

- return distinct values

```sql
SELECT COUNT(DISTINCT customers.city) as NumberOfCitiesCustomers  FROM northwind.customers;
```

```sql
SELECT *  FROM northwind.customers WHERE first_name = 'raafat' OR first_name = 'sapir'
```



## Where

```sql
SELECT 
    *
FROM
    northwind.orders;

SELECT 
    CONCAT(customers.city,
            ' ',
            customers.state_province)
FROM
    northwind.customers;

SELECT 
    COUNT(DISTINCT customers.city) AS NumberOfCitiesCustomers
FROM
    northwind.customers;

SELECT *  FROM northwind.customers WHERE first_name = 'raafat' OR first_name = 'sapir'

SELECT *  FROM northwind.customers WHERE first_name = 'sapir'


======================================================================  
SELECT 
    orders.ship_name, orders.shipping_fee AS price
FROM
    northwind.orders
WHERE
    orders.shipping_fee >= 50
======================================================================  

SELECT 
    orders.ship_name, orders.shipping_fee AS price
FROM
    northwind.orders
WHERE
    orders.shipping_fee < 40
======================================================================  

SELECT 
    orders.ship_name, orders.shipping_fee AS price
FROM
    northwind.orders
WHERE
    orders.shipping_fee BETWEEN 100 AND 300
======================================================================
SELECT 
    orders.ship_name, orders.shipping_fee AS price, orders.ship_city
FROM
    northwind.orders
WHERE
    orders.ship_city <> 'Portland'
    
======================================================================
SELECT 
    *
FROM
    northwind.orders
WHERE
    orders.ship_city IN ('New York','Las Vegas' )
======================================================================
SELECT 
    *
FROM
    northwind.orders
WHERE
    orders.ship_city NOT  IN ('New York','Las Vegas' )
    
    
=======================================================================
SELECT 
    *
FROM
    northwind.orders
WHERE
    orders.ship_city Like '%l%'


=======================================================================
SELECT 
    *
FROM
    northwind.orders
WHERE
    orders.ship_name Like '%na%'
    

```

## Homework

- fetch the number of food categories from products
- fetch all the products that cost more than 10$ and in the following categories:
Oil
Sauces

- fetch the number of companies according the suppliers table
- fetch the number of suppliers
- fetch the number of customers
- fetch the number of orders which under state IL


### Order By

```sql
SELECT column1, column2, ...
FROM table_name
ORDER BY column1, column2, ... ASC|DESC;
```

### Examples

```sql
SELECT * FROM northwind.orders order by order_date DESC


SELECT * FROM northwind.orders
WHERE order_date > '2006-06-01 00:00:00'
order by order_date desc ,shipped_date asc

```

 ### ex

 - write a query that return all the last orders that pay by credit card order by shipped date.


# Insert statement




```sql

INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...),
       (value1, value2, value3, ...),
       (value1, value2, value3, ...);

```

# Null values
- we cant compare any data cell to Null
- we will use `is null` Or `is not null`

```sql
SELECT 
    *
FROM
    northwind.customers where country_region is not null
```


# Update

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;


```

## ex1
- Update the orders table, set the taxes of the orders to be 5$ only for orders which paid with credit_card

- Insert your user to the Employees under Diff region

# Delete

```sql
DELETE FROM table_name WHERE condition;
```

# Select - continue

## limit

```sql
SELECT * FROM northwind.orders where order_date > "2006-01-22 00:00:00" limit 10
```

## Functions
- Max
- Min
- Count
- Avg
- Sum

# Group By

```sql
SELECT column_name(s)
FROM table_name
WHERE condition
GROUP BY column_name(s)
ORDER BY column_name(s);
```


```sql

SELECT 
    ship_city, COUNT(*) AS numberOfOrders
FROM
    northwind.orders
GROUP BY northwind.orders.ship_city


SELECT 
    ship_city, SUM(shipping_fee) AS totalShippingFee, COUNT(*) AS totalOrdersPerCity 
FROM
    northwind.orders
GROUP BY northwind.orders.ship_city 


SELECT 
    ship_city, SUM(shipping_fee) AS totalShippingFee
FROM
    northwind.orders
GROUP BY northwind.orders.ship_city 
ORDER BY totalShippingFee desc
LIMIT 5



```


# ex 2
- which city we have the highest amount of customers

## Having
- when we need where on Group by

```sql
SELECT 
    city, COUNT(*) AS numberOfCustomers
FROM
    northwind.customers
GROUP BY city
HAVING numberOfCustomers > 2
ORDER BY numberOfCustomers DESC



```


# Data Types:
- varchar
- int
- bigint
- boolean
- datetime



# Create Table

```sql

CREATE TABLE `test_demo2`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(100) NOT NULL,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(100) NOT NULL,
  `age` INT NULL,
  `createdAt` DATE NULL DEFAULT NOW(),
  PRIMARY KEY (`id`));

```


# ex 2 
- Create Table for Products
- id : PK
- productName: string
- category : string
- price: int
- createdAt : Datetime
- updatedAt : Datetime ( when was the last time the records updated)



## HomeWork

1. ברצונכם לנהל את שירותי ההסעות בחברה, עליכם לכתוב שאילת שמחזירה את כמות העובדים לפי כל עיר
2. הריצו שאילתה המחזירה את ממוצע מינימום הזמנות לפי כל קטגוריה
minimum_reorder_quantity
3. כתבו שאילת המחזירה את הממוצע מחיר מוצרים לפי קטגוריה
4. לפי טבלת הזמנות הריצו שאילתה המחזירה את כמות ההזמנות לפי אמצעי תשלום

## Homework Solution

```sql
1.

SELECT 
    city, COUNT(*) AS numberOfEmployee
FROM
    northwind.employees
GROUP BY city
Having max(numberOfEmployee)
order by numberOfEmployee desc limit 1

```


# Join

## Inner Join

### Example:

```sql


SELECT * FROM northwind.orders where order_date > "2006-03-20 00:00:00" and shipper_id is not null
SELECT * FROM northwind.shippers

SELECT 
    northwind.orders.id AS 'id from orders',
    northwind.orders.shipper_id AS 'shipper id from orders',
    northwind.shippers.id AS 'id from shippers',
    northwind.shippers.company as "company name from shippers"
FROM
    northwind.orders
        JOIN
    northwind.shippers ON northwind.orders.shipper_id = northwind.shippers.id





```


### ex 1
- Write a query that return every order and status:  order id, status id (from orders) , id from  order_details_status and status string from order_details_status

