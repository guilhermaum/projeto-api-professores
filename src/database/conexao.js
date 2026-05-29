// importando a biblioteca mysql com promises para a programação assíncrona
import mysql from "mysql2/promise";

// criando a conexão com o banco de dados
const conexao = mysql.createPool({
  // endereço ip
  host: "localhost",
  // usuário do banco
  user: "root",
  // senha
  password: "batatafrita15",
  // nome do banco de dados
  database: "escola",
});

// exportando a variavel
export { conexao };
