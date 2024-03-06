# Handling async errors

Based on the excellent article on the three possibilities of error handling in Express:
https://medium.com/@utkuu/error-handling-in-express-js-and-express-async-errors-package-639c91ba3aa2

This demo shows how to catch asynchronous errors centralized with the package "express-async-errors".

This way we do not need to put a try catch block around each asynchronous call (e.g. for each mongoose query to the database).

This way all errors in async functions are catched and forwarded by the package to our central 
error handler.

