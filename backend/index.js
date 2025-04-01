const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Criar ou encontrar usuário
app.post('/usuarios', async (req, res) => {
  const { nome, email } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO usuarios (nome, email) VALUES ($1, $2) ON CONFLICT (email) DO UPDATE SET nome = EXCLUDED.nome RETURNING *',
      [nome, email]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

// Listar usuários
app.get('/usuarios', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM usuarios');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));