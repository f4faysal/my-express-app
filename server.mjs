import express from "express";
import cors from "cors";
import productRoutes from "./server/routes/productRoutes.js";
import authRoutes from "./server/routes/authRoutes.js";
import orderRoutes from "./server/routes/orderRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  const htmlContent = `
       <!DOCTYPE html>
       <html lang="en">
       <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>API Home Page</title>
         <style>
           body {
             font-family: Arial, sans-serif;
             margin: 0;
             padding: 0;
             background-color: #f4f4f4;
             display: flex;
             justify-content: center;
             align-items: center;
             height: 100vh;
           }
           .container {
             text-align: center;
             background-color: #fff;
             padding: 40px;
             box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
             border-radius: 8px;
           }
           h1 {
             color: #333;
           }
           p {
             color: #666;
             font-size: 1.1em;
           }
           .button {
             display: inline-block;
             margin-top: 20px;
             padding: 10px 20px;
             background-color: #007bff;
             color: #fff;
             text-decoration: none;
             border-radius: 5px;
             transition: background-color 0.3s;
           }
           .button:hover {
             background-color: #0056b3;
           }
         </style>
       </head>
       <body>
         <div class="container">
           <h1>Welcome to the API Server</h1>
           <p>This is the home page of the API server.</p>
           <a href="/api/products" class="button">Go to Products</a>
         </div>
       </body>
       </html>
     `;

  res.send(htmlContent);
});

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/checkout", orderRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
