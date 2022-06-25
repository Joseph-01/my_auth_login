const app = require("../server.js")
const connectDb = require("../config/config.js")
const port = process.env.PORT || 3000

connectDb.startConnection(app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
}))