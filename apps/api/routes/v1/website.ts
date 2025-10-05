import Router from "express";
const router = Router();
import { createUser } from "../../controller/website.controller";

router.post("/", createUser)

export default router;