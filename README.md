# Template Next.js Project

This template is a Next.js application integrated with Material-UI, optimized for a streamlined development workflow and easy deployment. It includes Docker and Docker Compose configurations, pnpm for package management, and ESLint and Prettier for code quality and consistency.

## Project Structure

```plaintext
.
├── Dockerfile                # Docker configuration for production
├── Dockerfile.dev            # Docker configuration for development
├── README.md                 # Project overview and instructions
├── compose.yaml              # Docker Compose setup for managing containers
├── next-env.d.ts             # TypeScript environment definitions for Next.js
├── next.config.ts            # Next.js configuration file
├── node_modules              # Installed node dependencies
├── package-lock.json         # Dependency lock file for npm
├── package.json              # Project dependencies and scripts
├── pnpm-lock.yaml            # Dependency lock file for pnpm
├── public                    # Public assets (favicon, images, etc.)
│   ├── favicon.ico           # App icon displayed in browser tab
├── src                       # Main application codebase
│   ├── app                   # App directory with route components
│   │   ├── favicon.ico       # App icon in the app directory
│   │   ├── fonts             # Custom fonts
│   │   ├── layout.tsx        # App-wide layout component wrapping pages
│   │   ├── page.module.css   # Styling for the main page
│   │   └── page.tsx          # Main page or home component
│   ├── components            # Reusable UI components (e.g., buttons, inputs)
│   │   ├── CustomButton.tsx  # Custom button component using Material-UI
│   │   └── ...               # Additional reusable components
│   ├── lib                   # Utility functions and shared libraries
│   │   └── ...               # Helper functions (e.g., API handlers, formatting)
│   ├── styles
│   │   └── globals.css       # Global styles applied across the app
│   └── types                 # TypeScript type definitions for strong typing
└── tsconfig.json             # TypeScript configuration for project setup
```

### Folder and File Descriptions

- **Dockerfile / Dockerfile.dev**: Configures the Docker images for production and development environments.
- **compose.yaml**: Manages multi-container Docker applications for easy setup of the development or production environment.
- **app**: Contains primary routing pages and layout files, such as the homepage (`page.tsx`) and global layout (`layout.tsx`).
- **components**: Houses reusable React components, including Material-UI elements (e.g., `CustomButton`) for consistency and modularity.
- **lib**: Holds utility functions and libraries that are shared across the app, such as API handlers or format helpers.
- **styles/globals.css**: Global CSS styles that apply across all pages and components for consistent theming.
- **types**: TypeScript type definitions that improve code readability and type safety across the codebase.

This project structure ensures a modular, scalable setup, with Docker for containerized environments and Material-UI components for a consistent design across the application.

## Getting Started

### Prerequisites

- **Docker** and **Docker Compose** installed
- **pnpm** installed globally (optional but recommended for local development)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/masaishi/template-nextjs.git
   cd template-nextjs
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

## Development

To start the application in development mode with hot reloading, use Docker Compose:

```bash
docker compose up dev
```

This command starts the Next.js app at `http://localhost:3000` with live reloading enabled.

## Production

To build and run the application in production mode:

1. Build the production container:

   ```bash
   docker compose up --build prod
   ```

2. The application will be available at `http://localhost:3000`.

## Scripts and Commands

### `pnpm` Commands

- **`pnpm dev`**: Start the development server with Turbopack for fast, incremental builds and hot reloading.
- **`pnpm build`**: Build the application for production.
- **`pnpm start`**: Start the production server after building.
- **`pnpm lint`**: Run ESLint for linting.
- **`pnpm format`**: Format the codebase using Prettier.
- **`pnpm check-format`**: Check for formatting issues without modifying files.

### Docker Compose Commands

- **Development**: Run the app in development mode with live reloading.

  ```bash
  docker compose up dev
  ```

- **Production**: Build and run the app in production mode.

  ```bash
  docker compose up prod
  ```

- **Rebuild Containers**: Rebuild the containers if you update dependencies or the Dockerfile.

  ```bash
  docker compose up --build dev
  ```

- **Clean Build**: Use `--no-cache` for a fresh build.
  ```bash
  docker compose build --no-cache
  ```

## Code Formatting and Linting

This project uses **Prettier** for formatting and **ESLint** for linting.

### Adding Prettier

1. **Format Code**: To format all files:

   ```bash
   pnpm format
   ```

2. **Check Formatting**: To check for unformatted files without applying changes:

   ```bash
   pnpm check-format
   ```

3. **VSCode Integration** (optional):

   - Enable `editor.formatOnSave` in `.vscode/settings.json` to format on save:

     ```json
     {
       "editor.formatOnSave": true,
       "editor.defaultFormatter": "esbenp.prettier-vscode"
     }
     ```

## Dependencies

### Main Dependencies

- `next`: Framework for building React applications
- `react` and `react-dom`: For building user interfaces
- `@mui/material`, `@mui/icons-material`, `@emotion/react`, `@emotion/styled`: Material UI components and styling
- `axios`: For HTTP requests

### Development Dependencies

- `typescript`: Adds TypeScript support
- `eslint` and `eslint-config-next`: Configures ESLint for Next.js
- `prettier`: Formats the codebase
