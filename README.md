# @tanstack/react-query

## Overview
A React application demonstrating the implementation and usage of React Query (TanStack Query) for efficient data fetching and state management.

## Tech Stack
- React 19.0.0
- React Query 5.64.2
- Express 4.21.2
- Axios 1.7.9
- CORS 2.8.5

## Prerequisites
- Node.js (>0.2%)
- npm or yarn

## Project Structure
```
react-query/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── server/
│   └── index.js
├── src/
│   ├── components/
│   ├── hooks/
│   └── App.js
└── package.json
```

## Installation
1. Clone the repository
2. Install dependencies:
```bash
npm install
```

## Available Scripts
- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm eject` - Ejects from Create React App

## Features
- React Query implementation for data fetching
- Custom hooks for data management
- Express backend server
- Development tools integration with @tanstack/react-query-devtools

## Development
The project uses ESLint with configurations extending:
- react-app
- react-app/jest

Browser compatibility is set for:
- Production environments supporting >0.2% market share
- Excludes dead browsers
- Excludes Opera Mini

## Getting Started
1. Start the development server:
```bash
npm start
```
2. Open [http://localhost:3000](http://localhost:3000) in your browser

## API Integration
The project uses Axios for API calls. Configuration can be found in the server directory.

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## Version
Current version: 0.1.0