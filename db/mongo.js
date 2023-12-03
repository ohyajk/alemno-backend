import mongoose from "mongoose"

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {})
        console.log("🟢 Connected to DB Sire 🫡")
    } catch (error) {
        console.log({
            message: "🔴 There is a problem sire 😵",
            error,
        })
    }
}

export default connect
