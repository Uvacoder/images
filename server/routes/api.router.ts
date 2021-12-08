import { Router } from "express";

const apiRouter = () => {
  const router = Router();

  router.get("/", (req, res) => {
    res.send("Hello World!");
  });
};

export { apiRouter };
