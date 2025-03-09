import fs from 'fs'
import path from 'path'

export default function Users(req, res) {

    const dbDirectory = path.join(process.cwd(), 'data', 'db.json')
    const bufferData = fs.readFileSync(dbDirectory)
    const data = JSON.parse(bufferData)

    if (req.method === 'POST') {
        data.users.push({
            id: crypto.randomUUID(),
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
            // isAdmin: true
        })


        const newUser = {
            name: req.body.name,
            email: req.body.email
        }

        fs.writeFileSync(dbDirectory, JSON.stringify(data))
        res.status(201).json(newUser)
    } else if (req.method === 'GET') {
        res.json(data.users)
    }
}