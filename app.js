const express = require('express');
const dotenv = require('dotenv');
const { Client } = require('pg')
const app = express();
const result = dotenv.config()

if (result.error) {
  throw result.error
}
// console.log(result.parsed)

// Connect to database
const client = new Client({
  host: process.env.PRODUCTION_DATABASE_HOST,
  user: process.env.PRODUCTION_DATABASE_USER,
  password: process.env.PRODUCTION_DATABASE_PASSWORD,
  database: process.env.PRODUCTION_DATABASE_NAME,
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