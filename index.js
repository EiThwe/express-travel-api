import express from "express";
import  routes  from "./routes.js";
const app = express();


// app.get("/api/people", function (req, res) {
//   const data = [
//     { name: "Bobo", age: 22 },
//     { name: "Nini", age: 23 },
//   ];
//   return res.status(200).json(data);
// });
// app.listen(8000, function () {
//   console.log("Server running at port 8000...");
// });

// app.get("/api/people/:id",function(req,res){
//   const id = req.params.id;
//   return res.status(200).json({id});
 
// })
app.use("/api",routes);
app.listen(8000, function () {
    console.log("Server running at port 8000...");
  });