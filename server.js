const express = require('express');
const bodyParser = require('body-parser');
const mjml = require('mjml');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(bodyParser.json({ limit: '10mb' }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// MJML to HTML conversion endpoint
app.post('/convert', (req, res) => {
  try {
    const { mjmlContent } = req.body;
    
    if (!mjmlContent) {
      return res.status(400).json({ 
        error: 'Missing mjmlContent in request body' 
      });
    }

    const result = mjml(mjmlContent);
    
    if (result.errors && result.errors.length > 0) {
      return res.status(422).json({ 
        errors: result.errors 
      });
    }

    res.status(200).json({ 
      html: result.html 
    });
  } catch (error) {
    console.error('Conversion error:', error);
    res.status(500).json({ 
      error: 'Error processing MJML', 
      message: error.message 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Email generator service running on port ${PORT}`);
});