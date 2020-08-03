const express = require('express');
const method = require('method-override');
const app = express()

app.listen(3000, () => console.log("Server on http://localhost:3000"))

app.use(express.json())

app.use(express.urlencoded({extended:false}))

app.use(method("_method"))

app.use(require("./routes/main"))