import { NextFunction, Request, Response } from "express";
import { booksDatabase } from "../database/database";
import { AppError } from "../errors/AppErros";

export class BookMiddlewares {
    verifyBookId = (req: Request, res: Response, next: NextFunction): void => {
        const index = booksDatabase.findIndex((book) => book.id === Number(req.params.id));

        if (index === -1) {
            throw new AppError (404, "Book not found.");
        };

        res.locals.bookIndex = index;

        return next();
    };

    verifyBookRegister = (req: Request, res: Response, next: NextFunction): void => {
        const bookFound = booksDatabase.find((book) => book.name === req.body.name);

        if (bookFound) {
            throw new AppError(409, "Book already registered.")
        };

        return next();
    };

};