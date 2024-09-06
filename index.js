import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

const app = express();
app.use(cors({
    origin: '*',
  }));

  const API_KEY = process.env.API_KEY;

app.get('/products', async (req, res) => {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=12&has_breeds=true', {
        headers: { 'Authorization': `Bearer ${API_KEY}` }
    });
    if (!response.ok) {
      console.error(`Ошибка при запросе к API: ${response.statusText}`);
      return res.status(response.status).json({ error: 'Ошибка при запросе к API' });
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Ошибка сервера:', error.message);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});


