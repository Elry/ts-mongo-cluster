import { Router } from "express";

const router:Router = Router();

import { unutilized_field_availability } from "../controllers/field.controller";
import { player_last_game, player_game_review_bFive} from "../controllers/player.controller";

router.get('/player/last-game', player_last_game);
router.get('/player/review-below-five', player_game_review_bFive);
router.get('/field/unutilized-availability', unutilized_field_availability);
