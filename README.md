# Games Catalog
![Last Commit](https://img.shields.io/github/last-commit/Fuoad-Ibrahim/games-catalog)

## Overview

Games Catalog is a web application that allows users to browse popular video games and add them to their favorites. The app leverages the IGDB API to fetch game data and provides an intuitive user experience with smooth navigation and interactivity.

The application uses a backend Node.js proxy server deployed on Render.com to securely handle API requests and keep sensitive information hidden.

The backend folder with server.js is included in the project for reference on how the server works.

## Features

- **Game Browsing:** View a list of popular games with images, titles, and release dates.
- **Favorite Management:** Add and remove games from your favorites list, which is maintained through the application state.
- **Dynamic Search:** Search for games using keywords and display the results instantly.
- **Efficient State Management:** Utilizes React Context API to manage global states (games and favorites) without prop drilling.
- **Routing:** Implements client-side navigation using React Router.
- **Proxy Server:** Uses a backend Node.js proxy to handle API requests and secure sensitive data.

## Technologies Used

- **React:** For building the interactive user interface.
- **React Router:** For client-side routing and navigation.
- **Context API:** For global state management (games and favorites).
- **Node.js & Express:** For creating the proxy backend server.
- **Bootstrap:** For responsive design and UI components.
- **IGDB API:** To fetch game data and details.
- **Render.com:** For hosting the backend server.

## Installation

1. Make sure you have **Node.js** (version 18.x or higher) installed on your system. You can download it from [Node.js Official Website](https://nodejs.org/).
2. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/games-catalog.git
   cd games-catalog
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Run the application:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:3000` to view the app.

## Screenshots

- Home Page:
  ![Home Page](./screenshots/home.png)
- Favorites Page:
  ![Favorites Page](./screenshots/favorites.png)
- Game Details:
  ![Game Details](./screenshots/details.png)
