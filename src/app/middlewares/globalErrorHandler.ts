/* eslint-disable @typescript-eslint/no-unused-expressions */
import { NextFunction, Request, Response } from "express";
import { envCon } from "../config";
import { AppError } from "../errorHelpers/AppError";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const globalErrorHandler = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = `Something Went Wrong ${err.message}`;
  if (err instanceof AppError) {
    (statusCode = err.statusCode), (message = err.message);
  } else if (err instanceof Error) {
    (statusCode = 500), (message = err.message);
  }

  res.status(statusCode).json({
    success: false,
    message: message,
    error: err,
    stack: envCon.NODE_ENV === "development" ? err.stack : undefined,
  });
};

export default globalErrorHandler;
