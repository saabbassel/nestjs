import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class D1Middleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    next();
  }
}
