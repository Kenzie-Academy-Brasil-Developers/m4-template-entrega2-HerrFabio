import express, { json } from "express";
import { bookRouter } from "./routes/books.routes";
import { GlobalErrors } from "./errors/erros.middleware";

export const app = express();
const globalErrors = new GlobalErrors;

app.use(json());

app.use("/books", bookRouter);

app.use(globalErrors.handleErrors);