# 📘 Day 02 Modules and Middleware, Testing

# 🎯 Goals

Understand NestJs module architecture.
Set up a unit test for a NestJS project.
Learn about its architecture: Modules, Controllers, and Providers.

# 🛠️ Main points to cover

- (15 Min) Warm-up and Recap of Day 1
  - Quick review of Day 1 topics
  - Address any questions or clarifications
- (45 Min) Modular architecture in NestJS
  - Modules and Middleware
    - Creating and organizing modules
    - Importing and exporting modules
    - Adding middleware to modules
- (30 Min) Hands-on: Create User and Auth modules.
- break (10 Min)
- (30 Min) Services and Business Logic
  - Creating services
  - Injecting services into controllers
  - Separation of concerns
- (30 Min) Hands-on: Implement business logic in UserService.
- (30 Min) DTO: Creating DTOs
  - Using class-validator and class-transformer
  - Validating incoming requests
  - Data Transfer Objects (DTOs) and Validation
- break (40 Min)
- (30 Min) Hands-on: Add validation to user creation and update endpoints.
  - Using class-validator and class-transformer
  - Validating incoming requests
- (30 Min) Middleware and Guards
  - Middleware for logging, authentication
  - Guards for role-based access control
  - Using @UseGuards and custom guards
- (30 Min) Hands-on: Add a simple auth guard to protect routes.
- break (10 Min)
- (30 Min) Testing in NestJS
  - Introduction to testing concepts
  - Setting up unit tests with Jest
  - Writing tests for controllers and services
- (45 Min) Hands-on: Write unit tests for UserService and UserController.
- (15 Min) Q&A and Wrap-up

# 📚 Detailed Agenda

Explore modular architecture in NestJS.
Learn to import/export modules.
Add Middleware, Pipes, and Guards overview.

- ValidationPipe: Creating a Task
- Error Handling: Getting a non-existing Task
- Error Handling: Deleting a non-existing Task
- Validation: Update Task Status
- Challenge: Validating Task Filtering and Search
  Implement a Logger middleware.
  Assignment: Modularize User and Auth modules.

- Services and Business Logic

  - Creating services
  - Injecting services into controllers
  - Separation of concerns
  - Hands-on: Implement business logic in UserService.

- DTO: Creating DTOs

  - Using class-validator and class-transformer
  - Validating incoming requests
  - Data Transfer Objects (DTOs) and Validation
  - Hands-on: Add validation to user creation and update endpoints.

- Middleware and Guards
  - Middleware for logging, authentication
  - Guards for role-based access control
  - Using @UseGuards and custom guards

Hands-on: Add a simple auth guard to protect routes.

- TODO Middleware and interceptors (PS)

- FCC: Middleware, Exception Filter, Transform param using ParseIntPipe, Validate Request Body using class validator

# Bounce

- Http Status Code https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status
- SOLID https://en.wikipedia.org/wiki/SOLID
- DI https://angular.dev/guide/di
- Typescript best practices https://www.typescriptlang.org/docs/
- NestJS https://docs.nestjs.com/
- Dynami modules https://docs.nestjs.com/modules#dynamic-modules, https://github.com/nestjs/nest/tree/master/sample/25-dynamic-modules
- AOP https://en.wikipedia.org/wiki/Aspect-oriented_programming
- RxJs https://github.com/ReactiveX/rxjs
