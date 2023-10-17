import {Router} from "express";
import {workController} from "./work.controller";

const router = Router();

router.get("/works", workController.getAll)

export const workRouter = router