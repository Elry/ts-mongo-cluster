import { Router } from "express";

const router:Router = Router();

import { player_last_game, player_game_review_bFive} from "../controllers/player.controller";

router.get('/last-game/:date', player_last_game);
router.get('/review-below-five/:avg/:num', player_game_review_bFive);

export default router;