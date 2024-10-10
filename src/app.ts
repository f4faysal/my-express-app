/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";

import {
  cartSync,
  checkout,
  getCart,
  getProductById,
  getProducts,
  loginUser,
  user,
} from "./server/productController";

const app: Application = express();

// CORS configuration
app.use(cors()); // Enable CORS for all routes

// You can customize CORS options like this:
// app.use(cors({
//   origin: 'http://your-frontend-domain.com', // Restrict to specific origin
//   methods: ['GET', 'POST'], // Allow specific methods
//   allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
// }));

//parsers
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Docker!!! ",
  });
});

// Throwing an error
app.get("/error", (req, res) => {
  throw new Error("This is a forced error");
});

app.get("/api/cart", getCart);
app.get("/api/products", getProducts);
app.get("/api/auth/user", user);
app.get("/api/products/:id", getProductById);
app.post("/api/checkout", checkout);
app.post("/api/cart/sync", cartSync);
app.post("/api/auth/login", loginUser);

// Error handling
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    message: err.message,
  });
});

// Not Found handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    message: "Not Found",
  });
});

export default app;
