import "express-async-errors";
import express from "express";

const app = express();

const errorHandling = (err, req, res, next) => {
  res.status(500).json({
    msg: err.message,
    success: false,
  });
};


// Error in ASYNC function is catched globally by package express-async-errors!
// and forwarded with next() to central error handler (internally)
app.get("/", async (req, res, next) => {
  throw new Error("There is an Error!");
});
app.use(errorHandling);

app.listen(5000, () => {
  console.log("Server is running on: http://localhost:5000");
});
