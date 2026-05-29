// importar express e funções de controller
import express from "express";
import {
  apagarProfessor,
  atualizarProfessor,
  cadastrarProfessor,
  listarProfessorPeloId,
  listarProfessores,
} from "../controllers/professorController.js";

// variavel para usar a classe que manipula as rotas
const router = express.Router();

// endpoints e funcoes executadas por rota e por metodo http
router.get("/", listarProfessores);
router.get("/:id", listarProfessorPeloId);
router.post("/", cadastrarProfessor);
router.put("/:id", atualizarProfessor);
router.delete("/:id", apagarProfessor);

// exportar rotas
export default router;
