import mongoose from "mongoose";

const quizSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    grade: {
        type: Number,
        required: true,
    },
    difficulty: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    }
})

const quizzesModal = mongoose.models.Quiz || mongoose.model('Quiz', quizSchema)

export default quizzesModal