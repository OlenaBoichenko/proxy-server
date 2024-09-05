import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();

app.use(cors());

// Прокси-эндпоинт для работы с API
app.get('/products', async (req, res) => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});

