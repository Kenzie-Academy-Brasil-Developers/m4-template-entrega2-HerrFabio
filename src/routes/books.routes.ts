import { Router } from "express";
import { BookControllers } from "../controllers/bookscontrollers";
import { BookMiddlewares } from "../middleware/book.middleware";
import { GlobalErrors } from "../errors/GlobalErros.middleware";
import { bookCreateSchema, bookUpdateSchema, querySchema } from "../schemas/books.schemas";


export const bookRouter = Router ();
const bookControllers = new BookControllers();
const bookMiddlewares = new BookMiddlewares();
const globalErrors = new GlobalErrors();

bookRouter.post("/", globalErrors.validateBody({body: bookCreateSchema}),bookMiddlewares.verifyBookRegister, bookControllers.createBook);
bookRouter.get("/", globalErrors.validateBody({query: querySchema}), bookControllers.getBooks);

bookRouter.use("/:id", bookMiddlewares.verifyBookId);

bookRouter.get("/:id", bookControllers.retrieveBook);
bookRouter.patch("/:id", globalErrors.validateBody({body: bookUpdateSchema}), bookMiddlewares.verifyBookRegister, bookControllers.updateBook);
bookRouter.delete("/:id", bookControllers.deleteBook);

