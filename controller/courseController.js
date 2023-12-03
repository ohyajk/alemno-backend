import Course from "../model/courseModel.js"

export const getCourse = async (req, res) => {
    try {
        const data = await Course.find()
        res.status(200).json({ data })
    } catch (err) {
        res.status(500).json({ err })
    }
}

export const postCourse = async (req, res) => {
    const { name, instructor, description, enrollmentStatus, thumbnail, duration, schedule, location, prerequisites, syllabus, students } = req.body
    try {
        const newCourse = new Course({
            name,
            instructor,
            description,
            enrollmentStatus,
            thumbnail,
            duration,
            schedule,
            location,
            prerequisites,
            syllabus,
            students,
        })

        await newCourse.save()
        res.status(200).json({ message: "Course saved successfully" })
    } catch (err) {
        res.status(500).json({ err })
    }
}

export const addStudent = async (req, res) => {
    const { studentId, courseId } = req.body

    try {
        const course = await Course.findById(courseId)

        if (!course) {
            return res.status(404).json({ message: "Course not found" })
        }

        if (!course.students.includes(studentId)) {
            course.students.push(studentId)
            await course.save()

            return res.status(200).json({ message: "Student added to course successfully" })
        }

        return res.status(400).json({ message: "Student already in the course" })
    } catch (err) {
        console.error(err)
        res.status(500).json({ err })
    }
}

export const removeStudent = async (req, res) => {
    const { studentId, courseId } = req.body

    try {
        const course = await Course.findById(courseId)

        if (!course) {
            return res.status(404).json({ message: "Course not found" })
        }

        const studentIndex = course.students.indexOf(studentId)

        if (studentIndex !== -1) {
            course.students.splice(studentIndex, 1)
            await course.save()

            return res.status(200).json({ message: "Student removed from course successfully" })
        }

        return res.status(400).json({ message: "Student not found in the course" })
    } catch (err) {
        console.error(err)
        res.status(500).json({ err })
    }
}
