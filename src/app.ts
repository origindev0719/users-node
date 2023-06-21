import bodyParser from "body-parser";
import compression from "compression";
import express, { Request, Response, NextFunction, Application } from "express";
import router from "./routes";
import cors from "cors";
// import appConfig from "./config";
import dbConfig from "./config";

const app: Application = express();

dbConfig.connection();

app.get("/", (req: Request, res: Response) => {
  res.send("Users API");
});

app.use(cors({ origin: "*" }));
app.use(compression());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);

app.use(function (req: Request, res: Response, next: NextFunction) {
  res.header({
    "Access-Control-Allow-Origin": "*",
    "access-control-allow-headers": "*",
    "Access-Control-Allow-Methods": "*",
  });

  next();
});

export default app;
