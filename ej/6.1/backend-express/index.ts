import express,{ Request, Response, NextFunction } from "express";
import { setupRoutes } from "./routes/main";


const app = express();

app.use(express.json());

setupRoutes(app);


app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    console.error(err.stack);
    return res.status(500).json({ message: err.message });
  }
  console.error(err);
  return res.status(500).json({ message: "Something went wrong" });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});