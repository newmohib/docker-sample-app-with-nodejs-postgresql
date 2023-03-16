const express = require('express');
const app = express();



app.get('/', (req, res) => {
    res.send("Hello Docker application");
});




app.listen(3003, ()=>{
    console.log("app lestening on 3003");
})