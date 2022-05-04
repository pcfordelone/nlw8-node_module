import { Request, Response, Router } from "express";

const routes = Router();

// Welcome Route
routes.get("/", (request: Request, response: Response) => {
  response.status(200).json({
    message: `Seja bem vindo a nossa API 🤟🏻🤟🏻🤟🏻. Acesse essa mesma rota com o verbo option para obter detalhes sobre como utilizar nossa API, obrigado!`,
  });
});

export { routes };
