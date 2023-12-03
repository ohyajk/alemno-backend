import { Router } from "express"
import { addStudent, getCourse, postCourse, removeStudent } from "../controller/courseController.js"

const router = Router()

router.get("/courses", getCourse)
router.post("/courses", postCourse)
router.put("/student/", addStudent)
router.delete("/student", removeStudent)

export default router
