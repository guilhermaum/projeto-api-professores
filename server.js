// importacao da aplicação
import { app } from "./src/app.js";

// portao do servidor
const PORT = 3000;

// ativa o servidor para ouvir requisições
app.listen(PORT, () => console.log(`Servidor rodando na porta: http://localhost:${PORT}`));
