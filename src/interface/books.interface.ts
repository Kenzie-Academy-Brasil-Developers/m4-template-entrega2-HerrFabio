import { AnyZodObject, z } from "zod";
import { bookArraySchema, bookCreateSchema, bookSchema, bookUpdateSchema } from "../schemas/books.schemas";

type book = z.infer<typeof bookSchema>;

type CreateBook = z.infer<typeof bookCreateSchema>;

type UpdateBook = z.infer<typeof bookUpdateSchema>;

type ArrayBook = z.infer<typeof bookArraySchema>;

interface RequestSchema {
    params?: AnyZodObject,
    body?: AnyZodObject,
    query?: AnyZodObject
}

export {book, CreateBook, UpdateBook, ArrayBook, RequestSchema};