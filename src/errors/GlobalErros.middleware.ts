import { NextFunction, Request, Response } from "express";
import { AppError } from "./AppErros";
import { Schema, ZodError } from "zod";
import { RequestSchema } from "../interface/books.interface";

export class GlobalErrors {
    handleErrors = (err: Error, req: Request, res: Response, next: NextFunction): Response => {

        if (err instanceof AppError) {
            return res.status(err.statusCode).json({error: err.message});
        };

        if (err instanceof ZodError) {
            return res.status(409).json(err);
        };

        console.log(err);

        return res.status(500).json({error: "Internal server error."});
    };

    validateBody = (schema: RequestSchema) => {
        return async (req: Request, res: Response, next: NextFunction) => {
            try {
                if (schema.params) {
                    if (req.params) {
                        req.params = await schema.params.parseAsync(req.params);
                    } else {
                        throw new AppError(400, "Invalid parameter data.");
                    }
                }

                if (schema.body) {
                    if (req.body) {
                        req.body = await schema.body.parseAsync(req.body);
                    } else {
                        throw new AppError(400, "Invalid request body data.");
                    }
                }

                if (schema.query) {
                    if (req.query) {
                        req.query = await schema.query.parseAsync(req.query);
                    } else {
                        throw new AppError(400, "Invalid query parameter data.");
                    }
                }

                next();
            } catch (error) {
                next(error);
            }
        };
    };

    // validateBody = (schema: RequestSchema) => {
    //     return async (req: Request, res: Response, next: NextFunction) => {
    //         if (schema.params){
    //             req.params = await schema.params.parseAsync(req.params);
    //         };
            
    //         if (schema.body){
    //             req.body = await schema.body.parseAsync(req.body);
    //         };

    //         if (schema.query){
    //             req.query = await schema.query.parseAsync(req.query);
    //         };

            
    //         return next();
    //     };
    // };
};