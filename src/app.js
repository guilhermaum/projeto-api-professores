// importacao do express e do arquivo de rotas
import express from "express";
import useRoutes from "./routes/professorRoutes.js";

// cria a aplicacao
const app = express();

// usa a aplicacao através de requisições com formato json
app.use(express.json());

// rota raiz que determina as demais rotas
app.use("/professores", useRoutes);

// get para receber todos os professores
app.get("/professores", (req, res) => {
  console.log("GET ROUTE!");
  res.send("Resposta enviada");
});

// exportar a aplicacao
export { app };
