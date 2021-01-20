# MySQL

## Select statement

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

# Distinct 

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
