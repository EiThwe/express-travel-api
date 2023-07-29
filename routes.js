import express from "express";
const router = express.Router();

router.get("/people", function (req, res) {
  const people = [
    {
      name: "Bo Bo",
      age: 22,
    },
    {
        name:"Ni Ni",
        age:23
    }
  ];
  return res.status(200).json(people);
});

router.get("/people/:id",function(req,res){
    const id = req.params.id;
    return res.status(200).json({id});
})

export default router;