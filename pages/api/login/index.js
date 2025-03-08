import fs from 'fs'
import path from 'path'

export default function Users(req, res) {

    const dbDirectory = path.join(process.cwd(), 'data', 'db.json')
    const bufferData = fs.readFileSync(dbDirectory)
    const data = JSON.parse(bufferData)

    if (req.method === 'POST') {
        const { email, password } = req.body

        const user = data.users.find(user => user.email == email && user.password == password)

        if (user) {
            res.status(200).json(user)
        } else {
            res.status(404).json('User not found !')
        }

    }
}