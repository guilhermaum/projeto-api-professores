// importar a model com funcoes que modificam o banco de dados
import { professorModel } from "../models/professorModel.js";

// controllers para chamar a model e enviar os dados

export const listarProfessores = async (req, res) => {
  // requisita a query que lista os professores e armazena
  const professores = await professorModel.listarProfessores();

  // envia o resultado da query
  res.send(professores);
};

export const listarProfessorPeloId = async (req, res) => {
  // pega o id inserido na requisicao http
  const { id } = req.params;

  // requisita o professor pelo id
  const professor = await professorModel.listarProfessorPeloId(id);

  // verifica o id do professor
  if (!professor) {
    return res.status(404).json({
      mensagem: "Professor não encontrado",
    });
  }

  // envia o resultado da query
  res.send(professor);
};

export const cadastrarProfessor = async (req, res) => {
  // pega o corpo da requisicao pelo metodo post
  const { nome, disciplina, email, salario } = req.body;

  // verifica os campos
  if (!nome || !disciplina || !email || !salario)
    return res.status(400).json({
      mensagem: "Existem campos obrigatórios que não foram preenchidos",
    });

  // chama o metodo de cadastro com os campos da requisicao
  const novoProfessor = await professorModel.cadastrarProfessor({
    nome,
    disciplina,
    email,
    salario,
  });

  // envia resposta com o id do professor adicionado
  res.send(`Professor foi adicionado com o id: ${novoProfessor}`);
};

export const atualizarProfessor = async (req, res) => {
  // pega o id dos parametros
  const { id } = req.params;

  // pega o corpo da requisicao pelo metodo put
  const { nome, disciplina, email, salario } = req.body;

  // verifica os campos
  if (!nome || !disciplina || !email || !salario)
    return res.status(400).json({
      mensagem: "Existem campos obrigatórios que não foram preenchidos",
    });

  // chama o metodo de atualizar com os campos da requisicao
  const professorAtualizado = await professorModel.atualizarProfessor(id, {
    nome,
    disciplina,
    email,
    salario,
  });

  // envia resposta com o id do professor atualizado
  res.send(`Professor com o id ${id} atualizado`);
};

export const apagarProfessor = async (req, res) => {
  // pega o id da requisicao http
  const { id } = req.params;

  // requisita o professor pelo id
  const professorExcluido = await professorModel.apagarProfessor(id);

  // verifica o id do professor
  if (!professorExcluido) {
    return res.status(404).json({
      mensagem: "Professor não encontrado",
    });
  }

  // envia o resultado da exclusao
  res.send(`Professor com o id ${id} foi apagado`);
};
