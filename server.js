import express from "express"
import { configDotenv } from "dotenv"
import courseRoute from "./route/courseRoute.js"
import userRoute from "./route/userRoute.js"
import connect from "./db/mongo.js"

configDotenv()
const port = process.env.PORT
const app = express()
connect()
app.use(express.json())
app.use("/api", courseRoute)
app.use("/api", userRoute)

app.listen(port, () => {
    console.log(`🟢 App listening on port ${port}`)
})
