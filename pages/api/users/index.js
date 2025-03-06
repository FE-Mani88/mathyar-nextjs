export default function Users (req, res) {
    if (req.method === 'POST') {
        res.status(201).json('TRUE')
    }
}