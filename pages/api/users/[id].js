import model from "@/models/user";
import connectDB from "@/utils/db";

export default async function handler(req, res) {
    try {
        await connectDB()
        const { id } = req.query;

        if (req.method === "GET") {
            const user = await model.findById(id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            return res.status(200).json(user);
        }

        if (req.method === "DELETE") {
            const user = await model.findByIdAndDelete(id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            return res.status(200).json({ message: 'User deleted successfully' });
        }

        return res.status(405).json({ message: 'Method not allowed' });
    } catch (error) {
        console.error('API Error:', error);
        return res.status(500).json({ 
            message: 'Internal server error',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
}
