const express = require('express');
const app = express();

// Connect to database
const { Client } = require('pg')
const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "db",
  database: "db",
  dialect: "postgres",
})
client.connect()

const query = 'SELECT * FROM auth_public.users';

client.query(query, (err, res)=>{
    if (err) {
        console.log(err);
    } else {
        console.log(res.rows);
    }
})


app.get('/', (req, res) => {
    res.send("Hello Docker application");
});




app.listen(3003, ()=>{
    console.log("app lestening on 3003");
})