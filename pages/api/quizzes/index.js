// import mongoose from "mongoose"
import connectDB from "@/utils/db"
import quizzesModel from "@/models/quiz"

export default async function Quizzes(req, res) {
    connectDB()
    if (req.method === 'GET') {
        // console.log(quizzesModel.find({}));
        const quizzes = await quizzesModel.find()
        
        res.json(quizzes)
    } else if (req.method === 'POST') {
        const { title, imageUrl, description, difficulty, grade, duration, topics } = req.body
        const quiz = await quizzesModel.create({ title, imageUrl, description, difficulty, grade, duration, topics })
        res.json(quiz)
    }
}