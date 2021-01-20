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
 
