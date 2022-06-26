const express = require("express")
const passport = require("passport")
const session = require("express-session")

const app = express()
require("./config/passport")(passport)

// Sessions
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({ mongoUrl: process.env.MONGO_URI, }),
    })
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())


//export app for test purpose and it is been used in ./bin/www.js
module.exports = app