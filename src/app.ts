import "express-async-errors";
import express, { json } from "express";
import { bookRouter } from "./routes/books.routes";
import { GlobalErrors } from "./errors/GlobalErros.middleware";
import helmet from "helmet";

export const app = express();

app.use(helmet());

app.use(json());

const globalErrors = new GlobalErrors();


app.use("/books", bookRouter);

app.use(globalErrors.handleErrors);