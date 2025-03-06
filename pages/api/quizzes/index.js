import fs from 'fs'
import path from 'path'

export default function Quizzes (req, res) {
    const databaseDirectory = path.join(process.cwd(), 'data', 'db.json')

    const bufferData = fs.readFileSync(databaseDirectory)
    const data = JSON.parse(bufferData)

    if (req.method === 'GET') {
        res.json(data.quizzes)
    }
}