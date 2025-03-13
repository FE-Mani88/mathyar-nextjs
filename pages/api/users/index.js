import model from '@/models/user'
import connectDB from '@/utils/db'
// import fs from 'fs'
// import path from 'path'

export default async function Users(req, res) {
    try {
        await connectDB()

        if (req.method === 'POST') {
            const { name, email, password } = req.body

            // Validate required fields
            if (!name || !email || !password) {
                return res.status(400).json({ message: 'All fields are required' })
            }

            // Check if user already exists
            const existingUser = await model.findOne({ email })
            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' })
            }

            // Create new user
            const newUser = await model.create({ 
                name, 
                email, 
                password, 
                isAdmin: false 
            })

            // Return user without password
            const { password: _, ...userWithoutPassword } = newUser.toObject()
            return res.status(201).json(userWithoutPassword)

        } else if (req.method === 'GET') {
            const users = await model.find().select('-password')
            return res.status(200).json(users)
        } else {
            return res.status(405).json({ message: 'Method not allowed' })
        }
    } catch (error) {
        console.error('API Error:', error)
        return res.status(500).json({ 
            message: 'Internal server error',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        })
    }
}

// import mongoose from "mongoose";
// import connectDB from '@/utils/db'

// export default function Users(req, res) {
//     connectDB()

//     res.json('Hello')
// }
