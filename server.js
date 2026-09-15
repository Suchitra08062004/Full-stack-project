const express=require("express")
const cors=require("cors")
const mysql=require("mysql2")
const app=express()


app.use(cors())
app.use(express.json())

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'suchisql',
    database:'todo'
})

db.connect((err)=>{
    if(err){
        console.log('Error connecting to database');
        return
    }
    console.log('Connected with database'); 
})

app.get("/",(req,res)=>{
    db.query(`select * from items`,(err,results)=>{
        if(err){
            console.log('Error to fetch data');
            return
        }
        console.log("Data: ",results);
        res.send(results)
    })
})
app.post("/add-item",(req,res)=>{
    db.query(`insert into items(itemDescription) values('${req.body.value}');`,(err,results)=>{
        if(err){
            console.log('Error occured');
            return
        }
        console.log("added sucessfully");
    })
    res.send("added successfully")
})

app.put("/edit-item",(req,res)=>{
    const { ID, itemDescription } = req.body;
    db.query(`update items set itemDescription='${itemDescription}' where ID=${ID};`,(err,results)=>{
        if(err){
            console.log('Error occured');
            return
        }
        console.log("upadted sucessfully");
        
    })
    res.send("updated successfully")

})

app.delete("/delete-item",(req,res)=>{
    const { ID, itemDescription } = req.body;
    db.query(`delete from items where ID=${ID};`,(err,results)=>{
        if(err){
            console.log('Error occured');
            return
        }
        console.log("deleted sucessfully");
        
    })
    res.send("deleted successfully")

})
app.listen(3000,()=>{
    console.log('Server started');
})