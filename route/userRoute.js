import { Router } from "express"
import { getUser, postUser } from "../controller/userController.js"

const router = Router()

router.get("/user", getUser)
router.post("/user", postUser)

export default router
