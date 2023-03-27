const express = require('express');
const app = express();



app.get('/', (req, res) => {
    res.send([
        {
            name: "Mohbiur",
            email: "mohib@gamil.com"
        },
        {
            name: "Mohbiur",
            email: "mohib@gamil.com"
        }
    ]);
});




app.listen(3003, ()=>{
    console.log("app lestening on 3003");
})