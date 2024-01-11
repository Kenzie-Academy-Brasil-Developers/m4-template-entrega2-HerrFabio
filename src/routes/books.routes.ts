import { Router } from "express";
import { BookControllers } from "../controllers/bookscontrollers";
import { BookMiddlewares } from "../middleware/book.middleware";


export const bookRouter = Router ();
const bookControllers = new BookControllers();
const bookMiddlewares = new BookMiddlewares

bookRouter.post("/",bookMiddlewares.verifyBookRegister, bookControllers.createBook);
bookRouter.get("/", bookControllers.getBooks);

bookRouter.use("/:id", bookMiddlewares.verifyBookId);

bookRouter.get("/:id", bookControllers.retrieveBook);
bookRouter.patch("/:id", bookMiddlewares.verifyBookRegister, bookControllers.updateBook);
bookRouter.delete("/:id", bookControllers.deleteBook);

