import express from "express";
import * as mongojs from "mongojs";
import bodyParser from "body-parser";
const app = express();

const db = mongojs("travel",["records"]);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/api/records",function(req,res){
    db.records.find(function(err,data){
        if(err){
           return res.sendStatus(500);
        }
        else{
            return res.sendStatus(200).json({
                meta: {total: data.length},
                data
            })
        }
    })
})
app.listen(8000, function () {
    console.log("Server running at port 8000...");
  });