# 📘 Day 1: Introduction to NestJS & Environment Setup

NestJS Learn: “Introduction & fundamentals”
Overview of NestJS architecture, Node.js refresher, environment setup, and understanding project structure.
Scaffold a new NestJS project, explore folder structure, implement a simple “hello” endpoint

# 🎯 Goals

Understand what NestJS is and why it's useful.
Set up a NestJS project using the CLI.
Learn about its architecture: Modules, Controllers, and Providers.
Create and run a basic REST API.

# 🛠️ Main points to cover

- (30 Min) Introduction & Assessment test (pre-training)
- (60 Min) What is NestJS and why use it?
- break
- (15 Min) Environment Setup
- (30 Min) Hands-on:
  - Install Node.js, npm/yarn, and Nest CLI.
  - Optional VS Code Extensions
  - Create hello World App
- (45 Min) Architecture overview (Modules, Controllers, Providers)
- break
- (60 Min) Hands-on:
  - Create a simple module
  - Create a controller
  - Create a service
  - Setting up a NestJS project with CLI
  - Running the first app
- (30 Min) Module & Dependency Injection overview
- break
- (60 Min) Hands-on:
  - Build a simple “Hello World” REST endpoint.
  - extend it to return a personalized greeting using route parameters.
    -Implement and test the endpoint.
- (30 Min) Q&A and Wrap-up

# 🧠 Concepts: Introduction to NestJS

## ✅ What is NestJS?

- Ref: https://github.com/geersch/nestjs-getting-started/blob/69f656d3d36d5f4dc65bf20417e46a6b29fea539/docs/01-getting-started-with-nestjs.md

NestJS or Nest is a framework for building efficient, scalable Node.js server-side applications. It uses **progressive** JavaScript, is built with and fully supports TypeScript (yet still enables developers to code in pure JavaScript), and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).

Under the hood, NestJS makes use of robust HTTP server frameworks like Express (the default) and optionally can be configured to use Fastify as well!

NestJS provides a level of abstraction above these common Node.js frameworks but also exposes their APIs directly to the developer. This gives developers the freedom to use the myriad of third-party modules which are available for the underlying platform.

It uses TypeScript and is heavily inspired by Angular, making it ideal for enterprise-grade applications.
It is written in TypeScript and its structure, especially the modules and dependency injection system, is familiar to Angular.

https://nestjs.com/
https://github.com/nestjs

- A Simple NestJS Application
  The course teaches how to create and initialize a NestJS project using the Nest CLI, guiding you through the setup process.
  You’ll learn to use the CLI effectively, understanding which options to select for different scenarios.
  The course covers the conventions NestJS uses for organizing directories and files, helping you follow best practices.
  By the end, you’ll be able to structure a NestJS application for maintainability and scalability, ready to build your own projects.

- What Is NestJS?
  NestJS is a framework for building efficient, scalable Node.js server-side applications, providing a robust architecture on top of Express or Fastify.
  Unlike plain Node.js, which lacks strong organizational conventions, NestJS enforces modularity and maintainability through its patterns.
  It uses TypeScript by default, encouraging type-safe code and reducing runtime errors.
  NestJS offers an opinionated approach, making backend development more predictable and collaborative, especially for teams.
  The framework ensures that applications are stable, testable, and easy for new developers to understand if they know NestJS conventions.
- How Does a NestJS Application Work?
  NestJS applications follow the model-view-controller (MVC) pattern, organizing features into modules for separation of concerns.
  The main entry point is main.ts, which runs the bootstrap function to start the app, typically as an Express server.
  The root AppModule imports feature modules, such as Tickets and Cart, each encapsulating related functionality.
  Decorators (e.g., @Module, @Controller, @Injectable) are used to define modules, controllers, and services, making code more readable and organized.
  Controllers handle HTTP requests and responses, defining routes for clients to call.
  Services contain business logic, such as data retrieval or processing, and are injected into controllers.
  Feature modules can depend on each other; for example, CartService may use TicketsService to access ticket data.
  Models (TypeScript interfaces) define the shape of data, ensuring consistency across the application.
  The module loader ensures all dependencies are resolved, allowing features to interact seamlessly.

- NestJS Project Structure
  A typical NestJS project includes configuration files: package.json (dependencies, scripts), tsconfig.json (TypeScript settings), .eslintrc (linting rules), and .prettierrc (code formatting).
  The src directory contains main.ts (entry point) and app.module.ts (root module), as well as feature-specific folders.
  Each feature (e.g., tickets, cart) has its own module, controller, service, and model, organized in dedicated folders for clarity.
  Best practices include creating one module per feature, keeping all related files together, and using consistent naming conventions.
  Global settings (e.g., middleware, configuration) belong in main.ts, while feature-specific settings go in their respective modules.
  The MVC pattern is enforced: controllers handle HTTP, services handle business logic, models define data, and modules group related components.

- Create a New NestJS Application with the Nest CLI
  The Nest CLI is an npm package that simplifies project creation and code generation.
  Install the CLI globally with npm, then create a new project using nest new <project-name>.
  The CLI scaffolds all necessary config files, main.ts, app.module.ts, and basic controller/service files.
  Use nest generate (or nest g) to create modules, controllers, and services, following NestJS naming conventions.
  The CLI automatically imports generated files into the appropriate modules, reducing manual setup.
  For files not covered by schematics (e.g., models), create them manually and organize them within feature folders.
- Run and Build with the Nest CLI
  Use nest start or npm run start to launch the application; watch mode (nest start --watch or npm run start:dev) reloads the app on code changes.
  nest build or npm run build compiles TypeScript code to JavaScript, outputting to the dist folder as defined in tsconfig.json.
  The CLI provides many commands for development, including --dry-run to preview changes before applying them.
  Scripts in package.json often wrap CLI commands for convenience and consistency.

## ✅ Core Concepts

Modules: Organize code into cohesive blocks.
Controllers: Handle incoming requests and return responses.
Providers (Services): Contain business logic and can be injected into controllers.

## 🛠️ Setup and Hands-On

- Install Node.js and npm/yarn

  - Download and install from https://nodejs.org/
  - Verify installation:  
    node -v
    npm -v
    yarn -v (if using yarn)

- (Optional) Installing VSCode and Extensions

- Install NestJS CLI https://github.com/nestjs/nest-cli
  npm i -g @nestjs/cli
- Validate nest
  nest --version
  Commands:
  new|n [options] [name] Generate Nest application.
  build [options] [apps...] Build Nest application.
  start [options] [app] Run Nest application.
  info|i Display Nest project details.
  add [options] <library> Adds support for an external library to your project.
  generate|g [options] <schematic> [name] [path] Generate a Nest element.
  Schematics available on @nestjs/schematics collection:
  | name │ alias │ description │
  │ application │ application │ Generate a new application workspace │
  │ class │ cl │ Generate a new class │
  │ -configuration │ config │ Generate a CLI configuration file │
  │ controller │ co │ Generate a controller declaration │
  │ decorator │ d │ Generate a custom decorator │
  │ filter │ f │ Generate a filter declaration │
  │ gateway │ ga │ Generate a gateway declaration │
  │ guard │ gu │ Generate a guard declaration │
  │ interceptor │ itc │ Generate an interceptor declaration │
  │ interface │ itf │ Generate an interface │
  │ library │ lib │ Generate a new library within a monorepo │
  │ middleware │ mi │ Generate a middleware declaration │
  │ module │ mo │ Generate a module declaration │
  │ pipe │ pi │ Generate a pipe declaration │
  │ provider │ pr │ Generate a provider declaration │
  │ resolver │ r │ Generate a GraphQL resolver declaration │
  │ resource │ res │ Generate a new CRUD resource │
  │ service │ s │ Generate a service declaration

- Create a New Project  
   nest new nest-intro
  Choose npm or yarn as your package manager.
  - To enable TypeScript's stricter feature set, pass the --strict flag to the nest new command.
- Project Structure Overview
  scr
  main.ts: Entry point of the application.
  app.module.ts: Root module.
  app.controller.ts: Handles HTTP requests.
  app.service.ts: Contains business logic.

  app.controller.spec.ts: Unit tests for the controller.
  node_modules/: Project dependencies.
  package.json: Project metadata and scripts.
  tsconfig.json: TypeScript configuration.
  .eslintrc.js: ESLint configuration.
  .prettierrc: Prettier configuration.
  .gitignore: Specifies files to ignore in Git.

  ✍️ Example: Hello World API
  ✅ app.controller.ts

  ```TypeScript
  import { Controller, Get } from '@nestjs/common';
  @Controller()
  export class AppController {
    @Get()
    getHello(): string {
    return 'Hello NestJS!';
  }
  }
  ```

✅ app.service.ts

```TypeScript
import { Injectable } from '@nestjs/common';
@Injectable()
export class AppService {
  getHello(): string {
  return 'Hello from AppService!';
}
}
```

✅ main.ts

```TypeScript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
```

✅ Run the App
Shell
npm run start
Visit http://localhost:3000 — you should see "Hello NestJS!"
Notes:

- to make it throw an error instead disable the option abortOnError (e.g., NestFactory.create(AppModule, { abortOnError: false })).
- Platform: const app = await NestFactory.create<NestExpressApplication / NestFastifyApplication>(AppModule);
- npm run start -- -b swc To speed up the development process (x20 times faster builds), you can use the SWC builder by passing the -b swc flag to the start script, as follows
- npm run start:dev to watch for changes and automatically recompiling and reloading the server.
- $ npm run lint # Lint and autofix with eslint
- $ npm run format # Format with prettier

🧪 Challenge Task
Create a new route /greet/:name that returns a personalized greeting.
✅ Update app.controller.ts

```TypeScript
import { Controller, Get, Param } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('greet/:name')
  greet(@Param('name') name: string): string {
    return `Hello, ${name}!`;
  }
}
await app.listen(3000);
}
bootstrap();
```

- Nest Project Organization Best Practices
  One module per feature
  One folder per module
  Files should follow the same naming and capitalization scheme
  Global settings belong in main.ts
  Use environment variables for configuration
  Use DTOs for data validation and transfer
  Use services for business logic
  Use controllers for handling requests and responses

## Controler

- Introduction to Controllers
  Building APIs is complex without structure; this course teaches how to create well-structured endpoints in NestJS.
  You’ll learn to set up controllers and routing, handle requests/responses, and implement validation and DTOs.
  By the end, you’ll be able to build maintainable, efficient APIs using NestJS controllers and routing.

- Intro to Controllers
  Controllers in NestJS handle incoming API requests and send responses.
  Use the @Controller decorator to define a controller and optionally set a route prefix.
  Methods inside controllers are mapped to HTTP routes using decorators like @Get, @Post, etc.
  Controllers delegate business logic to services, keeping code modular.
  The Nest CLI can scaffold modules and controllers, automatically handling imports and file structure.
  Test files are generated by default but can be omitted with a flag.

- GET Routes and the Param Decorator
  Use @Get decorator to define GET routes; route prefix from @Controller applies to all handlers.
  Route handlers can accept parameters from the URL using the @Param decorator.
  @Param extracts values from the route and injects them into the handler method.
  Example: findAll returns all speakers; findOne returns a speaker by id.
  Test GET routes using a client (e.g., Rapid API, Postman) to verify correct responses.

- POST Route and the Body Decorator
  Use @Post decorator to define a route for creating resources.
  The @Body decorator injects the request body into a method parameter.
  TypeScript can define expected structure for the body (e.g., name, expertise).
  Test POST requests to ensure the API extracts and returns the correct data.

- PUT and DELETE Routes
  @Put decorator defines a route for updating resources; expects id from route and updated data from body.
  Use @Param for id and @Body for updated data; TypeScript defines optional fields.
  @Delete decorator defines a route for deleting resources; uses @Param to extract id.
  Typically, these routes call service methods, but initial examples return static data for testing.
- The HTTPStatus Decorator
  Use @HttpCode decorator to set custom HTTP status codes for responses (e.g., 204 No Content).
  NestJS provides HttpStatus constants for readability and error prevention.
  Setting status codes helps communicate the result of operations (e.g., successful deletion).

- The Query Decorator
  @Query decorator extracts query string parameters from requests.
  Example: scheduleDay parameter added to speakers; @Query('scheduleDay') injects its value.
  Use pipes (e.g., ParseIntPipe) to transform query parameters to correct types before method execution.
  Test GET requests with query parameters to verify correct extraction and transformation.

- DTOs and Validation
  Controllers should delegate business logic to services for maintainability.
  Services manage data (e.g., in-memory array for speakers) and provide CRUD methods.
  Inject services into controllers via constructor for single instance usage.
  Use ParseIntPipe to convert route parameters to numbers for type safety.
  Test all CRUD operations to ensure correct delegation and data management.

- Data Validation with Data Transfer Objects (DTOs)
  DTOs define the expected structure of incoming request data for validation.
  Create DTO classes (e.g., CreateSpeakerDTO) with properties and validation decorators (IsNotEmpty, IsString, IsEmail).
  Install class-validator and class-transformer for validation support.
  Set up a global ValidationPipe in main.ts to enforce validation across all routes.
  Invalid data is rejected with descriptive error messages, improving security and reliability.

- ValidationPipe and Whitelisting
  ValidationPipe can be configured with whitelist: true to strip out extra, unwanted fields from requests.
  Prevents processing of unexpected or malicious data by enforcing DTO structure.
  Test by sending requests with extra fields; only defined DTO properties are accepted.

- Generate a Resource with NestJS CLI
  Nest CLI can generate an entire resource (module, controller, service, DTOs, entities) with one command.
  Choose transport layer (e.g., REST API) and enable CRUD entry points for rapid development.
  Generated files are automatically imported and registered in the app.
  DTOs and entities are scaffolded for best practices and faster feature development.

# 📝 Summary

Nest applications follow a Model-View-
Controller pattern
Controllers handle HTTP requests
Services handle business logic
Models define the structure of data in code
Modules group Controllers, Services,
Models, and other files per feature

# Bounce

## Typescript

- https://www.typescriptlang.org/

## NodeJS

- https://nodejs.org/en/

## progressive

**progressive** : You can start simple and gradually adopt advanced features as your project grows — without rewriting your codebase.
A progressive framework is designed to:
Support incremental adoption —
You can begin with basic functionality (e.g., simple REST APIs) and later add things like authentication, microservices, or GraphQL without major architectural changes.
Be flexible in complexity —
It scales with your application — from small prototypes to enterprise-grade solutions.
Integrate modern patterns and tools —
It embraces best practices (like Dependency Injection, modular design, testing, TypeScript, etc.), but doesn’t force you to use them all from day one.
Encourage maintainability and modernization —
You can progressively refactor or extend your app as you learn and adopt new features or design patterns.
@Controller()
export class AppController {
@Get()
getHello() {
return 'Hello World!';
}
}
Later add modules for:
Authentication (@nestjs/passport)
Database (@nestjs/typeorm)
Microservices (@nestjs/microservices)
GraphQL (@nestjs/graphql)

All this without changing the initial codebase structure — that’s what makes NestJS progressive.

## “progressive” vs “opinionated” frameworks

“progressive” vs “opinionated” frameworks (e.g., NestJS vs Express)
Progressive vs. Opinionated vs. Unopinionated Frameworks
Concept Description Example Frameworks Pros Cons

### Progressive Framework

Designed to grow with you — start simple, adopt advanced features gradually. Uses best practices but doesn’t force them. NestJS, Vue.js, Angular
✅ Scales from small to enterprise
✅ Strong architecture & conventions
✅ Easy to add new capabilities over time
⚠️ Slight learning curve due to structure

### Opinionated Framework

Enforces a strict way to structure and build apps. You follow its rules and conventions. Angular, Ruby on Rails, Django
✅ Very productive once you learn it
✅ Strong consistency across teams
⚠️ Less flexible
⚠️ Harder to customize

### Unopinionated (Minimalist) Framework

Provides core features (like routing, middleware) but leaves structure, patterns, and tools to the developer. Express, Fastify, Flask
✅ High flexibility
✅ Lightweight and fast to start
⚠️ No clear structure
⚠️ Harder to maintain as app grows

## 🧩 Where NestJS Fits

Progressive + Opinionated Hybrid
NestJS starts unopinionated (you can use plain controllers and services),
but it encourages opinionated architecture (modules, providers, dependency injection).

You can build:
A simple REST API (like in Express)
Or a complex microservices system (with CQRS, GraphQL, event-driven messaging)
So you progressively adopt the opinionated parts when you need them — that’s why it’s both progressive and scalable.

## 💬 Quick Analogy

Think of Express as a “bare toolbelt” — you can build anything, but you must design your own plan.
Think of NestJS as a “modern workshop” — tools are organized, and you can start with simple tasks and expand into industrial-grade projects using the same workspace.

# Notes

- What is NestJS and why use it?
- Environment Setup
  - Install Node.js, npm/yarn, and Nest CLI.
  - Optional VS Code Extensions
    - https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-nestjs-pack
- Architecture overview (Modules, Controllers, Providers)
  - Setting up a NestJS project with CLI
  - Running the first app
  - Create first Nest project: nest new project-name.
  - Assignment: Scaffold a new NestJS project, explore folder structure, implement a simple “hello” endpoint
  - Understand project structure (modules, controllers, services).
  - Run and explore the app with Swagger or other tools.
- Config: Different Ways to Use ConfigModule
  In AppModule with forRoot and static env references
  In AppModule with forRoot and dynamic env references
  Per-feature-module with forFeature
- Assignment:
  - Build a simple “Hello World” REST endpoint.
- Bounce:
  - Typescript basics (interfaces, types, classes, decorators)
  - Node.js basics (modules, npm, async/await)
  - Rest API basics (HTTP methods, status codes, JSON)
  - Git basics (init, commit, push, branches)

Hands-on: Create a simple "Hello World" REST API.

Day02 Modules: Controllers, Providers, Routing and Dependency Injection

# 🎯 Goals: Modules and Dependency Injection

Understand how NestJS uses modules to organize code.
Learn how Dependency Injection (DI) works in NestJS.
Create custom modules and services.
Inject services into controllers.

## 🧠 Concepts

## ✅ What is a Module?

A module in NestJS is a class annotated with @Module() decorator. It groups related components like controllers and providers (services).

## ✅ What is Dependency Injection?

DI is a design pattern where a class receives its dependencies from external sources rather than creating them itself. NestJS uses DI to manage service instances efficiently.

## 🛠️ Hands-On: Creating a UsersModule

1. Generate a Module and Service

```Shell
nest generate module users
nest generate service users
nest generate controller users
```

This creates:

users.module.ts
users.service.ts
users.controller.ts

## ✍️ Code Walkthrough

- Ref: https://github.com/DiegoAWS/nest-test/tree/88bc508298f3ba9398fc860c7de19b34519a7b8c
  ✅ users.module.ts

```TypeScript
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
```

✅ users.service.ts

```TypeScript
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = ['Alice', 'Bob', 'Charlie'];

  findAll(): string[] {
    return this.users;
  }

  findOne(id: number): string {
    return this.users[id];
  }
}
```

✅ users.controller.ts

```TypeScript
import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers(): string[] {
    return this.usersService.findAll();
   @Get(':id')
  getUser(@Param('id') id: string): string {
    return this.usersService.findOne(+id);
  }
}
```

Hints:

- Subdomain routing, @Controller({ host: 'admin.example.com' })
- Routes with parameters should be declared after any static paths. This prevents the parameterized paths from intercepting traffic destined for the static paths.
- use standard or library specific Req and Res objects @Res() or @Next()
  - install the @types/express package
  - response.status(200).send()
  - @HttpCode(...) Import HttpCode from the @nestjs/common
  - findAll(@Res(passthrough: true) response) by injecting the response object to only set cookies/headers but still leave the rest to the framework
  - findAll(@Req() request: Request)

✅ Register the Module in app.module.ts

```TypeScript
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
})
export class AppModule {}
```

🚀 Run and Test
Start the server and Test endpoints:

```Shell
npm run start

GET /users → returns all users
GET /users/1 → returns "Bob"
```

## 🧪 Challenge Task

Add a method to create a new user using POST /users.
✅ Update users.service.ts

```TypeScript
addUser(name: string): string {
  this.users.push(name);
  return `User ${name} added.`;
}
```

✅ Update users.controller.ts

```TypeScript
import { Body, Post } from '@nestjs/common';

@Post()
addUser(@Body('name') name: string): string {
  return this.usersService.addUser(name);
}
```

Hint: ValidationPipe can filter out properties that should not be received by the method handler.
Test with:

```Shell
curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name": "Diana"}'
```

## Hands-on: ConfigModule for Environment Variables

- Install Config Module
  npm install @nestjs/config
- Basic Config module for environment variables.

# bonus:

## Provided Decorators

provided decorators and the corresponding platform-specific objects they represent
@Request(), @Req() req
@Response(), @Res()\* res , ex.
@Post()
create(@Res() res: Response) {
res.status(HttpStatus.CREATED).send();
}

@Get()
findAll(@Res() res: Response) {
res.status(HttpStatus.OK).json([]);
}
@Next() next
@Session() req.session
@Param(key?: string) req.params / req.params[key] , Import Param from the @nestjs/common package, ex.
findOne(@Param('id') id: string): string {
return `This action returns a #${id} cat`;}
@Body(key?: string) req.body / req.body[key]
@Query(key?: string) req.query / req.query[key], ex.
GET /cats?age=2&breed=Persian
@Get()
async findAll(@Query('age') age: number, @Query('breed') breed: string) {
return `This action returns all cats filtered by age: ${age} and breed: ${breed}`;
}
For complex query like
?filter[where][name]=John&filter[where][age]=30
?item[]=1&item[]=2
const app = await NestFactory.create<NestExpressApplication>(AppModule);
app.set('query parser', 'extended');
@Headers(name?: string) req.headers / req.headers[name] ex. @Header('Cache-Control', 'no-store')
@Ip() req.ip
@HostParam() req.hosts, @Controller({ host: ':account.example.com' }), getInfo(@HostParam('account') account: string)
@Redirect res.redirect() , HttpRedirectResponse interface (from @nestjs/common), ex. @Redirect('https://nestjs.com', 301), default status code is 302

## Async Providers

@Get()
async findAll(): Promise<any[]> {
return [];
}
OR using https://rxjs-dev.firebaseapp.com/guide/observable
@Get()
findAll(): Observable<any[]> {
return of([]);
}

# DI

- IoC DI https://en.wikipedia.org/wiki/Inversion_of_control
- dependency graph
  - https://www.npmjs.com/package/madge
  - vs extension https://marketplace.visualstudio.com/items?itemName=sz-p.dependencygraph
  - NEST_DEBUG environment variable and get extra dependency resolution logs during startup
- Typescript:
  - https://www.typescriptlang.org/docs/handbook/type-compatibility.html
  - https://www.typescriptlang.org/docs/handbook/enums.html
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

# Notes

- Modules: Understanding Modules
  - Creating and importing custom modules
- Routing: Deep dive into Controllers and routing: Controllers and Routing
  - Creating controllers
  - Route handling (GET, POST, PUT, DELETE)
  - Route parameters and query strings
  - Hands-on: Build CRUD routes for a UserController.
  - Assignment: - Build a dummy CRUD service - Implement route handlers for different HTTP methods. - add HttpStatus codes.
- Providers: Create Providers and learn dependency injection.
- Dependency Injection: NestJS Dependency Injection system
  - Hands-on: Create a UsersModule and inject a service.
- Use @Injectable(), @Controller(), @Get(), @Post() decorators.
- Config module for environment variables.

  - Assignment:
    - Build a basic CRUD service for Users in memory.
    - Build basic CRUD endpoints (e.g. cats) using controller + service
      -TODO Controllers and Routing (PS)

- Lab: Task Management Application (UD)
  - https://www.udemy.com/course/nestjs-zero-to-hero/?utm_source=adwords&utm_medium=udemyads&utm_campaign=Search_DSA_Beta_Prof_la.EN_cc.ROW-English_Subs&campaigntype=Search&portfolio=ROW-English&language=EN&product=Subs&test=&audience=DSA&topic=&priority=Beta&utm_content=deal4584&utm_term=_._ag_185568238764_._ad_769543047744_._kw__._de_c_._dm__._pl__._ti_dsa-2436670172859_._li_9068207_._pd__._&matchtype=&gad_source=1&gad_campaignid=22894903173&gbraid=0AAAAADROdO22JockwysVA4VV355Ki29ju&gclid=Cj0KCQjw0Y3HBhCxARIsAN7931X9YTWJJ3H2NeCDjlQXRvP9Mrl6g3F6x_XfAFt2f7NPCvyDofQeq8YaAmG0EALw_wcB&persist_locale=&locale=en_US&couponCode=PMNVD2525
  - Project Overview
    Creating our project via the NestJS CLI , NestJS Project Structure, Introduction to NestJS Modules
    More Valuable Content, Creating a Tasks Module, Introduction to NestJS Controllers
    Creating at Tasks Controller, Introduction to NestJS Providers and Services
    Creating a Tasks Service, Feature: Getting All Tasks
    Installing Postman, Creating a Postman Collection
    Defining a Task Model, Feature: Creating a Task (Part 1 - Controller), Feature: Creating a Task (Part 2 - Service)
    Intro to Data Transfer Objects (DTO), Implementing CreateTaskDto
    Feature: Getting a Task by ID, Challenge: Deleting a Task, Solution: Deleting a Task
    Challenge: Update Task Status, Solution: Update Task Status,
    Feature: Searching and Filtering
    Summary Quiz, questions, Section Code

# topics

## About NestJS

NestJS is a sophisticated Node.js framework that brings structure and scalability to server-side applications through its TypeScript-based architecture. This program teaches you to build efficient backend services using NestJS's modular approach, which incorporates principles from Object-Oriented Programming and Functional Programming.

You'll learn to implement robust APIs, handle database operations, and manage application security using NestJS's powerful features. The program covers essential concepts including dependency injection, middleware implementation, and microservices architecture, preparing you to build maintainable and scalable server-side applications.

## NestJS Fundamentals:

- Get up to speed with NestJS fast. Master the building blocks and essentials concepts behind creating your own enterprise-grade applications.
- Prepare for an in-depth guided course & walk-through of all the fundamentals of a NestJS application from the Creator Kamil Mysliwiec himself, and Mark Pieszak (Core Team Member).
  Step-by-step lesson progression, code everything alongside us!
  Featuring 80 videos (with subtitles) and over 5 hours of content
  Build a real-world REST API application with NestJS
  Learn and use all the most important NestJS building blocks
  Learn how to interact with both SQL & NoSQL databases
  Official NestJS Certificate of Completion
