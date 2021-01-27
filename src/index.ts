import http from 'http';
import app from './app';

var users = [
  {
    id: 1,
    name: "João",
    username: "joao",
    email: "joao@gmail.com"
  }
];

// Cria o server na porta 3000
http.createServer(app).listen(3000, () => console.log("server start at port 3000"));
