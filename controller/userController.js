import User from "../model/userModel.js"

export const getUser = async (req, res) => {
    try {
        const data = await User.find()
        res.status(200).json({ data })
    } catch (err) {
        res.status(500).json({ err })
    }
}

export const postUser = async (req, res) => {
    const { name, email } = req.body
    try {
        const newUser = new User({
            name,
            email,
        })

        await newUser.save()
        res.status(200).json({ message: "User saved successfully" })
    } catch (err) {
        res.status(500).json({ err })
    }
}
