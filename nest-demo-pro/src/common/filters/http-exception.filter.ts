import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): Response {
    console.log(`exception ${exception}`, `host ${host}`);

    const ctx = host.switchToHttp();
    const req = ctx.getRequest<Request>();
    const res = ctx.getResponse<Response>();
    const status = exception.getStatus();

    return res.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: req.url,
    });
  }
}
