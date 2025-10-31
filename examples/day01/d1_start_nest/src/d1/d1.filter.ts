import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class D1Filter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {}
}
