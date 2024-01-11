import { Request, Response } from "express";
import { BookServices } from "../services/books.services";

export class BookControllers {
    private bookService = new BookServices();

    createBook = (req: Request, res: Response): Response => {
        const newBook = this.bookService.createBook(req.body);

        return res.status(201).json(newBook);
    };

    getBooks = (req: Request, res: Response): Response => {
        const allBooks = this.bookService.getBooks;

        return res.status(200).json(allBooks);
    };

    retrieveBook = (req: Request, res: Response): Response => {
        const index = res.locals.bookIndex;
        
        const bookFound = this.bookService.retrieveBook(index);

        return res.status(200).json(bookFound);
    }

    updateBook = (req: Request, res: Response): Response => {
        const index = res.locals.bookIndex;

        const updatedBook = this.bookService.updateBook(index, req.body);

        return res.status(200).json(updatedBook);
    }

    deleteBook = (req: Request, res: Response): Response => {
        const index = res.locals.bookIndex;

        this.bookService.deleteBook(index);

        return res.status(204).send();
    }

};