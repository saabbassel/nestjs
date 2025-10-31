# Day06 Interceptors, Logging, Configuration, and Testing

# 🎯 Goals

Understand and implement exception filters for error handling.
Learn to use pipes for data transformation and validation.

# 🛠️ Main points to cover

# detailed agenda

Deep dive into interceptors for logging and transformation.
Handle async configuration.
Understand lifecycle events.
Assignment: Add a request/response logger interceptor.
Introduction to Configuration, Windows: Environment Variables
Quick Intro to Environment Variables, Setting up ConfigModule
TypeORM Configuration, Config Schema Validation, JWT Secret Configuration

## Configuration

- Configuration with ConfigModule

Use @nestjs/config to manage environment variables and application configuration.
Import ConfigModule in app.module.ts and set envFilePath to specify .env files for environment variables.
ConfigService provides methods to read environment variables in code, with fallback values for TypeScript strict null checks.
Store sensitive or environment-specific settings (e.g., PORT) in .env files for flexibility and security.
Confirm configuration by running the app and verifying that environment variables are loaded correctly.

- Centralize Configuration Data

For multiple environment variables, create a configuration.ts file exporting key-value pairs for easy management.
Import the configuration file in AppModule and use the load option to pass it to ConfigModule.
Use ConfigService throughout the app to access configuration values, injecting it into services as needed.
Set isGlobal: true in ConfigModule to make configuration accessible across all modules.
Example: Use maxCartItems in CartService to limit cart size, and dateFormat in TicketsService to format dates.

- Environment and Feature-based Configuration

Separate shared and environment-specific variables into multiple .env files (e.g., .env.staging, .env.production, .env.shared).
Dynamically load the correct env files based on NODE_ENV, allowing different settings for staging, production, etc.
For feature-specific configuration, use ConfigModule.forFeature in the relevant module (e.g., CartModule) to scope settings.
Feature-based config improves testability and maintainability by isolating settings to where they’re needed.
NestJS supports three main configuration strategies: single env file, environment-based config, and feature-based config.
Choose the strategy that best fits your application’s architecture and scaling needs.

## Testing

Write unit tests using Jest.
Test controllers and services.
Use @nestjs/swagger for API documentation.
Learn e2e test setup.
Assignment: Add Swagger docs and unit tests for the main API.

- FCC: Getting started with Jest, Auto Mocking, SpyOn Function, Unit Test Controller, Unit Test Service, E2E Testing
- Write unit + e2e tests; add Swagger / OpenAPI documentation

- Testing and Final Project

  - Unit testing with Jest
  - E2E testing with Supertest
  - Final project: Build a small REST API (e.g., Task Manager or Blog)
  - Hands-on: Write tests and deploy the final project.

- Error Handling
  Robust error handling and testing are essential for scalable, resilient NestJS applications.
  The course covers global error handling, custom exception filters, unit and end-to-end testing, and test-driven development (TDD) best practices.
  By the end, you’ll be able to debug, test, and maintain NestJS apps effectively.
- Explore NestJS Defaults
  NestJS provides a default exception layer that catches unhandled errors, preventing app crashes.
  The HttpException class allows for more specific error responses, including custom status codes and messages.
  HttpStatus enum and built-in exception classes (e.g., GoneException) simplify error handling.
  Default exceptions cover most needs, but custom handling is possible for more control.

- Customize Exception Handling
  Custom exceptions can be created by extending Nest’s HttpException class.
  Custom exception classes allow for tailored error messages and additional response details.
  Exception filters provide fine-grained control over error handling, using the Catch decorator and ExceptionFilter interface.
  Filters can be applied to specific routes or controllers using the UseFilters decorator.
  Filters can build custom JSON responses and handle only certain exception types.

- Go Global
  Global exception filters catch all errors across the application.
  The Catch decorator can be left empty to handle all exceptions, with logic to differentiate error types.
  Register global filters in main.ts for application-wide error handling.
  Filters can inject dependencies (e.g., Logger) for centralized error logging.
  Global filters ensure consistent error management and logging throughout the app.

- Testing
  NestJS uses Jest and Supertest for automated testing; spec files are discovered by naming convention.
  Unit tests and end-to-end (E2E) tests are supported; E2E tests live in a separate folder.
  Good testing practices include planning coverage, shifting left (testing early), and embracing automation.
  Test-driven development (TDD) involves writing tests before code, iterating through red (fail), green (pass), and refactor stages.
  Jest provides describe, it, expect, and beforeEach for organizing and running tests.
  E2E tests use Supertest to simulate HTTP requests and verify responses.

- Write Controller Unit Tests
  Unit tests should isolate the controller from its dependencies, using mocks for services.
  Replace real service injections with mock implementations to avoid dependency issues.
  Use Jest functions to mock service methods and verify controller-service interactions.
  Tests should cover all controller methods, ensuring correct delegation and data handling.

- Write Service Unit Tests
  Service tests should mock repository dependencies to avoid database access.
  Use Jest to create mock repository methods for service logic.
  Test both positive and negative outcomes, including exception handling.
  Ensure service methods behave correctly, including asynchronous operations and error scenarios.
  Write Integration Tests-
  Integration tests verify that controllers and services work together.
  Use E2E test files to simulate real application behavior, including authorization and error handling.
  Apply global guards and pipes in the test app to match production behavior.
  Use mock implementations for repositories when not testing the database.
  Test all routes and scenarios, including valid and invalid requests, to ensure comprehensive coverage.
- Write End-to-end Tests
  E2E tests with a real database (e.g., TypeORM, PostgreSQL) ensure full application functionality.
  Use a separate test database and configure TypeOrmModule for isolation.
  beforeAll and afterAll lifecycle methods manage setup and teardown, including database connections.
  Tests persist data across requests, verifying CRUD operations and data integrity.
  Clean up test data to maintain a pristine test environment.
