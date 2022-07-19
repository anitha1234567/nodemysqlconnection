const express = require("express")
const app = express();
const PORT = process.env.PORT || 4000;
const mysql = require("mysql")
const cors = require("cors")

app.use(cors())


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "anitha@1993",
    database: "ddl_commands"
})
connection.connect(e => {
    if (e) {
        console.log(e)
        return e
    }
    else console.log("connected successfully")
})

const users = {
    name: "Anitha",
    Adress: "vijayawada",
    Status: "employee"

}
app.get("/getusers", (req, res) => {
    connection.query("select * from users", (err, result) => {
        if (err)
            return res.send(err)
        else
            return res.json(result)
    })
})

app.get("/", (req, res) =>
    res.send("hello this is default root route"))
app.get("/users", (req, res) => {
    res.json(users)
})

app.listen(PORT, () =>
    console.log(`server is working on ${PORT}`))