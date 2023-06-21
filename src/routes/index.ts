import { Router } from "express";

const userRouter = require("./users");
const router = Router();

router.use("/users", userRouter);

export default router;
