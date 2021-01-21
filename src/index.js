const express = require("express");
const app = express();
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const port = process.env.PORT || 3000;
// app.use((req, res, next) => {
//   if (req.method) {
//     return res.status(503).send("Under Maintainance ");
//   }
//   next();
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server successfully running on :", port);
});

const jwt = require("jsonwebtoken");

// const myFunction = () => {
//   const token = jwt.sign({ _id: "184081D" }, "secretCode", {
//     expiresIn: "30min",
//   });
//   console.log(token);

//   const data = jwt.verify(token, "secretCode");
//   console.log(data);
// };
// myFunction();
