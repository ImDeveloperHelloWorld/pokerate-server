import { Request, Response, NextFunction } from 'express';

class AppError extends Error {
  statusCode: number;
  isOperational: boolean;

  constructor(message: string, statusCode: number, isOperational: boolean = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    Error.captureStackTrace(this, this.constructor);
  }
}

const errorMiddleware = (err: AppError, req: Request, res: Response, next: NextFunction) => {

  if (process.env.NODE_ENV === 'development') {
    console.error(err.stack);
  }

  res.status(err.statusCode || 500).json({
    status: 'error',
    message: 'Something went wrong! Please try again later.',
  });
};

const createError = (message: string, statusCode: number) => {
  return new AppError(message, statusCode);
};

export { errorMiddleware, createError };