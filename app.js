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
  idleTimeoutMillis: 0,
  connectionTimeoutMillis: 0
})
 client.connect()

.then(sucess=>{
    console.log("Database Sucess Connection");
    // client.release();
     //client.end()
}).catch(err=>{
    console.log("Database Connection Err", err);
    // client.release();
     client.end()
})

// const _client = await client.connect()
// _client.on('error', (err) => console.log(err))

const query = 'SELECT * FROM auth_public.users';

// client.query(query, (err, res)=>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(res.rows);
//     }
//     return
// })


app.get('/', (req, res) => {
    client.query(query, (err, result)=>{
        // client.release();
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.send(result.rows);
        }
         client.end()
    })
});




app.listen(3000, ()=>{
    console.log("app lestening on 3000");
})