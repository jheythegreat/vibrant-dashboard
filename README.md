# Vibrant Dashboard

Vibrant Dashboard is a modern and visually attractive dashboard application built with the latest web technologies, including TypeScript, React, Vite, and Tailwind CSS. This project is designed to provide a smooth and highly configurable user experience.

![Image](https://github.com/user-attachments/assets/3a4cc29a-5e1d-43a6-a81c-e885cdcab9e1)

## Technologies

- **TypeScript**: Used to ensure safer and more predictable code.
- **React**: A JavaScript library for building user interfaces.
- **Vite**: A modern and fast module bundler.
- **Tailwind CSS**: A responsive and customizable CSS framework.
- **ShadCN**: Reusable and customizable UI components.
  
## Installation

To get started with this project, follow these steps:

### 1. Clone the repository
```
git clone https://github.com/jheythegreat/vibrant-dashboard.git
```

### 2. Change to the project directory
```
cd vibrant-dashboard
```

### 3. Install dependencies
```
npm install
```

### 4. Start the development server
```
npm run dev
```

This will start the application at http://localhost:3000

## Project Structure

- `src/`: Contains the source files for the application.

- `src/index.css`: Global CSS styles using Tailwind CSS.

- `src/main.tsx`: Main entry point for the React application.

- `vite.config.ts`: Vite configuration for bundling and development.

- `tsconfig.json`: TypeScript configuration to optimize the build process.

## Configuration
### TypeScript
The project uses two primary TypeScript configurations:

- `tsconfig.app.json`: Configuration for application-specific TypeScript settings.

- `tsconfig.node.json`: Configuration for Node.js environment and bundler mode.

### Tailwind CSS
Tailwind CSS is configured to use a custom `tailwind.config.ts` file, and the global styles are managed through `src/index.css`.

### ShadCN Components
The project includes customizable UI components configured through `components.json` to provide a modern look and feel using ShadCN.

### Application Entry Point
The main HTML file of the application, which contains meta tags for better SEO and includes the necessary script tags for loading the application.
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vibrant Dashboard</title>
    <meta name="description" content="Vibrant Dashboard" />
    <meta name="author" content="Jhey" />
    <meta property="og:title" content="Vibrant Dashboard" />
    <meta property="og:description" content="Vibrant Dashboard" />
    <meta property="og:type" content="website" />
  </head>

  <body>
    <div id="root"></div>
    <script src="https://cdn.gpteng.co/gptengineer.js" type="module"></script>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## Contributing
Feel free to contribute to this project by following these steps:

1. Fork the repository.

2. Create a new branch (`git checkout -b feature/new-feature`).

3. Make your changes.

4. Commit your changes (`git commit -m "Add new feature"`).

5. Push to your branch (`git push origin feature/new-feature`).

6. Create a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](https://github.com/jheythegreat/vibrant-dashboard/blob/main/LICENSE) file for more details.
