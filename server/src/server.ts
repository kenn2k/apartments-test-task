import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import apartmentRouter from "./routes/apartment.routes";

const app = express();

const port = process.env.PORT!;
const mongoUrl = process.env.MONGO_URL!;

app.use(cors());
app.use(express.json());

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("DB is connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api/apartments", apartmentRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
