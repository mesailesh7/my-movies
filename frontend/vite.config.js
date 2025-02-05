import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api/": "http://localhost:5000",
      "/uploads/": "http://localhost:5000",
    },
  },
});

// The proxy configuration in your vite.config.js is handling API requests and file uploads during development by redirecting them to your backend server. Here's what each proxy entry does:

// /api/: When your frontend makes requests to any URL starting with /api/, Vite will automatically forward those requests to http://localhost:5000. This allows your frontend to make API calls using relative paths while the actual backend server runs on port 5000.

// /uploads/: Similarly, any requests to URLs starting with /uploads/ will be forwarded to http://localhost:5000. This is typically used for handling file uploads and serving uploaded files from your backend server.

// This proxy setup is particularly useful because:

// It helps avoid CORS issues during development
// You can use clean, relative URLs in your frontend code
// It creates a seamless development environment where your frontend and backend can communicate as if they're on the same origin
// For example, when your frontend makes a request to /api/movies, Vite will actually send that request to http://localhost:5000/api/movies behind the scenes.
