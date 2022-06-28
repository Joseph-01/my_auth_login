const express = require("express")
const passport = require("passport")
const session = require("express-session")
// const mongoose = require("mongoose")

const app = express()
require("./config/passport")(passport)

// Sessions
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        // store: MongoStore.create({ mongoUrl: process.env.MONGO_URI, }),
    })
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

const u = "/auth/google"
//our ui to integrate oauth
app.get("/", (req, res) => {
    //this is where we put our ui url that is going to use our auth service
    res.send(`<a href=${u}>hello</a>`)
})

//routes
app.use("/auth", require("./routes/auth"))


//export app for test purpose and it is been used in ./bin/www.js
module.exports = app