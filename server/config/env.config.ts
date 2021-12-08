import dotenv from "dotenv";

dotenv.config();

interface EnvConfig {
  port: number;
}

const env: EnvConfig = {
  port: Number(process.env.PORT) || 3000,
};

export { env };
