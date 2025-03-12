import fs from 'fs'
import path from 'path'
import { v4 as uuidv4 } from 'uuid'

export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        const dbDirectory = path.join(process.cwd(), 'data', 'db.json')
        const bufferData = fs.readFileSync(dbDirectory)
        const data = JSON.parse(bufferData)

        const { email, password, name } = req.body

        // Validate required fields
        if (!email || !password || !name) {
            return res.status(400).json({ message: 'All fields are required' })
        }

        // Check if user already exists
        const existingUser = data.users.find(user => user.email === email)
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' })
        }

        // Create new user
        const newUser = {
            id: uuidv4(),
            name,
            email,
            password,
            role: 'user'
        }

        // Add user to database
        data.users.push(newUser)
        
        // Write to file
        fs.writeFileSync(dbDirectory, JSON.stringify(data, null, 2))

        // Return success without password
        const { password: _, ...userWithoutPassword } = newUser
        return res.status(201).json(userWithoutPassword)
    } catch (error) {
        console.error('Registration error:', error)
        return res.status(500).json({ message: 'Internal server error' })
    }
} 