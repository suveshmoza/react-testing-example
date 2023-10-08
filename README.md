# React Testing Example

Welcome to the React Testing Example project! This repository contains a simple React application built using Vite and TypeScript, with a focus on learning how to write tests for React components using Vitest and Testing Library.

## Getting Started

Follow these steps to get the project up and running on your local machine:

1. Clone the repository:

   ```bash
   git clone git@github.com:suveshmoza/react-testing-example.git
   cd react-testing-example
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit [http://localhost:5173](http://localhost:5173) to see the app in action.

## Available Scripts

In the project directory, you can run the following scripts:

- `npm run dev`: Start the development server using Vite.
- `npm run build`: Build the project for production.
- `npm run lint`: Lint your TypeScript code using ESLint.
- `npm run preview`: Preview the production build.
- `npm test`: Run Jest tests using Vitest for this project.

## Testing

This project is set up with Vitest and Testing Library to facilitate testing of React components. You can write your tests in the `tests` directory. To run the tests, use the following command:

```bash
npm run test
```
You will get the test output in your console

```bash
 ✓ src/tests/components/UserProfile.test.tsx (2) 1849ms
   ✓ Renders loading animation intially 405ms
   ✓ Renders user profile after loading 1437ms

 Test Files  1 passed (1)
      Tests  2 passed (2)
   Start at  23:40:52
   Duration  6.99s (transform 304ms, setup 0ms, collect 964ms, tests 1.85s, environment 1.65s, prepare 560ms)

```

## Dependencies

Here are some of the key dependencies used in this project:

- React and ReactDOM: The core libraries for building user interfaces.
- Vite: A fast and lightweight build tool for modern web development.
- TypeScript: A statically typed superset of JavaScript for enhanced developer tooling.
- Testing Library: A set of utilities for testing React components in a user-centric way.
- Vitest: A testing framework designed for Vite.
