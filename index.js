
const mysql2 = require("mysql2")
const mysql2Promise = require("mysql2/promise")

async function init() {
    const connection = await mysql2.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: "admin",
        database: 'northwind' //schema
    });


    connection.query(
        'SELECT * FROM northwind.orders',
        function (err, results, fields) {
            // console.log(results[0]); // results contains rows returned by server
            // console.log(fields); // fields contains extra meta data about results, if available
            results.forEach(order => console.log(order.id, order.order_date))
        }
    );

}


async function initPromise() {
    const connection = await mysql2Promise.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: "admin",
        database: 'northwind' //schema
    });

    const [rows, fields] = await connection.execute('SELECT * FROM northwind.orders');
    rows.forEach(order => console.log(order.id, order.order_date, order.employee_id))

}
// init();
initPromise();