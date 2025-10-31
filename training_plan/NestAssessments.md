# question
complete assessment question set for your NestJS 10-Day Course, aligned with the measurable learning outcomes.
Each day includes about 5 multiple-choice questions (MCQs) with four options (A–D) each with Correct Answers and Explanations., designed to test comprehension and applied understanding. Difficulty ranges from fundamental to applied, covering practical concepts, syntax, and design reasoning. 
These questions go deeper into architecture, implementation details, decorators, lifecycle, dependency injection scopes, and real-world scenarios — the kind of knowledge that distinguishes an intermediate from an advanced NestJS developer.

# Assessment 1 (gpt)
📅 WEEK 1 — Foundations & Core Concepts
## 🧩 Day 1: Introduction to NestJS & Environment Setup

1. What is the main architectural pattern used by NestJS?
A. Model-View-Controller (MVC)
B. Event Driven Architecture
C. Modular Architecture ✅
D. Service-Oriented Architecture

Explanation: NestJS is built around a modular architecture that promotes code reusability and scalability.

2. Which CLI command is used to create a new NestJS project?
A. nest init my-app
B. nest new my-app ✅
C. npm start my-app
D. node create my-app

Explanation: nest new <project-name> creates a complete NestJS project scaffold using the Nest CLI.

3. What is the default HTTP server framework used internally by NestJS?
A. Koa
B. Express ✅
C. Hapi
D. Fastify

Explanation: NestJS uses Express by default but can be configured to use Fastify for better performance.

4. Which file acts as the entry point of a NestJS application?
A. main.ts ✅
B. app.controller.ts
C. app.module.ts
D. server.ts

Explanation: main.ts bootstraps the Nest application using NestFactory.create(AppModule).

## ⚙️ Day 2: Controllers, Providers, Routing, and Dependency Injection

1. What decorator is used to define a controller in NestJS?
C. @Controller() ✅

Defines a class as a controller handling incoming HTTP requests.

2. Which component is primarily responsible for business logic?
B. Provider (Service) ✅

Services encapsulate business logic, which controllers then consume.

3. What is the main purpose of Dependency Injection in NestJS?
C. Simplify testing and decouple components ✅

DI improves maintainability by reducing dependencies between classes.

4. What decorator is used to define a GET endpoint?
C. @Get() ✅

Maps HTTP GET requests to a specific route handler.

## 🧱 Day 3: Modules and Middleware

1. What decorator is used to define a NestJS module?
A. @Module() ✅

Declares a module containing controllers and providers.

2. What is the main function of Middleware in NestJS?
C. Execute logic before a request reaches a route handler ✅

Middleware sits between the request and route handling.

3. Which method is used to apply Middleware globally?
B. app.use() ✅

Called in main.ts to register Middleware across the app.

4. Which file commonly registers feature modules?
C. app.module.ts ✅

The root module imports all feature modules.

## 🧰 Day 4: Exception Filters, Pipes, and Validation

1. What is the role of an Exception Filter?
B. Catch and handle thrown exceptions ✅

Filters provide consistent error responses.

2. Which built-in Pipe is used to validate incoming request data?
B. ValidationPipe ✅

Automatically validates DTOs using class-validator.

3. Which package provides decorators like @IsString()?
B. class-validator ✅

Provides validation decorators for DTOs.

4. Where can you apply a custom Exception Filter?
C. Globally or per route ✅

Filters can be used at method, controller, or global level.

## 🌐 Day 7: Interceptors, Logging, and Configuration

1. What can Interceptors be used for?
A. Request transformation and response mapping ✅

Interceptors can transform data and log request durations.

2. Which NestJS package helps manage environment variables?
B. @nestjs/config ✅

Loads and manages .env files within NestJS.

3. What method is commonly used for logging in NestJS?
A. Logger.log() ✅

The built-in Logger class provides structured logging.

4. What file is typically used to define environment-specific variables?
B. .env ✅

Stores key–value pairs for environment configuration.

## 🧑‍💻 Day 5: Database Integration

1. Which ORM is officially supported by NestJS?
B. TypeORM ✅

TypeORM has first-class support with NestJS integrations.

2. What decorator is used to mark a TypeORM entity class?
C. @Entity() ✅

Defines a class as a database entity.

3. Which file commonly holds database connection settings?
A. ormconfig.json or .env ✅

Stores connection parameters such as host, username, and password.

4. What method in a Repository is used to fetch all records?
C. find() ✅

Retrieves all records that match given criteria (or all if none).

📅 WEEK 2 — Advanced Topics & Project Development

## 🔐 Day 6: Authentication & Authorization

1. Which NestJS module provides Passport.js integration?
A. @nestjs/passport ✅

Provides decorators and guards for Passport strategies.

2. What is the purpose of a Guard in NestJS?
C. Protect routes based on conditions ✅

Guards determine whether a request is allowed to proceed.

3. What is typically used to generate and verify JWTs?
A. jsonwebtoken ✅

A popular package for JWT token management.

4. What decorator restricts access to authenticated users?
C. @UseGuards(AuthGuard()) ✅

Applies an authentication guard to routes or controllers.

## 📡 Day 8: Microservices and Event-Driven Architecture

1. Which NestJS module supports microservices?
B. @nestjs/microservices ✅

Provides decorators and transport strategies for microservices.

2. Which transport layer can be used for message-based communication?
C. TCP ✅

TCP is one of several supported transport options.

3. What decorator is used to handle messages from a microservice?
B. @MessagePattern() ✅

Listens to messages on a specific pattern or channel.

4. What advantage does an event-driven architecture provide?
C. Decoupled, asynchronous communication ✅

Services can interact asynchronously without direct coupling.

## 🧪 Day 9: Testing and Documentation

1. What testing framework is bundled with NestJS by default?
B. Jest ✅

Jest is preconfigured for unit and integration testing.

2. What function creates a testing module in NestJS tests?
B. Test.createTestingModule() ✅

Initializes a test environment for Nest components.

3. What library is used to generate Swagger documentation?
A. @nestjs/swagger ✅

Provides decorators and tools to generate OpenAPI docs.

4. What command runs all Jest tests?
B. npm run test ✅

Executes the test suite via the npm script.

## 🚀 Day 10: CI/CD, Deployment, and Best Practices

1. What file defines Docker image build instructions?
B. Dockerfile ✅

Contains steps to build a Docker image for your app.

2. Which CI/CD service integrates directly with GitHub repositories?
B. GitHub Actions ✅

Built-in CI/CD for GitHub repositories.

3. What command builds and runs a Docker container?
C. docker run ✅

Executes an image to create a running container.

4. What is a key NestJS best practice for scalability?
C. Use modular architecture and providers ✅

Modular design ensures scalability, reusability, and testability.

# Assessment 2 diffcult (gpt) 
Below is a more challenging version of your NestJS 10-Day Course Assessment.
These questions go deeper into architecture, implementation details, decorators, lifecycle, dependency injection scopes, and real-world scenarios — the kind of knowledge that distinguishes an intermediate from an advanced NestJS developer.

Each day includes 3–5 higher-difficulty multiple-choice questions with answers and concise explanations.

Each day includes 3–5 higher-difficulty multiple-choice questions with answers and concise explanations.
📅 WEEK 1 — Foundations & Core Concepts (Advanced Edition)
## 🧩 Day 1: Introduction to NestJS & Environment Setup

1. What is the main purpose of the AppModule in a NestJS application?
A. To define the root controller
B. To handle dependency injection directly
C. To serve as the root container that organizes modules, controllers, and providers ✅
D. To start the HTTP server

Explanation: AppModule bootstraps all other modules and establishes the dependency injection graph.

2. What happens when you execute NestFactory.create(AppModule) in main.ts?
A. It compiles the TypeScript codebase
B. It instantiates the root application context and dependency injection container ✅
C. It initializes all controllers only
D. It builds the frontend bundle

Explanation: NestFactory.create() sets up the application context and resolves providers via DI.

3. Which of the following best describes the role of metadata in NestJS?
A. It is used to generate runtime reflection for decorators. ✅
B. It defines dependency injection scopes.
C. It determines TypeORM schema structure.
D. It controls microservice communication.

Explanation: NestJS uses TypeScript’s reflection capabilities and metadata for decorators like @Controller() and @Injectable().

## ⚙️ Day 2: Controllers, Providers, Routing, and Dependency Injection

1. In NestJS, what happens when multiple providers share the same token?
A. The last declared provider overrides the previous one. ✅
B. Nest throws an error.
C. All providers are merged automatically.
D. The DI container randomly picks one.

Explanation: NestJS replaces providers that use the same token; later declarations override earlier ones.

2. What is the purpose of the @Inject() decorator?
A. To declare a service as injectable.
B. To manually inject a provider when automatic DI is not possible. ✅
C. To create a singleton instance of a service.
D. To make a class globally available.

Explanation: @Inject() allows explicit injection when tokens are not inferred from type metadata.

3. How does NestJS resolve circular dependencies between providers?
A. It throws a runtime error.
B. It uses forwardRef() to defer provider resolution. ✅
C. It automatically resolves them using lazy loading.
D. It requires manual imports of modules.

Explanation: forwardRef() allows circular dependencies to be deferred until both providers are initialized.

## 🧱 Day 3: Modules and Middleware

1. Which lifecycle hook allows you to perform initialization logic once the module’s dependencies are resolved?
A. onInit()
B. onModuleInit() ✅
C. afterBootstrap()
D. onReady()

Explanation: Classes implementing OnModuleInit can perform initialization once dependencies are ready.

2. When you define a middleware, which signature must it implement?
A. (req, res)
B. (req, res, next) ✅
C. (req, res, next, err)
D. (req, res, done)

Explanation: Nest middleware must follow the Express signature (req, res, next) to be compatible.

3. What is the best way to share a middleware across multiple modules?
A. Import it in each module’s controller
B. Define it globally in main.ts using app.use() ✅
C. Use the @Global() decorator
D. Register it as a provider

Explanation: app.use() registers middleware across the entire application.

## 🧰 Day 4: Exception Filters, Pipes, and Validation

1. What interface must a custom Exception Filter implement?
A. NestFilter
B. ExceptionFilter ✅
C. HttpErrorHandler
D. CatchFilter

Explanation: A custom filter must implement ExceptionFilter and define the catch() method.

2. How can you apply a Pipe globally?
A. Inside the main.ts file using app.usePipes() ✅
B. By adding @UsePipes() to every controller
C. By registering it in the AppModule
D. By using @Global() decorator

Explanation: app.useGlobalPipes() applies Pipes globally to all routes.

3. What happens when validation fails in a global ValidationPipe?
A. The request is silently ignored.
B. A BadRequestException is thrown with validation errors. ✅
C. The request passes but logs a warning.
D. The server restarts.

Explanation: By default, ValidationPipe throws a BadRequestException.


## 🌐 Day 7: Interceptors, Logging, and Configuration

1. What method in an Interceptor allows you to modify a response?
A. intercept() ✅
B. transform()
C. beforeSend()
D. mapResponse()

Explanation: intercept() uses RxJS map() to transform responses.

2. When using @nestjs/config, how can you make configuration globally available?
A. Export it in AppModule
B. Use ConfigModule.forRoot({ isGlobal: true }) ✅
C. Import it in each feature module
D. Add @Global() manually

Explanation: Setting isGlobal: true registers the module globally.

3. Which logger method logs warning messages in NestJS?
A. Logger.log()
B. Logger.error()
C. Logger.warn() ✅
D. Logger.notice()

Explanation: Logger.warn() logs non-fatal warnings.

## 🧑‍💻 Day 5: Database Integration

1. What is the default scope of an injected repository in TypeORM with NestJS?
A. Request-scoped
B. Transient-scoped
C. Singleton-scoped ✅
D. Global-scoped

Explanation: Repositories are singletons by default, sharing the same connection instance.

2. How can you handle database transactions using TypeORM in NestJS?
A. Using the @Transactional() decorator
B. Using connection.transaction(async manager => { ... }) ✅
C. Using the TransactionService class
D. Using await repository.beginTransaction()

Explanation: TypeORM provides the transaction() method for transactional queries.

3. When using Prisma, what is the equivalent of a TypeORM entity?
A. Model ✅
B. Schema
C. Provider
D. Resolver

Explanation: In Prisma, database tables are defined as model blocks in the schema.

📅 WEEK 2 — Advanced Topics & Project Development (Advanced Edition)

## 🔐 Day 6: Authentication & Authorization

1. What is the default strategy used by Passport for NestJS JWT authentication?
A. LocalStrategy
B. JwtStrategy ✅
C. TokenStrategy
D. SessionStrategy

Explanation: JWT authentication in NestJS is implemented via a custom JwtStrategy.

2. What method in AuthGuard determines if a request can proceed?
A. validate()
B. canActivate() ✅
C. authorize()
D. intercept()

Explanation: canActivate() runs logic to determine if the request passes authentication.

3. How do you restrict certain routes to specific user roles?
A. By using custom Pipes
B. By creating a custom Guard that checks user.role in the request context ✅
C. By applying multiple controllers
D. By configuring module imports

Explanation: Custom Guards allow granular access control logic.

## 📡 Day 8: Microservices and Event-Driven Architecture

1. How does NestJS ensure type safety between microservices?
A. By using decorators
B. By leveraging TypeScript interfaces for message contracts ✅
C. By using JSON schemas
D. By using dynamic routing

Explanation: Shared interfaces help ensure consistent data types between microservices.

2. What is the role of the ClientProxy in microservice communication?
A. It defines entity schemas.
B. It acts as a client interface to send messages to another service. ✅
C. It intercepts HTTP requests.
D. It starts the microservice.

Explanation: ClientProxy abstracts message sending to transport layers.

3. How can you create an event emitter-based communication within a single Nest app?
A. By importing EventEmitterModule.forRoot() ✅
B. By creating a microservice
C. By using WebSockets only
D. By calling app.emit()

Explanation: EventEmitterModule provides local, asynchronous event-driven communication.

## 🧪 Day 9: Testing and Documentation

1. Which NestJS utility helps inject dependencies in unit tests?
A. TestBed
B. TestingModule ✅
C. AppTest
D. MockContainer

Explanation: TestingModule provides dependency resolution in testing.

2. What decorator adds metadata for Swagger documentation on controllers?
A. @Docs()
B. @ApiTags() ✅
C. @SwaggerController()
D. @ApiGroup()

Explanation: @ApiTags() groups endpoints under the same section in Swagger UI.

3. How do you mock a provider dependency in Jest tests?
A. Using jest.spy()
B. Using .overrideProvider().useValue(mockObject) ✅
C. Using @MockProvider()
D. Using dependency injection tokens manually

Explanation: .overrideProvider() replaces the provider with a mock implementation in the test context.

## 🚀 Day 10: CI/CD, Deployment, and Best Practices

1. How can you pass environment variables securely in a CI/CD pipeline?
A. Hard-code them in YAML
B. Store them in .env committed to Git
C. Use encrypted environment variables or secrets in the CI platform ✅
D. Pass them via query strings

Explanation: Secrets should be encrypted and never hard-coded or committed.

2. Which NestJS feature makes applications more testable and maintainable at scale?
A. Global middleware
B. Dependency Injection and modular design ✅
C. Hard-coded routes
D. Decorator inheritance

Explanation: DI and modularization enable testability and scalability.

3. When containerizing a NestJS app, which command should your Dockerfile run last?
A. npm install
B. npm build
C. npm run start:prod ✅
D. nest build

Explanation: start:prod runs the compiled JavaScript output in production mode.

# Assessment 3 (gpt)
ere’s a complete 10-day NestJS assessment question set that aligns directly with your measurable learning outcomes.
Each day includes 3–5 multiple-choice questions (MCQs) with four answer options (A–D) and a correct answer clearly marked.
Difficulty ranges from fundamental to applied, covering practical concepts, syntax, and design reasoning.

📅 WEEK 1 — Foundations & Core Concepts
## 🧩 Day 1 — Introduction to NestJS & Environment Setup

1️⃣ Which statement best describes NestJS?
A. A frontend framework for SPAs
B. A progressive Node.js framework for building scalable server-side apps ✅
C. A CLI tool for TypeScript projects
D. A testing framework

2️⃣ What is the primary architectural pattern followed by NestJS?
A. MVVM
B. Functional Programming
C. Modular / Layered Architecture ✅
D. Event Loop Pattern

3️⃣ Which CLI command creates a new NestJS project?
A. nest init <name>
B. nest new <name> ✅
C. npm start <name>
D. nest create <name>

4️⃣ Which file is the main entry point of a NestJS app?
A. main.ts ✅
B. app.module.ts
C. server.ts
D. app.controller.ts

## ⚙️ Day 2 — Controllers, Providers, Routing & Dependency Injection

1️⃣ What decorator defines a class as a controller?
A. @Module()
B. @Controller() ✅
C. @Injectable()
D. @Provider()

2️⃣ Which component contains most of the business logic?
A. Controller
B. Service (Provider) ✅
C. Middleware
D. Interceptor

3️⃣ What decorator handles GET requests?
A. @Get() ✅
B. @Fetch()
C. @HttpGet()
D. @Route()

4️⃣ Why is dependency injection important in NestJS?
A. It improves CSS styling
B. It enables testability & decoupled code ✅
C. It increases coupling between layers
D. It replaces TypeORM

## 🧱 Day 3 — Modules and Middleware

1️⃣ What decorator registers a new module?
A. @Module() ✅
B. @NestModule()
C. @Injectable()
D. @Component()

2️⃣ What is the primary role of middleware?
A. Error handling
B. Logic executed before request reaches a route ✅
C. Rendering templates
D. Database migrations

3️⃣ Which method applies middleware globally?
A. useGlobalMiddleware()
B. app.use() ✅
C. app.middleware()
D. configure()

4️⃣ Which file usually imports feature modules?
A. app.module.ts ✅
B. main.ts
C. index.ts
D. nest.config.ts

## 🧰 Day 4 — Exception Filters, Pipes & Validation

1️⃣ Which interface must a custom exception filter implement?
A. ExceptionFilter ✅
B. NestFilter
C. ErrorCatcher
D. ErrorFilter

2️⃣ Which built-in pipe performs DTO validation?
A. TransformPipe
B. ValidationPipe ✅
C. ParsePipe
D. CheckPipe

3️⃣ Which library provides decorators like @IsString() or @IsNotEmpty()?
A. express-validator
B. class-validator ✅
C. @nestjs/validation
D. type-checker

4️⃣ What is the default behavior when ValidationPipe fails?
A. Silently ignore
B. Restart the server
C. Throw BadRequestException ✅
D. Return HTTP 500

## 🌐 Day 7 — Interceptors, Logging & Configuration

1️⃣ Which method defines an interceptor?
A. intercept() ✅
B. before()
C. apply()
D. map()

2️⃣ What can interceptors do?
A. Connect databases
B. Transform requests / responses and add cross-cutting logic ✅
C. Handle errors only
D. Serve static files

3️⃣ Which package manages environment variables?
A. nest-env
B. @nestjs/config ✅
C. dotenv-nest
D. @nestjs/env

4️⃣ Which method logs warnings?
A. Logger.error()
B. Logger.log()
C. Logger.warn() ✅
D. Logger.debug()

## 🧑‍💻 Day 5 — Database Integration

1️⃣ Which ORM is natively supported by NestJS?
A. TypeORM ✅
B. Sequelize
C. Prisma only
D. Mongoose only

2️⃣ What decorator identifies a database entity?
A. @Entity() ✅
B. @Model()
C. @Schema()
D. @Collection()

3️⃣ Where are connection settings commonly defined?
A. database.ts
B. config.json
C. ormconfig.json or .env ✅
D. schema.ts

4️⃣ Which repository method retrieves all records?
A. getAll()
B. find() ✅
C. select()
D. fetch()

📅 WEEK 2 — Advanced Topics & Project Development

## 🔐 Day 6 — Authentication & Authorization

1️⃣ Which NestJS package integrates Passport strategies?
A. @nestjs/passport ✅
B. @nestjs/auth
C. passport-nest
D. @nestjs/jwt

2️⃣ What function in a Guard decides access?
A. authorize()
B. canActivate() ✅
C. validate()
D. checkAccess()

3️⃣ Which package is used for signing & verifying JWTs?
A. jsonwebtoken ✅
B. bcrypt
C. jwt-passport
D. auth-guard

4️⃣ How do you restrict routes to authenticated users?
A. @Protected()
B. @UseGuards(AuthGuard('jwt')) ✅
C. @Private()
D. @Authorize()

## 📡 Day 8 — Microservices & Event-Driven Architecture

1️⃣ Which module enables microservice support?
A. @nestjs/microservices ✅
B. @nestjs/event
C. @nestjs/async
D. @nestjs/kafka

2️⃣ Which decorator handles incoming messages in a microservice?
A. @Handle()
B. @MessagePattern() ✅
C. @EventHandler()
D. @Subscribe()

3️⃣ What is an advantage of event-driven design?
A. Strong coupling
B. Decoupled, asynchronous communication between services ✅
C. Faster synchronous calls
D. Simpler single-thread debugging

4️⃣ What class sends messages from one service to another?
A. MessageClient
B. ClientProxy ✅
C. AppEmitter
D. BrokerService

## 🧪 Day 9 — Testing & Documentation

1️⃣ Which test framework ships by default?
A. Jest ✅
B. Mocha
C. Ava
D. Jasmine

2️⃣ How do you create a testing module?
A. TestingModule.create()
B. Test.createTestingModule() ✅
C. NestFactory.createTest()
D. TestModule.init()

3️⃣ Which library generates Swagger docs?
A. @nestjs/swagger ✅
B. openapi-nest
C. swagger-ui-express
D. swagger-typescript

4️⃣ What decorator groups endpoints in Swagger UI?
A. @ApiGroup()
B. @ApiTags() ✅
C. @ApiCategory()
D. @ApiSection()

## 🚀 Day 10 — CI/CD, Deployment & Best Practices

1️⃣ Which file contains Docker image build steps?
A. Dockerfile ✅
B. docker.json
C. compose.yml
D. DockerConfig

2️⃣ Which CI/CD system is natively integrated with GitHub?
A. GitHub Actions ✅
B. Jenkins
C. GitLab CI
D. CircleCI

3️⃣ Which command runs a container from an image?
A. docker build
B. docker run ✅
C. docker exec
D. docker up

4️⃣ Which NestJS practice enhances scalability & maintainability?
A. Using one large module
B. Disabling DI
C. Implementing modular architecture with providers and dependency injection ✅
D. Hard-coding configurations

✅ This full 10-day assessment covers conceptual understanding, syntax, and applied reasoning across the full NestJS learning path.

# Assement 4 (copilot)
the Day 1 assessment set for your NestJS 10-Day Course, aligned with the learning outcomes for:
## 🧩 Day 1: Introduction to NestJS & Environment Setup

Question 1: What is the primary architectural pattern used by NestJS?
A. Model-View-Controller (MVC)
B. Event-Driven Architecture
C. Microkernel Architecture
D. Layered Architecture
✅ Correct Answer: A. Model-View-Controller (MVC)
🧠 Explanation: NestJS is heavily inspired by Angular and follows the MVC pattern, organizing code into controllers, services, and modules.

Question 2: Which command is used to create a new NestJS project using the CLI?
A. nest init my-app
B. nest create my-app
C. nest new my-app
D. npm init nest my-app
✅ Correct Answer: C. nest new my-app
🧠 Explanation: The official NestJS CLI uses nest new <project-name> to scaffold a new application.

Question 3: What is the purpose of the main.ts file in a NestJS project?
A. It defines the database connection
B. It contains the root module
C. It bootstraps the application
D. It handles routing logic
✅ Correct Answer: C. It bootstraps the application
🧠 Explanation: main.ts is the entry point where the Nest application is created and started using NestFactory.

Question 4: Which of the following best describes the role of AppModule?
A. It handles HTTP requests
B. It defines the root module and imports other modules
C. It manages database migrations
D. It contains middleware logic
✅ Correct Answer: B. It defines the root module and imports other modules
🧠 Explanation: AppModule is the root module where other feature modules are imported and configured.

Question 5: What is the default HTTP server used by NestJS under the hood?
A. Express
B. Fastify
C. Koa
D. Hapi
✅ Correct Answer: A. Express
🧠 Explanation: By default, NestJS uses Express as the underlying HTTP platform, though it also supports Fastify.

📅 WEEK 1 — Foundations & Core Concepts

## ⚙️ Day 2: Controllers, Providers, Routing, and Dependency Injection
Q1: What decorator is used to define a controller in NestJS?
A. @Service()
B. @Injectable()
C. @Controller()
D. @Module()
✅ Answer: C
🧠 Explanation: @Controller() marks a class as a controller to handle incoming requests.

Q2: What is the purpose of the @Injectable() decorator?
A. To define a route
B. To register a service for dependency injection
C. To create a module
D. To define a middleware
✅ Answer: B
🧠 Explanation: @Injectable() makes a class available for NestJS's dependency injection system.

Q3: Which method decorator is used to handle GET requests?
A. @Post()
B. @Get()
C. @Put()
D. @Request()
✅ Answer: B
🧠 Explanation: @Get() maps HTTP GET requests to a method in a controller.

Q4: What is the default scope of a provider in NestJS?
A. Singleton
B. Transient
C. Request
D. Scoped
✅ Answer: A
🧠 Explanation: By default, providers are singletons and shared across the application.

Q5: What is the correct way to inject a service into a controller?
A. Using @Inject() in the method
B. Using @Injectable() in the controller
C. Using constructor injection
D. Using @Provide()
✅ Answer: C
🧠 Explanation: NestJS uses constructor-based dependency injection.

## 🧱 Day 3: Modules and Middleware
Q1: What is the purpose of a module in NestJS?
A. To define routes
B. To group related components
C. To handle HTTP requests
D. To manage database connections
✅ Answer: B
🧠 Explanation: Modules group related controllers, providers, and services.

Q2: Which decorator is used to define a module?
A. @Module()
B. @Injectable()
C. @Controller()
D. @Component()
✅ Answer: A
🧠 Explanation: @Module() is used to define a module and its metadata.

Q3: Middleware in NestJS is executed:
A. After the controller
B. Before the route handler
C. Only on POST requests
D. Only on GET requests
✅ Answer: B
🧠 Explanation: Middleware runs before the route handler and can modify the request or response.

Q4: How do you apply middleware to a specific route?
A. Using @UseMiddleware()
B. Using @Middleware()
C. By configuring it in the module with forRoutes()
D. By importing it in the controller
✅ Answer: C
🧠 Explanation: Middleware is applied using configure() in the module with forRoutes().

Q5: Which interface must a middleware class implement?
A. NestMiddleware
B. MiddlewareInterface
C. IMiddleware
D. RequestHandler
✅ Answer: A
🧠 Explanation: Middleware classes must implement the NestMiddleware interface.


## Day 3: Modules and Middleware

1. What is the purpose of a module in NestJS?
   A. To handle HTTP requests
   B. To group related components
   C. To define database schemas
   D. To manage routing
   ✅ Correct Answer: B
   🧠 Explanation: Modules group related controllers and providers into cohesive blocks.

2. Which decorator is used to define a module?
   A. @Module()
   B. @Injectable()
   C. @Controller()
   D. @Service()
   ✅ Correct Answer: A
   🧠 Explanation: @Module() is used to define a module in NestJS.

3. How is middleware applied in NestJS?
   A. Using @Middleware() decorator
   B. By importing it in AppModule
   C. By implementing NestMiddleware and applying in configure()
   D. By adding it to controller
   ✅ Correct Answer: C
   🧠 Explanation: Middleware is applied using the configure() method in a module class.

4. Which interface must a middleware class implement?
   A. MiddlewareInterface
   B. NestMiddleware
   C. IMiddleware
   D. MiddlewareHandler
   ✅ Correct Answer: B
   🧠 Explanation: NestMiddleware is the interface required for middleware classes.

5. What is a key difference between middleware and interceptors?
   A. Middleware runs after route handler
   B. Middleware can modify response
   C. Middleware runs before route handler
   D. Middleware is async only
   ✅ Correct Answer: C
   🧠 Explanation: Middleware runs before the route handler, while interceptors can wrap around it.

## Day 4: Exception Filters, Pipes, and Validation

1. What is the purpose of an exception filter?
   A. To validate input
   B. To transform output
   C. To handle errors globally or locally
   D. To log requests
   ✅ Correct Answer: C
   🧠 Explanation: Exception filters catch and handle thrown exceptions in a structured way.

2. Which built-in exception class is used for 404 errors?
   A. NotFoundException
   B. BadRequestException
   C. HttpException
   D. ForbiddenException
   ✅ Correct Answer: A
   🧠 Explanation: NotFoundException is used to represent 404 errors.

3. What is the role of pipes in NestJS?
   A. To handle exceptions
   B. To transform and validate data
   C. To manage routing
   D. To inject dependencies
   ✅ Correct Answer: B
   🧠 Explanation: Pipes are used for input validation and transformation.

4. Which library is commonly used with pipes for validation?
   A. class-validator
   B. joi
   C. yup
   D. validator.js
   ✅ Correct Answer: A
   🧠 Explanation: class-validator integrates well with NestJS pipes for DTO validation.

5. How do you apply a pipe globally?
   A. In controller
   B. In main.ts using app.useGlobalPipes()
   C. In module metadata
   D. In service constructor
   ✅ Correct Answer: B
   🧠 Explanation: Global pipes are applied in main.ts using app.useGlobalPipes().



## Day 7: Interceptors, Logging, Configuration

1. What is the purpose of an interceptor in NestJS?
   A. To handle routing
   B. To transform responses or handle logging
   C. To validate input
   D. To manage database connections
   ✅ Correct Answer: B
   🧠 Explanation: Interceptors can transform responses, log requests, and more.

2. Which lifecycle hook is used by interceptors?
   A. onModuleInit
   B. intercept
   C. use
   D. transform
   ✅ Correct Answer: B
   🧠 Explanation: The intercept() method is the core of an interceptor.

3. Which package is used for configuration management in NestJS?
   A. @nestjs/env
   B. @nestjs/config
   C. dotenv
   D. config
   ✅ Correct Answer: B
   🧠 Explanation: @nestjs/config is the official package for managing environment variables.

4. How do you access environment variables using ConfigService?
   A. config.get()
   B. env.get()
   C. ConfigService.get()
   D. process.env.get()
   ✅ Correct Answer: C
   🧠 Explanation: ConfigService.get() is used to retrieve environment variables.

5. Which decorator is used to apply an interceptor to a controller?
   A. @UseInterceptor()
   B. @Interceptor()
   C. @UseInterceptors()
   D. @ApplyInterceptor()
   ✅ Correct Answer: C
   🧠 Explanation: @UseInterceptors() is used to apply one or more interceptors.



## Day 5: Database Integration

1. Which package is commonly used with NestJS for ORM-based database integration?
   A. Sequelize
   B. Prisma
   C. TypeORM
   D. Mongoose
   ✅ Correct Answer: C
   🧠 Explanation: TypeORM is the most commonly used ORM with NestJS.

2. What decorator is used to define an entity in TypeORM?
   A. @Entity()
   B. @Model()
   C. @Schema()
   D. @Document()
   ✅ Correct Answer: A
   🧠 Explanation: @Entity() is used to define a database entity in TypeORM.

3. Which method is used to save a new record using a repository?
   A. insert()
   B. save()
   C. create()
   D. add()
   ✅ Correct Answer: B
   🧠 Explanation: The save() method persists a new or updated entity.

4. What is the purpose of the @InjectRepository() decorator?
   A. To inject a service
   B. To inject a controller
   C. To inject a TypeORM repository
   D. To inject a module
   ✅ Correct Answer: C
   🧠 Explanation: @InjectRepository() is used to inject a TypeORM repository into a service.

5. Which file typically contains the database connection configuration?
   A. main.ts
   B. app.module.ts
   C. ormconfig.json
   D. database.module.ts
   ✅ Correct Answer: C
   🧠 Explanation: ormconfig.json is commonly used to configure TypeORM database connections.



## Day 6: Authentication & Authorization

1. Which module is used for implementing JWT in NestJS?
   A. @nestjs/jwt
   B. @nestjs/passport
   C. @nestjs/auth
   D. @nestjs/security
   ✅ Correct Answer: A
   🧠 Explanation: @nestjs/jwt provides JWT utilities for authentication.

2. What is the purpose of a guard in NestJS?
   A. To validate input
   B. To handle exceptions
   C. To protect routes
   D. To log requests
   ✅ Correct Answer: C
   🧠 Explanation: Guards are used to protect routes and enforce authorization logic.

3. Which decorator is used to extract the JWT payload in a controller?
   A. @Payload()
   B. @User()
   C. @Req()
   D. @Body()
   ✅ Correct Answer: C
   🧠 Explanation: @Req() gives access to the request object, including the JWT payload.

4. What strategy is commonly used with Passport for JWT?
   A. LocalStrategy
   B. JwtStrategy
   C. SessionStrategy
   D. OAuthStrategy
   ✅ Correct Answer: B
   🧠 Explanation: JwtStrategy is used to validate JWT tokens in NestJS.

5. Which decorator is used to define roles in a custom role guard?
   A. @Roles()
   B. @Permissions()
   C. @Access()
   D. @Authorize()
   ✅ Correct Answer: A
   🧠 Explanation: @Roles() is a custom decorator used to define role-based access.



## Day 8: Microservices and Event-Driven Architecture

1. Which package enables microservice support in NestJS?
   A. @nestjs/microservices
   B. @nestjs/events
   C. @nestjs/rpc
   D. @nestjs/queue
   ✅ Correct Answer: A
   🧠 Explanation: @nestjs/microservices provides tools for building microservices.

2. Which transport layer is supported by NestJS microservices?
   A. HTTP
   B. Redis
   C. WebSocket
   D. All of the above
   ✅ Correct Answer: D
   🧠 Explanation: NestJS supports multiple transport layers including Redis, NATS, MQTT, etc.

3. What decorator is used to handle events in a microservice?
   A. @EventHandler()
   B. @OnEvent()
   C. @MessagePattern()
   D. @Subscribe()
   ✅ Correct Answer: C
   🧠 Explanation: @MessagePattern() is used to handle messages in microservices.

4. Which method is used to connect a microservice client?
   A. connectMicroservice()
   B. createMicroservice()
   C. startMicroservice()
   D. useMicroservice()
   ✅ Correct Answer: A
   🧠 Explanation: connectMicroservice() is used to bind a microservice to the main app.

5. What is the purpose of ClientProxy in NestJS?
   A. To send HTTP requests
   B. To manage database connections
   C. To communicate with microservices
   D. To handle logging
   ✅ Correct Answer: C
   🧠 Explanation: ClientProxy is used to send messages to microservices.



## Day 9: Testing and Documentation

1. Which testing framework is used by default in NestJS?
   A. Mocha
   B. Jasmine
   C. Jest
   D. AVA
   ✅ Correct Answer: C
   🧠 Explanation: NestJS uses Jest as the default testing framework.

2. Which method is used to create a testing module?
   A. createTestModule()
   B. Test.createTestingModule()
   C. createModule()
   D. TestModule.create()
   ✅ Correct Answer: B
   🧠 Explanation: Test.createTestingModule() is used to create a test module.

3. Which package is used to generate Swagger documentation?
   A. @nestjs/swagger
   B. @nestjs/docs
   C. swagger-ui
   D. nest-swagger
   ✅ Correct Answer: A
   🧠 Explanation: @nestjs/swagger is the official package for Swagger integration.

4. Which decorator is used to document a route in Swagger?
   A. @ApiRoute()
   B. @ApiOperation()
   C. @RouteDoc()
   D. @SwaggerRoute()
   ✅ Correct Answer: B
   🧠 Explanation: @ApiOperation() is used to describe a route in Swagger.

5. Which tool is used for end-to-end testing in NestJS?
   A. supertest
   B. puppeteer
   C. playwright
   D. selenium
   ✅ Correct Answer: A
   🧠 Explanation: supertest is commonly used for e2e testing in NestJS.



## Day 10: CI/CD, Deployment, and Best Practices

1. Which file is used to define a Docker image for a NestJS app?
   A. Dockerfile
   B. docker-compose.yml
   C. nest.config.js
   D. build.yaml
   ✅ Correct Answer: A
   🧠 Explanation: Dockerfile defines the build instructions for a Docker image.

2. Which CI tool is commonly used with GitHub for NestJS projects?
   A. Jenkins
   B. GitHub Actions
   C. Travis CI
   D. CircleCI
   ✅ Correct Answer: B
   🧠 Explanation: GitHub Actions is a popular CI/CD tool integrated with GitHub.

3. Which command is used to build a NestJS app for production?
   A. nest build
   B. npm run build
   C. yarn build
   D. All of the above
   ✅ Correct Answer: D
   🧠 Explanation: All listed commands can be used depending on the package manager.

4. Which cloud service is commonly used to deploy NestJS apps?
   A. Azure
   B. AWS
   C. Heroku
   D. All of the above
   ✅ Correct Answer: D
   🧠 Explanation: NestJS apps can be deployed to any major cloud provider.

5. Which of the following is a best practice in NestJS?
   A. Use global modules for all services
   B. Avoid using DTOs
   C. Use dependency injection
   D. Use inline SQL queries
   ✅ Correct Answer: C
   🧠 Explanation: Dependency injection is a core best practice in NestJS.


# Assessment 5 (co)

## Day 1: Introduction to NestJS & Environment Setup

1. Which of the following is a key advantage of using NestJS over Express?
A) Built-in support for WebSockets only
B) Modular architecture and dependency injection
C) No support for TypeScript
D) Lack of testing utilities
Correct Answer: B
Explanation: NestJS provides a modular architecture and built-in dependency injection, making it scalable and maintainable.

2. What command initializes a new NestJS project?
A) nest create
B) nest new
C) npm init nest
D) nest start
Correct Answer: B
Explanation: 'nest new' scaffolds a new NestJS project using the CLI.

3. Which file is the entry point of a NestJS application?
A) app.module.ts
B) main.ts
C) app.controller.ts
D) package.json
Correct Answer: B
Explanation: main.ts bootstraps the NestJS application.

4. What is the primary purpose of the Nest CLI?
A) Running database migrations
B) Generating and managing project files
C) Managing environment variables
D) Running tests
Correct Answer: B
Explanation: The Nest CLI helps generate modules, controllers, services, and manage project structure.

5. Which decorator is used to define a controller in NestJS?
A) @Injectable()
B) @Controller()
C) @Module()
D) @Service()
Correct Answer: B
Explanation: @Controller() marks a class as a controller to handle incoming requests.

---

## Day 2: Controllers, Providers, Routing, and Dependency Injection

1. What is the role of a provider in NestJS?
A) Handling HTTP requests
B) Providing business logic and services
C) Defining routes
D) Managing configuration
Correct Answer: B
Explanation: Providers encapsulate business logic and are injected into controllers or other providers.

2. How do you inject a service into a controller?
A) Using @Injectable() in the controller
B) Passing the service as a parameter in the constructor
C) Using @Controller() decorator
D) Importing the service in main.ts
Correct Answer: B
Explanation: Services are injected via the constructor of the controller.

3. Which decorator is used to define a route handler for GET requests?
A) @Post()
B) @Get()
C) @Put()
D) @Delete()
Correct Answer: B
Explanation: @Get() defines a handler for HTTP GET requests.

4. What is the default scope of dependency injection in NestJS?
A) Singleton
B) Transient
C) Request
D) Module
Correct Answer: A
Explanation: By default, providers are singleton-scoped in NestJS.

5. How can you pass route parameters to a controller method?
A) Using @Body() decorator
B) Using @Param() decorator
C) Using @Query() decorator
D) Using @Inject() decorator
Correct Answer: B
Explanation: @Param() extracts route parameters from the request.

---

## Day 3: Modules and Middleware

1. What is the main purpose of a module in NestJS?
A) To handle HTTP requests
B) To group related components and manage dependencies
C) To define database schemas
D) To manage environment variables
Correct Answer: B
Explanation: Modules organize related providers, controllers, and services for better scalability.

2. How do you apply middleware globally in a NestJS application?
A) In the app.module.ts file
B) In the main.ts file using app.use()
C) Using @Middleware() decorator
D) By importing middleware in controllers
Correct Answer: B
Explanation: Global middleware is applied using app.use() in main.ts.

3. Which lifecycle event does middleware execute in?
A) After the response is sent
B) Before the request reaches the route handler
C) During dependency injection
D) After the controller method
Correct Answer: B
Explanation: Middleware runs before the request reaches the route handler.

4. What is the correct way to create a custom middleware in NestJS?
A) Implement the Middleware interface and define the use() method
B) Use @Injectable() decorator only
C) Extend the Controller class
D) Use @Module() decorator
Correct Answer: A
Explanation: Custom middleware implements the Middleware interface and defines the use() method.

5. How can you organize features for scalability in NestJS?
A) By using a single module for all features
B) By splitting features into separate modules
C) By using only controllers
D) By avoiding dependency injection
Correct Answer: B
Explanation: Splitting features into modules improves scalability and maintainability.

---

## Day 4: Exception Filters, Pipes, and Validation

1. What is the purpose of an exception filter in NestJS?
A) To transform request data
B) To handle and customize error responses
C) To validate DTOs
D) To log requests
Correct Answer: B
Explanation: Exception filters handle and format error responses.

2. Which decorator is used to apply a pipe to a controller method parameter?
A) @Pipe()
B) @UsePipes()
C) @Param()
D) @Body()
Correct Answer: B
Explanation: @UsePipes() applies pipes for validation and transformation.

3. What library is commonly used for DTO validation in NestJS?
A) class-transformer
B) class-validator
C) express-validator
D) joi
Correct Answer: B
Explanation: class-validator is the standard library for DTO validation in NestJS.

4. How do you create a custom pipe in NestJS?
A) Implement the PipeTransform interface
B) Use @Pipe() decorator only
C) Extend the Controller class
D) Use @Module() decorator
Correct Answer: A
Explanation: Custom pipes implement the PipeTransform interface.

5. What is the main benefit of using pipes for validation?
A) They log requests
B) They transform and validate incoming data before it reaches the controller
C) They handle errors
D) They manage configuration
Correct Answer: B
Explanation: Pipes ensure data integrity by validating and transforming input before processing.

---

## Day 7: Interceptors, Logging, Configuration

1. What is the main purpose of an interceptor in NestJS?
A) To handle errors
B) To transform and log requests/responses
C) To validate DTOs
D) To manage configuration
Correct Answer: B
Explanation: Interceptors can transform, log, and cache requests/responses.

2. How do you implement centralized logging in NestJS?
A) Using console.log in controllers
B) Using a logging service and global interceptors
C) Using pipes only
D) Using DTOs
Correct Answer: B
Explanation: Centralized logging is achieved with a logging service and interceptors.

3. Which package is used for environment variable management in NestJS?
A) dotenv
B) @nestjs/config
C) config
D) env-manager
Correct Answer: B
Explanation: @nestjs/config is the standard package for environment management.

4. How do you apply an interceptor globally?
A) In the app.module.ts file
B) In main.ts using app.useGlobalInterceptors()
C) Using @Interceptor() decorator
D) By importing in controllers
Correct Answer: B
Explanation: Global interceptors are registered in main.ts.

5. What is the benefit of dynamic configuration loading?
A) It allows for hardcoded values
B) It supports multiple environments and runtime changes
C) It disables environment variables
D) It logs requests
Correct Answer: B
Explanation: Dynamic configuration supports different environments and runtime flexibility.

---

## Day 5: Database Integration

1. Which ORM is commonly used with NestJS for relational databases?
A) Mongoose
B) TypeORM
C) Sequelize
D) Prisma
Correct Answer: B
Explanation: TypeORM is a popular ORM for relational databases in NestJS.

2. What is an entity in TypeORM?
A) A database connection
B) A class representing a database table
C) A controller method
D) A middleware function
Correct Answer: B
Explanation: Entities are classes mapped to database tables.

3. How do you perform CRUD operations in NestJS with TypeORM?
A) Using controllers only
B) Using repositories or services
C) Using middleware
D) Using DTOs only
Correct Answer: B
Explanation: CRUD operations are performed via repositories or services.

4. What is the purpose of a Data Transfer Object (DTO)?
A) To manage database connections
B) To define the shape and validation of data sent between client and server
C) To log requests
D) To handle errors
Correct Answer: B
Explanation: DTOs define and validate the structure of data exchanged.

5. How do you handle database errors gracefully in NestJS?
A) By ignoring errors
B) By using try/catch blocks and exception filters
C) By logging only
D) By using pipes
Correct Answer: B
Explanation: Errors are managed using try/catch and custom exception filters.

---

## Day 6: Authentication & Authorization

1. What is the difference between authentication and authorization?
A) Authentication verifies identity; authorization grants access rights
B) Authentication grants access rights; authorization verifies identity
C) Both are the same
D) Neither is used in NestJS
Correct Answer: A
Explanation: Authentication checks identity, authorization controls access.

2. Which package is commonly used for JWT authentication in NestJS?
A) passport-jwt
B) express-jwt
C) jsonwebtoken
D) nest-jwt
Correct Answer: A
Explanation: passport-jwt integrates JWT authentication with NestJS.

3. What is the role of a Guard in NestJS?
A) To log requests
B) To protect routes and implement authorization logic
C) To validate DTOs
D) To manage configuration
Correct Answer: B
Explanation: Guards control access to routes based on custom logic.

4. How do you hash passwords securely in NestJS?
A) Using the crypto module
B) Using bcrypt or argon2 libraries
C) Using plain text
D) Using JWT
Correct Answer: B
Explanation: bcrypt or argon2 are recommended for secure password hashing.

5. What is RBAC in the context of NestJS?
A) Role-Based Access Control
B) Request-Based Access Control
C) Resource-Based Access Control
D) Route-Based Access Control
Correct Answer: A
Explanation: RBAC restricts access based on user roles.

---

## Day 8: Microservices and Event-Driven Architecture

1. Which module enables microservices in NestJS?
A) @nestjs/microservices
B) @nestjs/events
C) @nestjs/redis
D) @nestjs/kafka
Correct Answer: A
Explanation: @nestjs/microservices provides microservice capabilities.

2. What is the main benefit of event-driven architecture?
A) Synchronous communication
B) Loose coupling and scalability
C) Hardcoded logic
D) No error handling
Correct Answer: B
Explanation: Event-driven architecture enables loose coupling and scalability.

3. Which transport layer is NOT supported by NestJS microservices?
A) TCP
B) Redis
C) HTTP
D) SMTP
Correct Answer: D
Explanation: SMTP is not a supported transport layer in NestJS microservices.

4. How do microservices communicate in NestJS?
A) Through direct function calls
B) Through message brokers and transport layers
C) Through shared databases only
D) Through controllers
Correct Answer: B
Explanation: Microservices use message brokers and transport layers for communication.

5. What is the difference between events and messages in NestJS microservices?
A) Events are for one-way notifications; messages expect a response
B) Both are the same
C) Events expect a response; messages do not
D) Events are synchronous; messages are asynchronous
Correct Answer: A
Explanation: Events notify without expecting a response; messages expect replies.

---

## Day 9: Testing and Documentation

1. Which testing framework is commonly used with NestJS?
A) Mocha
B) Jest
C) Jasmine
D) Ava
Correct Answer: B
Explanation: Jest is the default testing framework for NestJS.

2. How do you mock dependencies in NestJS tests?
A) By using the @Mock() decorator
B) By providing mock implementations in the testing module
C) By using pipes
D) By using DTOs
Correct Answer: B
Explanation: Mock implementations are provided in the testing module setup.

3. What is the purpose of e2e tests?
A) To test individual functions
B) To test the entire application flow from end to end
C) To test DTOs
D) To test configuration
Correct Answer: B
Explanation: E2E tests validate the full application workflow.

4. Which package is used to generate API documentation in NestJS?
A) @nestjs/swagger
B) swagger-ui-express
C) api-docs
D) docgen
Correct Answer: A
Explanation: @nestjs/swagger generates interactive API docs.

5. How do you integrate tests into a CI/CD pipeline?
A) By running tests manually
B) By configuring test scripts in CI/CD workflows
C) By using DTOs
D) By using pipes
Correct Answer: B
Explanation: Tests are automated in CI/CD pipelines via scripts and configuration.

---

## Day 10: CI/CD, Deployment, and Best Practices

1. What is the main benefit of containerizing a NestJS app with Docker?
A) Slower deployments
B) Consistent environment and easy deployment
C) Hardcoded configuration
D) No scalability
Correct Answer: B
Explanation: Docker ensures consistent environments and simplifies deployment.

2. Which tool is commonly used for CI/CD automation in GitHub?
A) Jenkins
B) GitHub Actions
C) Travis CI
D) CircleCI
Correct Answer: B
Explanation: GitHub Actions is integrated with GitHub for CI/CD automation.

3. How do you manage secrets in a production NestJS deployment?
A) Hardcode secrets in code
B) Use environment variables and secret managers
C) Store secrets in public repositories
D) Ignore secrets
Correct Answer: B
Explanation: Secrets should be managed securely using environment variables and secret managers.

4. What is a best practice for scaling a NestJS application?
A) Use a single process for all requests
B) Implement clustering and load balancing
C) Avoid using modules
D) Hardcode configuration
Correct Answer: B
Explanation: Clustering and load balancing improve scalability.

5. Which of the following is NOT a recommended NestJS best practice?
A) Use dependency injection
B) Write tests for critical logic
C) Hardcode configuration values
D) Organize code into modules
Correct Answer: C
Explanation: Hardcoding configuration is discouraged; use environment variables and configuration files.

---

End of Assessment Questions




