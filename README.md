# Custom React Web Application - FER202 Assignment

This project is a full-stack React web application built for the FER202 course, specifically fulfilling Learning Outcomes 1 through 8.

## Application Concept
This application is a **Premium Laptop Store** product management dashboard. It allows users to view a list of products, view details for individual products, and edit product information. The application utilizes a modern, glassmorphism UI design.

## Run Instructions

### Prerequisites
- Node.js installed

### Getting Started
1. Clone this repository or extract the ZIP file.
2. Navigate to the project directory in your terminal.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the mock REST API server (json-server):
   ```bash
   npm run server
   ```
   *Note: This starts the server on `http://localhost:3001` which serves `db.json`.*
5. Open a second terminal window and start the React application:
   ```bash
   npm run dev
   ```
6. Open your browser and navigate to the provided local URL (usually `http://localhost:5173`).

## Learning Outcomes (LO) Fulfillment

* **LO1 (Git & Setup):** Built with Vite (modern React setup) and version controlled with Git (5+ commits).
* **LO2 (Class Component):** The `About.jsx` page is built as a reusable React Class Component displaying dynamic state data.
* **LO3 (JSX & ES6):** The codebase extensively utilizes arrow functions, destructuring, template literals, and JSX syntax.
* **LO4 (Styling & Bootstrap):** The application integrates `react-bootstrap` for the Navbar layout, while retaining highly customized CSS (glassmorphism) for the product grid and edit forms.
* **LO5 (Routing):** Implements React Router with three distinct primary routes: `/` (Home), `/feature` (Product List), and `/about` (About).
* **LO6 (State & Effects):** Employs `useState` and `useEffect` throughout the application for managing forms, fetching data, and component lifecycles, driven by event handlers.
* **LO7 (API & Lazy Loading):** Fetches data asynchronously from a REST API (`json-server`) with robust loading and error states. The Main Feature route (`/feature`) is lazy-loaded using `React.lazy` and `Suspense`.
* **LO8 (Redux Global State):** Uses Redux Toolkit to manage the global products list state. The `Navbar` connects to the Redux store to dynamically display a state summary (Total Products counter).

## Team Contributions
- **Name:** Student Name (Individual)
- **Role:** Full Stack React Developer
- **Contribution:** Developed all UI components, Redux state management, routing, and styling.

## Resource Transparency
- `json-server` utilized for mocking the backend REST API.
- `react-bootstrap` and `bootstrap` used for layout scaffolding.
- Images sourced from assignment assets.
