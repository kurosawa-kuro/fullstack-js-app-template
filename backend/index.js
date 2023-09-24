// backend/index.js

// External Imports
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import path from "path";
import expressListEndpoints from "express-list-endpoints";

// Internal Imports
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
// import { router as authRoutes } from "./routes/authRoutes.js";
// import { router as userRoutes } from "./routes/userRoutes.js";
// import { router as postRoutes } from "./routes/postRoutes.js";
// import { router as uploadRoutes } from "./routes/uploadRoutes.js";

// Load Environment Variables
dotenv.config();

// Create Express Application
const app = express();

const { NODE_ENV } = process.env;

if (NODE_ENV === "development") {
    app.use(morgan("dev"));
}

// Middleware Configuration
app.use(express.json(), express.urlencoded({ extended: true }), cookieParser());

// CORS Configuration
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);

// Express Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/posts", postRoutes);
// app.use("/api/upload", uploadRoutes);

// File Upload Endpoint
// app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// Serve Static Files in Production

app.get("/api/", (_req, res) => {
    res.send("API is running....");
});
app.get("/api/endpoints", (request, response) => {
    const originalEndpoints = expressListEndpoints(app);

    const sanitizedEndpoints = originalEndpoints.map((endpoint) => {
        const { middlewares, ...sanitizedEndpoint } = endpoint;
        return sanitizedEndpoint;
    });
    response.send(sanitizedEndpoints);
});


// Error Handlers
app.use(notFound, errorHandler);

export { app };
