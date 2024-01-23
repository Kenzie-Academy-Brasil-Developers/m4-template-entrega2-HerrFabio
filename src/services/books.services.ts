import { booksDatabase } from "../database/database";
import { book, CreateBook, UpdateBook } from "../interface/books.interface";
import { idGenerate } from "../utils";

export class BookServices {
    createBook = (data: CreateBook): book => {
        const newBook: book = {
            id: idGenerate (),
            ...data,
            createdAt: new Date,
            updatedAt: new Date,
        };

        booksDatabase.push(newBook);

        return newBook;
    };

    getBooks = (query: string) => {
        return booksDatabase.filter((book) => book.name === query);
    };

    retrieveBook = (index: number): book => {
        return booksDatabase[index];
    };

    updateBook = (index: number, data: UpdateBook): book => {
        booksDatabase [index] = {
            ...booksDatabase[index],
            ...data,
            updatedAt: new Date(),
        };

        return booksDatabase[index];
    };

    deleteBook = (index: number): void => {
        booksDatabase.splice(index, 1);
    };

};