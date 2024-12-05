
# AI Selfie Station CMS

## Description

Selfie Station CMS is a monorepository for full-stack backend project

## Features

- **Fastify Integration**: High-performance web framework.
- **Swagger UI**: Documentation available at `/docs`.
- **Dynamic Routing**: Routes are automatically loaded from the `routes` directory.
- **Environment Variables**: Configured via `.env` files.
- **Alias Support**: Simplified imports using `@/` for `src/`.
- **ESLint**: Code quality enforced with Airbnb's base configuration.
- **TypeScript**: Type safety and better developer experience.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/voidsMark/ai-selfie-cms
   cd ai-selfie-cms
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Copy the example environment file and configure it as needed:
   ```bash
   cp example.env .env
   ```

## Development

Start the development server:

```bash
yarn dev
```

## Build

Build the backend for production:

```bash
yarn build:backend
```

## Folder Structure

```
src/
├── backend/
│   ├── api/           # API-specific logic
│   ├── routes/        # Route definitions
│   ├── utils/         # Utility functions
│   ├── app.ts         # Main Fastify application
│   ├── index.ts       # Entry point for the backend
├── frontend/          # Placeholder for frontend code (not implemented here)
```

## Configuration

### TypeScript

The project uses TypeScript with the following configuration:

- Target: ES2020
- Module Resolution: Node
- Aliases: `@/` mapped to `src/`

### Vite

Vite is configured for both backend (`vite.backend.config.ts`) and general build processes (`vite.config.ts`).

### ESLint

ESLint is set up with Airbnb's base configuration and additional rules defined in `.eslintrc.cjs`.

## Dependencies

### Core Dependencies

- `fastify`: Fast and low overhead web framework.
- `@fastify/swagger`: Swagger documentation generation.
- `dotenv`: Environment variable management.
- `vite`: Build and development server.

### Development Dependencies

- `typescript`: TypeScript support.
- `eslint`: Code linting.
- `@typescript-eslint/eslint-plugin`: TypeScript linting rules.

## License

This project is licensed under the MIT License.
