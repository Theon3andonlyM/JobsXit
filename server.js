const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/jobs', async (req, res) => {
    try {
        const response = await fetch('https://remotive.io/api/remote-jobs');
        const data = await response.json();
        res.json(data.jobs.slice(0, 10)); // Limit results to 10 jobs
    } catch (error) {
        console.error('Error fetching jobs:', error);
        res.status(500).json({ error: 'Failed to fetch job listings' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
