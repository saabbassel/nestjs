# 🎯 Plan 10 Days

By the end of 2 weeks, the trainee will:
Build production-ready REST APIs using NestJS.
Understand dependency injection, modules, and middleware.
Integrate databases (PostgreSQL/MongoDB).
Implement authentication, validation, and testing.
Deploy the app to the cloud (optional last step).

# 📅 WEEK 1 — Foundations & Core Concepts

## 🧩 Day 1: Introduction to NestJS & Environment Setup

## ⚙️ Day 2: Modules: Controllers, Providers, Routing and Dependency Injection

## 🧱 Day 3: Modules and Middleware

## 🧰 Day 4: Exception Filters, Pipes, and Validation

## 🧑‍💻 Day 5: Database Integration

# 📅 WEEK 2 — Advanced Topics & Project Development

## 🔐 Day 6: Authentication & Authorization

## 🌐 Day 7: Interceptors, Logging, Configuration

## 📡 Day 8: Microservices and Event-Driven Architecture

## 🧪 Day 9: Testing and Documentation

## 🚀 Day 10: CI/CD, Deployment, and Best Practices

# Two Weeks NestJS Plan

## WEEK 1 — Core Framework and Foundations

| Day       | Subject                                 | Description                                                                                                                   |
| --------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **Day 1** | Introduction & Setup                    | Overview of NestJS architecture, Node.js refresher, environment setup, and understanding project structure.                   |
| **Day 2** | Controllers & Routing                   | Learn how to handle incoming requests and responses using controllers, decorators, and routing techniques.                    |
| **Day 3** | Dependency Injection & Providers        | Understand Nest’s IoC container, create and use providers for business logic and service abstraction.                         |
| **Day 4** | Modules, Middleware & Pipes             | Structure your application using modules, handle requests with middleware, and use pipes for validation and transformation.   |
| **Day 5** | Exception Filters, Validation & Logging | Implement global and custom exception filters, integrate class-validator, and use built-in logging and configuration modules. |

## WEEK 2 — Advanced Concepts and Production Topics

| Day        | Subject                                                 | Description                                                                                                             |
| ---------- | ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Day 6**  | Database Integration with TypeORM/Prisma                | Integrate relational or NoSQL databases, define entities, and manage repositories using TypeORM or Prisma.              |
| **Day 7**  | Authentication & Authorization                          | Implement JWT-based authentication, role-based access control, and secure routes using Nest guards.                     |
| **Day 8**  | Interceptors, Microservices & Event-Driven Architecture | Implement interceptors for request/response transformation, and build microservices using TCP or RabbitMQ transporters. |
| **Day 9**  | Advanced Architecture, GraphQL & Real-Time APIs         | Learn modular monolith vs microservices, create GraphQL resolvers, and build WebSocket-based real-time APIs.            |
| **Day 10** | Deployment, CI/CD, Monitoring & Final Project           | Automate deployment with Docker and CI/CD pipelines, monitor app health, and present a final mini-project.              |

# 14 Days plan

## WEEK 1 — Core Framework and Foundations

| Day       | Subject                               | Description                                                                                                                 |
| --------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **Day 1** | Introduction & Setup                  | Overview of NestJS architecture, Node.js refresher, environment setup, and understanding project structure.                 |
| **Day 2** | Controllers & Routing                 | Learn how to handle incoming requests and responses using controllers, decorators, and routing techniques.                  |
| **Day 3** | Dependency Injection & Providers      | Understand Nest’s IoC container, create and use providers for business logic and service abstraction.                       |
| **Day 4** | Modules, Middleware & Pipes           | Structure your application using modules, handle requests with middleware, and use pipes for validation and transformation. |
| **Day 5** | Exception Filters & Validation        | Implement global and custom exception filters and integrate class-validator for request data validation.                    |
| **Day 6** | Interceptors, Configuration & Logging | Implement interceptors for request/response transformation, and use built-in logging and configuration modules.             |
| **Day 7** | Testing & API Documentation           | Write unit and e2e tests using Jest, and document APIs with Swagger for better developer experience.                        |

## WEEK 2 — Advanced Concepts and Production Topics

| Day        | Subject                                   | Description                                                                                                |
| ---------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Day 8**  | Database Integration with TypeORM/Prisma  | Integrate relational or NoSQL databases, define entities, and manage repositories using TypeORM or Prisma. |
| **Day 9**  | Authentication & Authorization            | Implement JWT-based authentication, role-based access control, and secure routes using Nest guards.        |
| **Day 10** | Microservices & Event-Driven Architecture | Build microservices using TCP or RabbitMQ transporters and explore message-based communication patterns.   |
| **Day 11** | Advanced Architecture & Best Practices    | Learn modular monolith vs microservices, configuration management, and clean architecture patterns.        |
| **Day 12** | Real-Time & GraphQL APIs                  | Create WebSocket-based real-time APIs and build flexible schemas and resolvers using GraphQL.              |
| **Day 13** | Deployment, CI/CD & Monitoring            | Automate deployment with Docker, CI/CD pipelines, and monitor application health with logging and metrics. |
| **Day 14** | Review & Final Project Presentation       | Apply all learned concepts in a mini-project, review code quality, and present outcomes.                   |

## Course plan 2

| Day        | Focus / Topic                               | Suggested Course Material                                                                                | Hands-On Assignment                                                             |
| ---------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| **Day 2**  | Controllers, Routes & Basics                | Udemy: (begin with controllers + routing) <br> NestJS Learn: “Controllers & providers”                   | Build basic CRUD endpoints (e.g. cats) using controller + service               |
| **Day 3**  | Dependency Injection & Providers            | Udemy: services & DI modules <br> NestJS Learn: “Providers, dependency injection”                        | Refactor your endpoints to use services, inject dependencies                    |
| **Day 4**  | Modules, Middleware, Pipes                  | Wanago: module architecture <br> NestJS Learn: “Middleware, pipes, filters”                              | Add a validation pipe, custom middleware for logging                            |
| **Day 5**  | Exception Filters & Validation              | Wanago + Udemy: error handling techniques <br> NestJS Learn: “Exceptions & filters”                      | Add global exception filter, validate DTOs with class-validator                 |
| **Day 6**  | Database Integration                        | Udemy: TypeORM / database modules <br> Wanago: database layer                                            | Connect to PostgreSQL (or SQLite), define Entities, CRUD in DB                  |
| **Day 7**  | Authentication & Authorization              | Udemy: JWT auth <br> Wanago: roles/guards <br> NestJS Learn: “Guards and auth”                           | Implement login / signup, JWT guard, role-based access control                  |
| **Day 8**  | Interceptors, Logging, Configuration        | Wanago: logging / interceptors <br> NestJS Learn: “Interceptors and configuration”                       | Add an interceptor for response transformation & logging, externalize config    |
| **Day 9**  | Microservices / Messaging                   | Wanago + NestJS Learn: microservices chapter <br> Udemy if it covers messaging                           | Build a small message-based module (e.g. emit events via in-memory or RabbitMQ) |
| **Day 10** | Testing & API Documentation                 | Udemy: testing modules <br> Wanago: testing controllers & services <br> NestJS Learn: “Testing and docs” | Write unit + e2e tests; add Swagger / OpenAPI documentation                     |
| **Day 11** | Advanced Patterns & Best Practices          | Wanago: design patterns, architecture <br> NestJS Learn: “Advanced topics”                               | Refactor code, modularize, apply SOLID / clean architecture                     |
| **Day 12** | Caching, WebSockets, GraphQL (select topic) | Udemy / Wanago: modules on real-time or GraphQL if available                                             | Add one advanced feature (e.g. WebSocket gateway or GraphQL API)                |
| **Day 13** | Deployment, CI/CD & Monitoring              | Udemy: deployment chapter <br> NestJS Learn: “Deployment”                                                | Write a Dockerfile, deploy to Azure / Container Apps, add logging & monitoring  |
| **Day 14** | Review, Refactor & Final Project            | Review all modules, polish your project, add missing features                                            | Finalize mini-project, present design, write readme & API docs                  |

# 10 Days plan

### WEEK 1 — Core Framework and Foundations

| Day       | Subject                                 | Description                                                                                                                   |
| --------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **Day 1** | Introduction & Setup                    | Overview of NestJS architecture, Node.js refresher, environment setup, and understanding project structure.                   |
| **Day 2** | Controllers & Routing                   | Learn how to handle incoming requests and responses using controllers, decorators, and routing techniques.                    |
| **Day 3** | Dependency Injection & Providers        | Understand Nest’s IoC container, create and use providers for business logic and service abstraction.                         |
| **Day 4** | Modules, Middleware & Pipes             | Structure your application using modules, handle requests with middleware, and use pipes for validation and transformation.   |
| **Day 5** | Exception Filters, Validation & Logging | Implement global and custom exception filters, integrate class-validator, and use built-in logging and configuration modules. |

### WEEK 2 — Advanced Concepts and Production Topics

| |
| Day | Subject | Description |
| ---------- | ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Day 6** | Database Integration with TypeORM/Prisma | Integrate relational or NoSQL databases, define entities, and manage repositories using TypeORM or Prisma. |
| **Day 7** | Authentication & Authorization | Implement JWT-based authentication, role-based access control, and secure routes using Nest guards. |
| **Day 8** | Interceptors, Microservices & Event-Driven Architecture | Implement interceptors for request/response transformation, and build microservices using TCP or RabbitMQ transporters. |
| **Day 9** | Advanced Architecture, GraphQL & Real-Time APIs | Learn modular monolith vs microservices, create GraphQL resolvers, and build WebSocket-based real-time APIs. |
| **Day 10** | Deployment, CI/CD, Monitoring & Final Project | Automate deployment with Docker and CI/CD pipelines, monitor app health, and present a final mini-project. |
