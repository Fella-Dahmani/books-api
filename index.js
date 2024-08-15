const express = require("express");
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/books', async (req, res) => {
  try {
    const response = await axios.get('https://freetestapi.com/api/v1/books');
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Erreur de recuperation des livre.');
  }
});

app.get('/books/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const response = await axios.get(`https://freetestapi.com/api/v1/books/${id}`);
      res.json(response.data);
      console.log(response.data);
    } catch (error) {
      res.status(500).send('Erreur de recuperation des livres.');
    }
  });
  

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});