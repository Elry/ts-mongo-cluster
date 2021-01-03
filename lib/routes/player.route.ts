import { Router } from "express";

const router:Router = Router();

import { player_last_game } from "../controllers/player.controller";

router.get('/last-game/:date', player_last_game);

export default router;