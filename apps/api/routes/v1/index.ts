import Router from "express";
import userRoutes from "./user";
import websiteRoutes from "./website"
const router = Router();

router.use("/user",userRoutes);
router.use("/website",websiteRoutes);

export default router;