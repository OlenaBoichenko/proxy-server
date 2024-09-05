const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();

// Разрешаем запросы с других доменов
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

// Запуск сервера на порту 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
