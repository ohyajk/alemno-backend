import mongoose from "mongoose"

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    instructor: {
        type: String,
    },
    description: {
        type: String,
    },
    enrollmentStatus: {
        type: String,
        enum: ["open", "closed", "in-progress"],
        default: "closed",
    },
    thumbnail: {
        type: String,
    },
    duration: {
        type: String,
    },
    schedule: {
        type: String,
    },
    location: {
        type: String,
    },
    prerequisites: {
        type: Array,
    },
    syllabus: [
        {
            week: {
                type: Number,
            },
            topic: {
                type: String,
            },
            content: {
                type: String,
            },
        },
    ],
    students: [
        {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },
    ],
})

const Course = mongoose.model("Course", courseSchema)

export default Course
