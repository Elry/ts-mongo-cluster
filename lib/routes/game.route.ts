import { Router } from "express";

const router:Router = Router();

import { game_review_below_five } from "../controllers/game.controller";

router.get('/review-below-five/:avgRating/:numGames', game_review_below_five);

export default router;