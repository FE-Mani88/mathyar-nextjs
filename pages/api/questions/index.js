import Question from '@/models/question'

export default async function Questions(req, res) {
    

    if (req.method === 'GET') {
        // res.json(data.questions)
        const questions = await Question.find()
        res.json(questions)
    }
}