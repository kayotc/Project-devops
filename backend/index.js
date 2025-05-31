import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';

const app = express();
const port = 3000; 


app.use(cors()); //Permite conexão de qualquer origem  
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '2302',
  database: process.env.DB_NAME || 'teste'
});


db.connect(err => { //Caso dê erro ou se vai conectar tudo certinho 
  if (err) {
    console.error('Erro na conexão com o MySQL:', err);
  } else {
    console.log('Conectado ao MySQL!');
  }
});


//Rota Post - Criar usuários
app.post('/users', (req, res) => {
  const {  name, email, password } = req.body;
  const query = 'INSERT INTO users ( name, email, password) VALUES (?, ?, ?)';
  
  db.query(query, [name, email, password], (err, result) => {
    if (err) {
      // ⚠️ Verifica se o erro é de e-mail duplicado
      if (err.code === 'ER_DUP_ENTRY') {
        res.status(409).send('Usuário com este e-mail já existe.');
      } else {
        res.status(500).send('Erro ao inserir usuário.');
      }
    } else {
      res.status(201).send('Usuário inserido com sucesso.');
    }
  });
});


//Rota Get - Buscar usuários 
app.get('/users', (req, res) => {
  const query = 'SELECT * FROM users';

  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send('Erro ao buscar usuários.');
    } else {
      res.status(200).json(results);
    }
  });
});


// PUT - Atualizar usuário pelo Email
app.put('/users/:email', (req, res) => {
  const { name, email: newEmail, password } = req.body;
  const { email: oldEmail } = req.params;

  const query = 'UPDATE users SET name = ?, email = ?, password = ? WHERE email = ?';

  db.query(query, [name, newEmail, password, oldEmail], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        res.status(409).send('Este e-mail já está cadastrado.');
      } else {
        res.status(500).send('Erro ao atualizar usuário.');
      }
    } else if (result.affectedRows === 0) {
      res.status(404).send('Usuário não encontrado.');
    } else {
      res.status(200).json({ name, email: newEmail, password });
    }
  });
});



// DELETE - Remover usuário por email
app.delete('/users/:email', (req, res) => {
  const { email } = req.params;

  const query = 'DELETE FROM users WHERE email = ?';

  db.query(query, [email], (err, result) => {
    if (err) {
      res.status(500).send('Erro ao deletar usuário.');
    } else if (result.affectedRows === 0) {
      res.status(404).send('Usuário não encontrado.');
    } else {
      res.status(200).send('Usuário deletado com sucesso.');
    }
  });
});



app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
}); //Porta na qual nossa API irá ficar
     