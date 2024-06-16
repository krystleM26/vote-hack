import express from 'express'
import fetch from 'node-fetch'
import cors from 'cors'
import helmet from 'helmet';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
const PORT = process.env.PORT || 4000

// Proxy middleware configuration
const proxyOptions = {
    target: 'https://www.britannica.com', // Set the target URL without path
    changeOrigin: true, // Change the origin of the host header to the target URL
    pathRewrite: {
        '^/quiz': '/quiz/voting-for-the-us-president', // Rewrite '/quiz' to the actual path
    },
    onProxyReq: (proxyReq, req, res) => {
        proxyReq.setHeader('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
    },
};

const quizProxy = createProxyMiddleware(proxyOptions);

app.use(cors())

app.use(helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"], // Allow resources from the same origin
      fontSrc: ["'self'", 'https://fonts.gstatic.com'], // Allow fonts from Google Fonts
      imgSrc: ["'self'"], // Allow images from the same origin and data URIs
      scriptSrc: ["'self'", 'https://cdnjs.cloudflare.com', 'https://www.googletagservices.com', 'https://www.britannica.com'],
      styleSrc: ["'self'", 'https://fonts.googleapis.com', 'https://cdnjs.cloudflare.com', 'https://cdn.britannica.com'],
      upgradeInsecureRequests: [], // Upgrade insecure requests to HTTPS
    },
    reportOnly: true, // Set to true for report-only mode
}));

app.get('/quiz', async (req, res) => {
    try {

        const response = await fetch('https://www.britannica.com/quiz/voting-for-the-us-president', {
            headers:{
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const html = await response.text();
        res.send(html);
    } catch (error) {
        console.error('Error fetching the quiz', error);
        res.status(500).send('Failed to fetch quiz data.');
    }   
});

app.use('/quiz', quizProxy);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})