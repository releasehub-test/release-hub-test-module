const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.json({ status: 'ok', version: '1.0.0' });
});

app.get('/api/status', (req, res) => {
  res.json({ service: 'release-hub-test-module', uptime: process.uptime() });
});

app.get('/api/info', (req, res) => {
  res.json({ 
    name: 'Test API Module',
    environment: process.env.NODE_ENV || 'development',
    deployedAt: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
