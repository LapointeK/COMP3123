var http = require("http");
//TODO - Use Employee Module here
var employees = require('./Employee.js');
console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.end("<h1>Welcome to Lab Exercise 03</h1>");
        }

        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            return res.end(JSON.stringify(employees));
        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            res.setHeader('Content-Type', 'application/json;charset=utf-8');
            // sort JSON array
            employeesSorted = sortEmployees;
            // create a new array of first and last names sorted by ascending order
            const sortedArray = employeesSorted.map((sorted => `${sorted.firstName} ${sorted.lastName}`));
            // return sortedArray as a JSON array
            return res.end(JSON.stringify(sortedArray));
        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }  
            salary = sumOfSalary;
            return res.end(JSON.stringify(`total_salary: ${salary.toLocaleString()}`));
    }
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})

// Sort employees JSON array by comparing first names and last names
const sortEmployees = employees.sort((a,b) => {
    const sort = a.firstName.localeCompare(b.firstName);
    return sort !== 0 ? sort : a.lastName.localeCompare(b.lastName);
});

// Sum of all employees salaries
const sumOfSalary = employees.reduce((acc, current) => 
    acc + current.Salary,0,
);