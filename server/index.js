const express = require('express');
const connectDB = require('./db.js');
const Employee = require('./models/items.js');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
connectDB();

app.get('/', async (req, res) => {
    try {
        const items = await Employee.find(); // Correct model name and method
        console.log(items);
        return res.json({ items }); // Use consistent key name
    } catch (error) {
        console.error('Error fetching employee data:', error);
        return res.status(500).json({ error: 'Internal Server Error' }); // Handle error response
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
