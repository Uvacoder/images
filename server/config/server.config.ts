import express from "express";
import { env } from "./env.config";
import { apiRouter } from "../routes";

function initMiddlewares(app: express.Application) {
  app.use(express.json());
}

function initRoutes(app: express.Application) {
  app.use("/api", apiRouter);
}

function startServer() {
  const app: express.Application = express();

  initMiddlewares(app);
  initRoutes(app);

  app.listen(env.port, () => {
    console.log("Server is running on port 3000");
  });
}

export { startServer };
