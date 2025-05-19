import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';

const app = express();
const port = 3000; 


app.use(cors()); //Permite conexão de qualquer origem  
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2302',
    database: 'teste'
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
  const { name, email, password } = req.body;
  const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  
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


app.listen(port); //Porta na qual nossa API irá ficar