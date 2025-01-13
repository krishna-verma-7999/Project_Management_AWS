import { Router } from "express";
import { getTeam } from "../controllers/teamController";

const router = Router();

router.get("/", getTeam);

export default router;
