import express from "express";
import cors from "cors";


import commonRouter from "./router/CommonRouter.js";
import adminRouter from "./router/AdminRouter.js";
import I_ProviderRouter from "./router/I_ProviderRouter.js";
import StudentRouter from "./router/studentRouter.js";
import { dbConnect } from "./dbinfo/databaseInfo.js";

const serverApp = express();

dbConnect()
// Middleware
serverApp.use(cors());
serverApp.use(express.json());

// Routers
serverApp.use("/", commonRouter);
serverApp.use("/admin", adminRouter);
serverApp.use("/i_provider", I_ProviderRouter);
serverApp.use("/student", StudentRouter);

// Server
const PORT_NUMBER = 3000;

serverApp.listen(PORT_NUMBER, () => {
  console.log(`Server is listening on http://localhost:${PORT_NUMBER}`);
});