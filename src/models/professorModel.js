// importação do arquivo que realiza a conexao com o banco de dados
import {
  apagarProfessor,
  atualizarProfessor,
} from "../controllers/professorController.js";
import { conexao } from "../database/conexao.js";

// funções que realizam as consultas (querys) no banco de dados

export const professorModel = {
  listarProfessores: async () => {
    // query da função
    const sql = "SELECT * FROM professores";

    // executar a querys
    const [rows] = await conexao.execute(sql);

    // retorna o resultado da query
    return rows;
  },

  listarProfessorPeloId: async (id) => {
    // query da função
    const sql = `SELECT * FROM professores WHERE id = ?`;

    // executar a query
    const [rows] = await conexao.execute(sql, [id]);

    // retorna o resultado da query
    return rows;
  },

  cadastrarProfessor: async (professor) => {
    // coleta os atributos do professor
    const { nome, disciplina, email, salario } = professor;

    // query da função
    const sql = `INSERT INTO professores (nome, disciplina, email, salario) 
     VALUES (?, ?, ?, ?)`;

    // executar a query
    const [resultado] = await conexao.execute(sql, [
      nome,
      disciplina,
      email,
      salario,
    ]);

    // retorna o resultado da query
    return resultado.insertId;
  },

  atualizarProfessor: async (id, professor) => {
    // coleta os atributos do professor
    const { nome, disciplina, email, salario } = professor;

    // query da função
    const sql = `UPDATE professores 
    SET nome = ?, disciplina = ?, email = ?, salario = ?
    WHERE id = ?`;

    // executar a query
    const [resultado] = await conexao.execute(sql, [
      nome,
      disciplina,
      email,
      salario,
      id,
    ]);

    // retorna o resultado da query
    return resultado;
  },

  apagarProfessor: async (id) => {
    // query da função
    const sql = `DELETE FROM professores 
    WHERE id = ?`;

    // executar a query
    const [resultado] = await conexao.execute(sql, [id]);

    // retorna o resultado
    return resultado;
  },
};
