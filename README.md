# Movie Explorer

## Setup

1. Get OMDB API Key:
   - Sign up at http://www.omdbapi.com/
   - Create `.env` file:
   ```
   VITE_API_KEY=your_api_key_here
   ```

## Overview
React application for browsing and searching movies using OMDB API.

## Installation
```bash
npm install react-router-dom
```

## Project Structure
```
movie-explorer/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── MovieCard.jsx
│   │   └── MovieGrid.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Search.jsx 
│   │   └── MovieDetails.jsx
│   ├── services/
│   │   └── api.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── .env
├── package.json
└── index.html
```

## Key Components
- **MovieGrid**: Displays movies in grid layout (used in Home and Search)
- **Navbar**: Handles navigation between pages
- **MovieDetails**: Shows detailed movie information

## API Functions
- `searchMovies(query)`: Search movies by query
- `getMovieDetails(id)`: Get movie details by ID

## Navigation
Uses React Router's `Link` component for:
- Client-side routing without page reloads
- State preservation
- Smooth transitions.


