import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    options: {
        type: [String],
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
})

const Question = mongoose.models.Question || mongoose.model('Question', questionSchema)

export default Question